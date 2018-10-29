// increment
export const increment = (index) => ({
    type: 'INCREMENT_LIKES',
    index
  });
  
  // add comment
  export const addComment = (postId, author, comment) => ({
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  });
  
  // remove comment
  export const removeComment = (postId, i) => ({
    type: 'REMOVE_COMMENT',
    postId,
    i
  });
  
  // edit comment
  export const editComment = (postId, i, author, comment) => ({
    type: 'EDIT_COMMENT',
    postId,
    i,
    author,
    comment
  });