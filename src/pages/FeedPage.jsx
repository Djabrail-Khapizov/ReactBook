import { useContext, useReducer, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { feedReducer } from "../reducers/feedReducer";
import CreatePost from "../components/CreatePost";
import PostCard from "../components/PostCard";

export default function FeedPage() {
  const { user } = useContext(AuthContext);

  const [posts, dispatch] = useReducer(feedReducer, [
    {
      id: Date.now(),
      author: "Alice",
      content: "Bienvenue sur ReactBook",
      likes: 0,
      comments: []
    }
  ]);

  const [search, setSearch] = useState("");

  return (
    <div className="feed-container">
      {/* Barre de recherche stylée */}
      <div style={{
        marginBottom: "15px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        borderRadius: "25px",
        overflow: "hidden"
      }}>
        <input
          placeholder="Rechercher par auteur..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            width: "100%",
            padding: "12px 15px",
            border: "1px solid #e1e8ed",
            fontSize: "1rem",
            borderRadius: "25px"
          }}
        />
      </div>

      {/* Création de post */}
      <CreatePost
        onSubmit={text =>
          dispatch({
            type: "ADD_POST",
            payload: { author: user.username, content: text }
          })
        }
      />

      {/* Affichage des posts filtrés */}
      {posts
        .filter(post =>
          post.author.toLowerCase().includes(search.toLowerCase())
        )
        .map(post => (
          <PostCard key={post.id} post={post} dispatch={dispatch} />
        ))}
    </div>
  );
}
