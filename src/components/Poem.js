import React from "react";
function Poem({title,id,content,author,read,favourite, handleDelete, handleUpdate}) {
function handleClick() {
  fetch(`http://localhost:8004/poems/${id}`, {
        method: "DELETE"
      })
      .then((res)=> (res.json))
      .then(()=>handleDelete(id))
}
function handleRead(){
  console.log(read)
  fetch(`http://localhost:8004/poems/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        read : !read
      }),
    })
    .then(response => response.json())
    .then(data => handleUpdate(data,id))
  }
  function handleFavClick(){
    fetch(`http://localhost:8004/poems/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          favourite : !favourite
        }),
      })
      .then(response => response.json())
      .then(data => handleUpdate(data,id))
  }
  return (
    <div id={id}>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>
        <strong>- By Author {author}</strong>
      </p>
      <div className="btns">
      <button onClick={handleRead}>{read? "Mark as unread":"Mark as read"}</button>
      <button onClick={handleFavClick}>{!favourite? "Add to Favourites":"Remove from Favourites"}</button>
      <button onClick={handleClick}>DELETE</button>
      </div>
    </div>
  );

}
export default Poem;