import { useState } from "react";
import CommentSection from "./CommentSection";

export default function PostCard({ post, dispatch }) {
  // état local pour toggle
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes || 3); // likes fictifs init
  const [retweeted, setRetweeted] = useState(false);
  const [retweetCount, setRetweetCount] = useState(post.retweets || 1); // retweets fictifs init

  const toggleLike = () => {
    setLiked(!liked);
    setLikesCount(prev => liked ? prev - 1 : prev + 1);
  };

  const toggleRetweet = () => {
    setRetweeted(!retweeted);
    setRetweetCount(prev => retweeted ? prev - 1 : prev + 1);
  };

  return (
    <div className="post-card">
      <strong>{post.author}</strong>
      <p>{post.content}</p>

      {/* Bouton Aimer */}
      <button
        onClick={toggleLike}
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
        {liked ? "❤️ Aimé" : "🤍 Aimer"} {likesCount}
      </button>

      {/* Bouton Retweeter */}
      <button
        onClick={toggleRetweet}
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
        {retweeted ? "🔁 Retweeté" : "🔁 Retweeter"} {retweetCount}
      </button>

      {/* Supprimer */}
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

      {/* Commentaires */}
      <CommentSection post={post} dispatch={dispatch} />
    </div>
  );
}
