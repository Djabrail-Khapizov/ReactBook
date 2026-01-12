import { useState } from "react";

export default function CommentSection({ post, dispatch }) {
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  // State global local pour les likes des commentaires
  const initialLikes = {};
  post.comments.forEach(c => {
    if (!(c.id in initialLikes)) initialLikes[c.id] = c.likes || 0;
  });

  const [commentLikes, setCommentLikes] = useState(initialLikes);
  const [commentLiked, setCommentLiked] = useState({}); // toggle par commentaire

  if (!post) return null;

  const toggleLike = (commentId) => {
    setCommentLiked(prev => ({ ...prev, [commentId]: !prev[commentId] }));
    setCommentLikes(prev => ({
      ...prev,
      [commentId]: prev[commentId] + (commentLiked[commentId] ? -1 : 1)
    }));
  };

  const submit = e => {
    e.preventDefault();
    if (!text.trim()) return;

    dispatch({
      type: "ADD_COMMENT",
      payload: { postId: post.id, text }
    });
    setText("");
  };

  return (
    <div className="comment-section">
      {post.comments.map(c => (
        <div key={c.id} className="comment">
          {editingId === c.id ? (
            <input
              value={editText}
              onChange={e => setEditText(e.target.value)}
            />
          ) : (
            <span>{c.text}</span>
          )}

          <button onClick={() => { setEditingId(c.id); setEditText(c.text); }}>✏️</button>

          <button onClick={() =>
            dispatch({ type: "DELETE_COMMENT", payload: { postId: post.id, commentId: c.id } })
          }>
            🗑
          </button>

          {/* Like fictif */}
          <button
            onClick={() => toggleLike(c.id)}
            style={{
              backgroundColor: commentLiked[c.id] ? "#e0245e" : "#f5f8fa",
              color: commentLiked[c.id] ? "#fff" : "#0f1419",
              borderRadius: "8px",
              padding: "3px 8px",
              marginLeft: "5px",
              border: "1px solid #e1e8ed",
              cursor: "pointer"
            }}
          >
            {commentLiked[c.id] ? "❤️ Aimé" : "🤍 Aimer"} {commentLikes[c.id]}
          </button>

          {editingId === c.id && (
            <button onClick={() => {
              dispatch({
                type: "EDIT_COMMENT",
                payload: { postId: post.id, commentId: c.id, text: editText }
              });
              setEditingId(null);
            }}>💾</button>
          )}
        </div>
      ))}

      <form onSubmit={submit}>
        <input
          placeholder="Commenter..."
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </form>
    </div>
  );
}
