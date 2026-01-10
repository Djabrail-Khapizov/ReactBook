export const initialState = [
  { id: 1, author: 'Djab1', content: 'Premier poste', likes: 5, liked: false },
  { id: 2, author: 'Djab2', content: 'Bien joué', likes: 2, liked: false }
];

export function feedReducer(state, action) {
  switch (action.type) {
    case 'ADD_POST':
      // On ajoute le nouveau post (action.payload) au début du tableau
      return [action.payload, ...state];

    case 'TOGGLE_LIKE':
      return state.map(post =>
        post.id === action.id 
          ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 } 
          : post
      );

    case 'DELETE_POST':
      return state.filter(post => post.id !== action.id);

    default:
      return state;
  }
}