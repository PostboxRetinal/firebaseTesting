import { useState } from 'react'
import { Login } from './components/Login.jsx'
import './bootstrap.min.css'

const App = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      <div id='login'>
        {showLogin && <Login />}
        <button onClick={() => setShowLogin(!showLogin)}>
          {showLogin ? 'Hide Login' : 'Show Login'}
        </button>
      </div>
    </>
  );
}

export default App