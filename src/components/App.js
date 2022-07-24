import React,{useState,useEffect} from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

function App(){
  const [show,setShow] = useState (true)
  const [poems, setPoems] =useState ([]);
  
  
  useEffect (()=>{
    fetch("http://localhost:8004/poems")
    .then ((res) => res.json())
    .then ((data) => setPoems(data));
  },[]);
  

  function handleHideClick(){
    console.log(show)
    setShow(!show)
  }
  function updatePoems(poems){
    setPoems([...poems,poem])
  }
  return(
    <div className="app">
    <div className="sidebar">
      <button onClick={handleHideClick}>{show ? 'Hide Form':'Show Form'}</button>
      {show ? <NewPoemForm updatePoems ={updatePoems} /> : null}
    </div>
    <PoemsContainer poems ={poems} setPoems = {setPoems}/>
  </div>
  );
  }

export default App;
