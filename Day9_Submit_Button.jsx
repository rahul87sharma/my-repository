import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('Submit button is clicked');
  };

  return (
    <div>
      <button onClick={handleClick}>Submit</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
