import { useState } from "react";

function BlogDetail({ blog, ...props }) {
  const [isEditing, setEditing] = useState(false);
  const [editedBlog, setEditedBlog] = useState({ ...blog });

  const cancelEdit = () => {
    setEditing(false);
    setEditedBlog({ ...blog });
  };

  const handleSave = () => {
    props.updateBlog(editedBlog);
    setEditing(false);
  };

  const previewTemplate = (
    <li>
      <h2>{blog.title}</h2>
      <p>{blog.body}</p>
      <button type="button" onClick={() => setEditing(true)}>
        Edit
      </button>
      <button type="button" onClick={() => props.removeBlog(blog.id)}>
        Delete
      </button>
    </li>
  );

  const editTemplate = (
    <li>
      <label>Title</label>
      <input
        type="text"
        name="title"
        value={editedBlog.title}
        onChange={(e) =>
          setEditedBlog({ ...editedBlog, [e.target.name]: e.target.value })
        }
      />
      <label>Body</label>
      <textarea
        rows={10}
        cols={40}
        name="body"
        value={editedBlog.body}
        onChange={(e) =>
          setEditedBlog({ ...editedBlog, [e.target.name]: e.target.value })
        }
      />
      <button type="button" onClick={handleSave}>
        Save
      </button>
      <button type="button" onClick={cancelEdit}>
        Cancel
      </button>
    </li>
  );

  return <>{isEditing ? editTemplate : previewTemplate} </>;
}

export default BlogDetail;