import CommentSection from "./CommentSection";

export default function PostCard({ post, dispatch }) {
  return (
    <div className="post-card">
      <strong>{post.author}</strong>
      <p>{post.content}</p>

      <button onClick={() => dispatch({ type: "LIKE_POST", payload: post.id })}>
        ❤️ {post.likes}
      </button>

      <button onClick={() => dispatch({ type: "RESET_LIKES", payload: post.id })}>
        🔄 Réinitialiser
      </button>

      <button onClick={() => dispatch({ type: "DELETE_POST", payload: post.id })}>
        🗑 Supprimer
      </button>

      <CommentSection post={post} dispatch={dispatch} />
    </div>
  );
}
