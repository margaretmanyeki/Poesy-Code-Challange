import React,{useState,useEffect} from "react";
import Poem from "./Poem";


function PoemsContainer({poems,setPoems}) {
  const[filtered, setFilter] = useState('All')
  
  const filteredPoems = poems.filter((poem) => {
    if (filtered === "All") return true;

    return poem.favourite === true && filtered==="Favourite";
  });
  
  const poemItem = filteredPoems.map((poem, index) => {
    return(
      
        <Poem
          key={index}
          id={poem.id}
          title={poem.title}
          content={poem.content}
          author={poem.author}
          read = {poem.read}
          favourite = {poem.favourite}
          handleUpdate = {handleUpdate}
          handleDelete = {handleDelete}
        />
      );
    });
    function handleUpdate(data,id){
      const updatedPoems = poems.map((poem)=>{
        if(poem.id === id){
          return data
        }
        return poem
    })
    setPoems(updatedPoems)
    }
  
    function handleDelete(id){
      const updatedPoems = poems.filter((poem) => poem.id !== id);
      setPoems(updatedPoems);

return(
  <div className="poems-container">
      
      <select
        name="filter"
        value={filtered}
        onChange={(e) => setFilter(e.target.value)}
        >
        <option value="All">All Poems</option>
        <option value="Favourite">Favourite</option>
      </select>
      {poemItem}
      
    </div>
  );

    }}

export default PoemsContainer;
