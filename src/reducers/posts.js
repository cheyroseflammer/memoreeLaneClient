const reducer = (posts = [], action) => {
  switch (action.type) {
    case 'PUT':
      return posts.map((post) => (post.post_id === action.payload.post_id ? action.payload : post));
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      return [...posts, action.payload];
    default:
      return posts;
  }
};

export default reducer;
