import React, {useState,useEffect}from "react";
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

}

export default NewPoemForm;
