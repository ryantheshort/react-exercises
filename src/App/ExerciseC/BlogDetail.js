import { useState } from "react";

const DATA = [
  {
    id: 1,
    title: "An awesome post",
    body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, saepe quo? Tempore eveniet temporibus aut facilis illum, enim, magni pariatur dignissimos soluta fuga ullam saepe, quod velit quisquam recusandae impedit.",
  },
  {
    id: 2,
    title: "Another awesome blog post",
    body: "Sit amet consectetur adipisicing elit. Repellendus, saepe quo? Tempore eveniet temporibus aut facilis illum, enim, magni pariatur dignissimos soluta fuga ullam saepe, quod velit quisquam recusandae impedit.",
  },
];

function BlogDetail() {
  const [activePost, setActivePost] = useState();

  const blogTitles = DATA.map((blog) => (
    <p key={blog.id} onClick={() => setActivePost(blog)}>
      {blog.title}
    </p>
  ));

  return (
    <div>
      <div> {blogTitles}</div>
      {activePost && (
        <>
          <h2>{activePost.title}</h2>
          <p>{activePost.body}</p>
        </>
      )}
    </div>
  );
}

export default BlogDetail;
