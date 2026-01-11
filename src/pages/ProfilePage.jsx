import { useParams } from "react-router-dom";

export default function ProfilePage() {
  const { username } = useParams();

  return (
    <div>
      <h2>Profil de {username}</h2>
    </div>
  );
}
