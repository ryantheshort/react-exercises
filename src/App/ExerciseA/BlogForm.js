import { useState  } from 'react';


function BlogForm() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("")
    const [blogs, setBlogs] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newBlog = {
            title,
            body,
        };
        setBlogs([...blogs, newBlog]);
        setTitle("");
        setBody("");
    };
  return (
    <form onSubmit={handleSubmit}>
    <h2>Add a new blog post</h2>
      <div className="mb-3" controlId="title">
        <label>Title</label>
        <input 
        type="text" 
        placeholder="Enter Title" 
        name="title"
        value={title}
        onChange={(event) => setBody(event.target.value)}
        />
        </div>
      <div className="mb-3" controlId="body">
        <label>Body</label>
        <textarea 

        rows="10"
        name="body"
        onChange={(event) => setBody(event.target.value)} 
        />
      </div>
      <button className="btn btn -primary" type="submit">
        Submit
      </button>
    </form>
  );
}

export default BlogForm;


