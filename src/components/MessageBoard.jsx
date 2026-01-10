import { useState } from 'react';
import MessageForm from './MessageForm';

function MessageBoard() {
  const [messages, setMessages] = useState([]);

  const addMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  console.log("render <MessageBoard>");

  return (
    <div style={{ border: '1px solid red', padding: '10px', margin: '10px' }}>
      <h3>Tableau de Messages</h3>
      <MessageForm onAddMessage={addMessage} />
      <ul>
        {messages.map((msg, index) => <li key={index}>{msg}</li>)}
      </ul>
    </div>
  );
}

export default MessageBoard;