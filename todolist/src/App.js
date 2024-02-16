import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Homepage';
import './App.css';
import { useState } from 'react';

function App() {
  const[iscompletescreen,setIscompletescreen]=useState(false);
  return (
    <Homepage></Homepage>
  );
}
export default App;
