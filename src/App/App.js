import { useState } from 'react';
import BlogForm from "./ExerciseA/BlogForm";
import  "./App.css";
// import ContactList from "./ExerciseB/ContactList";

function App() {
    const [selection, setSelection] = useState("a"); //setSelection being utilized with 'useState' to assign a target value to each place it's used (like a variable)
    return (
        <div className="container">
            <nav>
                <ul>
                    <li>
                        <button value="a" onClick={(e) => setSelection(e.target.value)}>
                        Blog Form
                        </button>
                    </li>
                    <li>
                        <button value="b" onClick={(e) => setSelection(e.target.value)}>
                        Contact List
                        </button>
                    </li>
                    <li>
                        <button value="c" onClick={(e) => setSelection(e.target.value)}>
                        Blog Detail
                        </button>
                    </li>
                    <li> 
                        <button value="d" onClick={(e) => setSelection(e.target.value)}>
                        Bookmark App
                        </button>
                    </li>
                    <li>
                        <button value="e" onClick={(e) => setSelection(e.target.value)}>
                        Blog CMS
                        </button>
                    </li>
                </ul>
            </nav>
            
            {selection === "a" && <BlogForm />} 
            
        
        </div>



    );
}

export default App;
