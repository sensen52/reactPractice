import './App.css';
import {useState,useEffect} from 'react';
import InputComp from './Component/InputComp'

function App() {
  const test = new Array(10).fill({name:'leejaewon', id: 'nea4182'})
  return (
    
    <div id='app'>
      {
        test.map((value,index)=>{
          return <div>{value}</div>
        })
      }
      {/* <InputComp/> */}
    </div>
  );
}

export default App;
