import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const INITIAL_STATE = {
  title: "",
  body: "",
};

function BlogForm(props) {
  const [blog, setBlog] = useState(INITIAL_STATE);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addBlog(blog);
    setBlog(INITIAL_STATE);
  };

  const { title, body } = blog;

  return (
    <Form onSubmit={handleSubmit} className="col-md-6">
      <h2>Add a new blog post</h2>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title"
          name="title"
          value={title}
          onChange={(e) =>
            setBlog({ ...blog, [e.target.name]: e.target.value })
          }
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="body">
        <Form.Label>Body</Form.Label>
        <Form.Control
          as="textarea"
          rows={10}
          name="body"
          value={body}
          onChange={(e) =>
            setBlog({ ...blog, [e.target.name]: e.target.value })
          }
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default BlogForm;