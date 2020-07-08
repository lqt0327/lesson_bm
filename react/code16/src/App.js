import React from 'react';
import logo from './logo.svg';
import DragAble1, { WithDragAble2 } from './DragAble1'
import './App.css';

function App() {
  return (
    <div className="App">
      <DragAble1 />
      <WithDragAble2 />
    </div>
  );
}

export default App;
