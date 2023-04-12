const reducer = (posts = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'LIKE':
      return posts.map((post) => (post.post_id === action.payload.post_id ? action.payload : post));
    case 'CREATE':
      return [...posts, action.payload];
    case 'UPDATE':
      return posts.map((post) => (post.post_id === action.payload.post_id ? action.payload : post));
    case 'DELETE':
      return posts.filter((post) => post.post_id !== action.payload);
    default:
      return posts;
  }
};

export default reducer;
