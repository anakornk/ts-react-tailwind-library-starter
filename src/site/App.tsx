import { useState } from 'react';
import logo from './logo.svg';
import { Swipebar } from '../components/swipebar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <header>
        <img src={logo} className="w-8 h-8" alt="logo" />
        <p>Hello Vite + React + Tailwind!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <Swipebar />
      </header>
    </div>
  );
}

export default App;
