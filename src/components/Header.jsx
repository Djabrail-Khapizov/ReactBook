function Header({ onAddPost }) {
  return (
    <header>
      <h1>ReactBook</h1>
      <button onClick={onAddPost}>Ajouter un Post</button>
    </header>
  )
}

export default Header
