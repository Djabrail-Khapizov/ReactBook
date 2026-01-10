import { useState } from 'react';

function MessageForm({ onAddMessage }) {
  const [text, setText] = useState('');

  const handlePublish = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAddMessage(text); // Remontée d'état vers le parent
      setText('');
    }
  };

  return (
    <div style={{ marginTop: '10px' }}>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Votre message..." />
      <button onClick={handlePublish}>Publier</button>
    </div>
  );
}

export default MessageForm;