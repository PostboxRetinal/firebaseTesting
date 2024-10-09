import React, { useState } from 'react';
import { Register } from './components/Register.jsx'

const App = () => {
  const [showRegister, setshowRegister] = useState(true);

  return (
    <>
      <div id='Register'>
        {showRegister && <Register />}
        <button onClick={() => setshowRegister(!showRegister)}>
          {showRegister ? 'Hide Register' : 'Show Register'}
        </button>
      </div>
    </>
  );
}

export default App