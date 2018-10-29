// sub reducer to handle individual comments
const postComments = (state = [], action) => {
    const i = action.i;
  
    switch(action.type) {
      case 'ADD_COMMENT':
        return [
          // return the old state with new comment
          ...state, 
          {
            user: action.author,
            text: action.comment
          }
        ];
      case 'REMOVE_COMMENT':
        return [
          ...state.slice(0, i),  // from start till the comment we want to delete
          ...state.slice(i + 1)  // after the deleted comment till the end
        ];
      case 'EDIT_COMMENT':
        return [
          // replace current comment with new one
          ...state.slice(0, i),
          {
            user: action.author,
            text: action.comment
          },
          ...state.slice(i + 1)
        ];
      default:
        return state;
    }
  }
  
  // reducer to handle entire comments state
  const comments = (state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  }, action) => {
    switch (action.type) {
      case 'INVALIDATE_DATA':
        return {
          ...state,
          didInvalidate: true
        };
      case 'FETCH_DATA_REQUESTED':
        return {
          ...state,
          isFetching: true,
          didInvalidate: false
        };
      case 'FETCH_DATA_SUCCEEDED':
        return {
          ...state,
          isFetching: false,
          didInvalidate: false,
          items: action.data[1]
        };
    }
  
    if(typeof action.postId !== 'undefined') {
      return {
        ...state,
        // take current item state and merge new comment
        items: Object.assign(state.items, {
            [action.postId]: postComments(state.items[action.postId], action)
          })
      };
    }
    return state;
  }
  
  export default comments;
  