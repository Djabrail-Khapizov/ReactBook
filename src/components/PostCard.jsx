import { useState } from "react";
import CommentSection from "./CommentSection";

export default function PostCard({ post, dispatch }) {
  // toggle simple pour affichage
  const [liked, setLiked] = useState(false);
  const [retweeted, setRetweeted] = useState(false); // option retweet

  return (
    <div className="post-card">
      <strong>{post.author}</strong>
      <p>{post.content}</p>

      {/* Aimer / Aimé */}
      <button
        onClick={() => setLiked(!liked)}
        style={{
          backgroundColor: liked ? "#e0245e" : "#f5f8fa",
          color: liked ? "#fff" : "#0f1419",
          borderRadius: "10px",
          padding: "5px 10px",
          marginRight: "10px",
          border: "1px solid #e1e8ed",
          cursor: "pointer"
        }}
      >
        {liked ? "❤️ Aimé" : "🤍 Aimer"}
      </button>

      {/* Retweet affichage simple */}
      <button
        onClick={() => setRetweeted(!retweeted)}
        style={{
          backgroundColor: retweeted ? "#17bf63" : "#f5f8fa",
          color: retweeted ? "#fff" : "#0f1419",
          borderRadius: "10px",
          padding: "5px 10px",
          marginRight: "10px",
          border: "1px solid #e1e8ed",
          cursor: "pointer"
        }}
      >
        {retweeted ? "🔁 Retweeté" : "🔁 Retweeter"}
      </button>

      {/* Supprimer post */}
      <button
        onClick={() => dispatch({ type: "DELETE_POST", payload: post.id })}
        style={{
          borderRadius: "10px",
          padding: "5px 10px",
          border: "1px solid #e1e8ed",
          backgroundColor: "#f5f8fa",
          cursor: "pointer",
          color: "#0f1419"
        }}
      >
        🗑 Supprimer
      </button>

      {/* Section commentaires */}
      <CommentSection post={post} dispatch={dispatch} />
    </div>
  );
}
