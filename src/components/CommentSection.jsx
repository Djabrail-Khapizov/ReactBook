import { useState } from "react";

export default function CommentSection({ post, dispatch }) {
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  if (!post) return null;

  const submit = e => {
    e.preventDefault();
    if (!text.trim()) return;

    dispatch({
      type: "ADD_COMMENT",
      payload: { postId: post.id, text }
    });
    setText("");
  };

  const saveEdit = (commentId) => {
    if (!editText.trim()) return;

    dispatch({
      type: "EDIT_COMMENT",
      payload: { postId: post.id, commentId, text: editText }
    });

    setEditingId(null);
  };

  return (
    <div className="comment-section">
      {post.comments.map(c => (
        <div key={c.id} className="comment">
          {editingId === c.id ? (
            <input value={editText} onChange={e => setEditText(e.target.value)} />
          ) : (
            <span>{c.text}</span>
          )}

          <button onClick={() => { setEditingId(c.id); setEditText(c.text); }}>✏️</button>

          <button onClick={() =>
            dispatch({ type: "DELETE_COMMENT", payload: { postId: post.id, commentId: c.id } })
          }>
            🗑
          </button>

          <button onClick={() =>
            dispatch({ type: "LIKE_COMMENT", payload: { postId: post.id, commentId: c.id } })
          }>
            ❤️ {c.likes}
          </button>

          {editingId === c.id && <button onClick={() => saveEdit(c.id)}>💾</button>}
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
