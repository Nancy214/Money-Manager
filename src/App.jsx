import { useState } from 'react';
import './index.css';
import { Button } from './components/ui/button';

function App() {
  return (
    <div className='flex flex-col items-center justify-center min-h-svh'>
      <h1 className='text-3xl font-bold underline'>
        Hello World
      </h1>
      <Button>Click me</Button>
    </div>
  );
}

export default App;
