import { useReducer } from 'react';
import { feedReducer, initialState } from '../reducers/feedReducer';
import PostCard from './PostCard';
import CreatePostForm from './CreatePostForm';

function Feed() {
  const [state, dispatch] = useReducer(feedReducer, initialState);

  return (
    <section>
      <h2>Fil d’actualité</h2>
      <CreatePostForm dispatch={dispatch} />
      {state.map(post => (
        <div key={post.id} style={{ border: '1px solid #ddd', padding: '10px', margin: '5px' }}>
          <PostCard {...post} />
          <button onClick={() => dispatch({ type: 'TOGGLE_LIKE', id: post.id })}>
            {post.liked ? '❤️ Aimé' : '🤍 J\'aime'}
          </button>
          <button onClick={() => dispatch({ type: 'DELETE_POST', id: post.id })} style={{ color: 'red' }}>
            Supprimer
          </button>
        </div>
      ))}
    </section>
  );
}

export default Feed;