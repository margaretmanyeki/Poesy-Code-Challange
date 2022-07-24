import React, {useState,useEffect} from "react";

function NewPoemForm({updatePoems, HAN}) {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
  });
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formData.title === "" || formData.content === "" || formData === "") {
      alert("Fill all inputs");
}else{
  fetch("http://localhost:8004/poems", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(formData),
})
.then ((res)=>(res.json))
.then((data)=>{
  updatePoems(data)
          setFormData({ ...formData, title: "", author: "", content: "" });
        });

}}
  
function handleChange(event) {
  setFormData({ ...formData, [event.target.name]: event.target.value });
}
 return(
<form className="new-poem-form" onSubmit={handleFormSubmit}>
      <input
        placeholder="Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <input
        placeholder="Author"
        name="author"
        value={formData.author}
        onChange={handleChange}
      />
      <textarea
        placeholder="Write your masterpiece here..."
        name="content"
        rows={10}
        value={formData.content}
        onChange={handleChange}
      />
      <input type="submit" value="Share your masterpiece" />
    </form>
);

}
export default NewPoemForm;