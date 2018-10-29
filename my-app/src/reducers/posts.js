// a reducer takes in two things:
// 1. the acton (info about what happened) and
// 2. a copy of current state

// every time you dispatch an action, every single reducer will fire off. whether you handle the action or not (to change state), is defined in the switch statements.

const posts = (state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  }, action) => {
    switch(action.type) {
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
      case 'FETCH_DATA_SUCCEEDED': // batch load all posts
        return {
          ...state,
          isFetching: false,
          didInvalidate: false,
          items: action.data[0]
        };
      case 'INCREMENT_LIKES':
        const i = action.index;
        // make a copy of the post array but only modify the likes property of the index object
        return {
          ...state,
          items: [
            ...state.items.slice(0, i), // before the one we are updating
            {...state.items[i], likes: state.items[i].likes + 1},
            ...state.items.slice(i + 1), // after the one we are updating
          ]
        };
      default:
        return state;
    }
  }
  
  export default posts;
  