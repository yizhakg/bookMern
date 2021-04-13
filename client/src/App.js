import React from 'react'
import './App.css';
import {Home} from './components/pages' 

export function avg(...avg){
return avg.reduce((sum,num)=>sum+num)/avg.length
}

function App() {
  return (
    <div className="App">
     <Home/>
    </div>
  );
}

export default App;
