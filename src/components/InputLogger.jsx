import { useState } from 'react';

function InputLogger() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    // Question 3 : Observer le SyntheticEvent
    console.log("SyntheticEvent React :", event);
    setText(event.target.value);
  };

  console.log("render <InputLogger>");

  return (
    <div style={{ border: '1px solid blue', padding: '10px', margin: '10px' }}>
      <h3>Logger d'entrée</h3>
      <input type="text" onChange={handleChange} placeholder="Tapez quelque chose..." />
      <p>Valeur : {text}</p>
    </div>
  );
}

export default InputLogger;