import { useState } from 'react';


function ExerciseA({addBlog}) {
    
    const [blogTitle, setBlog] = useState('');
    const [body, setBody] = useState('');

    const handleTitle = (e) => {
        setBody(e.target.value);
    }
    
    const handleBody = (e) => {
        e.preventDefault();
    const newBlog = {
        title,
        body,
    }
    addBlog(newBlog);
    setTitle('');
    setBody('');
    };


    return (

        <form>
            <label htmlFor=""></label>
            <input value={title} type='title' name="title" placeholder="Blog Post Title..." autocomplete="off" onChange={handleTitle}/>
            <textarea value={body} onChange={handleBody} cols="50" rows="10"/>
            <button type="submit" name="saveButton" onClick={handleSubmit}>Save Post</button>
        </form>


        
    );
}


export default ExerciseA;