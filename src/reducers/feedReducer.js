export function feedReducer(state, action) {
  switch (action.type) {
    case "ADD_POST":
      return [
        {
          id: Date.now(), // ID unique
          author: action.payload.author,
          content: action.payload.content,
          likes: 0,
          comments: []
        },
        ...state
      ];

    case "LIKE_POST":
      return state.map(post =>
        post.id === action.payload
          ? { ...post, likes: post.likes + 1 }
          : post
      );

    case "RESET_LIKES":
      return state.map(post =>
        post.id === action.payload
          ? { ...post, likes: 0 }
          : post
      );

    case "DELETE_POST":
      return state.filter(post => post.id !== action.payload);

    case "ADD_COMMENT":
      return state.map(post =>
        post.id === action.payload.postId
          ? {
              ...post,
              comments: [
                ...post.comments,
                { id: Date.now(), text: action.payload.text, likes: 0 }
              ]
            }
          : post
      );

    case "LIKE_COMMENT":
      return state.map(post =>
        post.id === action.payload.postId
          ? {
              ...post,
              comments: post.comments.map(c =>
                c.id === action.payload.commentId
                  ? { ...c, likes: c.likes + 1 }
                  : c
              )
            }
          : post
      );

    case "DELETE_COMMENT":
      return state.map(post =>
        post.id === action.payload.postId
          ? {
              ...post,
              comments: post.comments.filter(
                c => c.id !== action.payload.commentId
              )
            }
          : post
      );

    case "EDIT_COMMENT":
      return state.map(post =>
        post.id === action.payload.postId
          ? {
              ...post,
              comments: post.comments.map(c =>
                c.id === action.payload.commentId
                  ? { ...c, text: action.payload.text }
                  : c
              )
            }
          : post
      );

    default:
      return state;
  }
}
