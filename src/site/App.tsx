import { useState } from 'react';
import logo from './logo.svg';
import { ToggleSwitch } from '../components/ToggleSwitch';
import { Button } from '../components/Button';

function App() {
  const [count, setCount] = useState(0);
  const [enabled, setEnabled] = useState<boolean>(false);

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
        <ToggleSwitch
          enabled={enabled}
          onChange={(value) => setEnabled(value)}
        />
        <Button label={'test'} />
      </header>
    </div>
  );
}

export default App;
