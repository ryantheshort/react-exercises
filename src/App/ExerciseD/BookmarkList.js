import { useState } from "react";

const INITIAL_STATE = {
  url: "",
  tag: "",
  title: "",
};

function BookmarkList() {
  const [bookmark, setBookmark] = useState(INITIAL_STATE);
  const [bookmarkList, setBookmarkList] = useState([]);
  const [filter, setFilter] = useState();

  const handleInput = (e) => {
    setBookmark({ ...bookmark, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookmarkList([...bookmarkList, bookmark]);
    setBookmark(INITIAL_STATE);
  };

  const bookmarksHTML = bookmarkList
    .filter((bookmark) => (filter ? bookmark.tag === filter : bookmark))
    .map((bookmark, index) => (
      <li key={index}>
        <a href={bookmark.url}>{bookmark.title}</a>
      </li>
    ));

  // const bookmarks = bookmarkList.map((bookmark) => bookmark.tag);
  // const uniqueBookmarks = new Set(bookmarks);
  // const uniqueBookmarksArray = [...uniqueBookmarks];

  const tagList = [...new Set(bookmarkList.map((bookmark) => bookmark.tag))];
  const tagListHTML = tagList.map((tag, index) => (
    <li>
      <button key={index} onClick={() => setFilter(tag)}>
        {tag}
      </button>
    </li>
  ));

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Url</label>
        <input
          name="url"
          type="url"
          value={bookmark.url}
          onChange={handleInput}
        />
        <label>Tag</label>
        <input
          name="tag"
          type="text"
          value={bookmark.tag}
          onChange={handleInput}
        />
        <label>Title</label>
        <input
          name="title"
          type="text"
          value={bookmark.title}
          onChange={handleInput}
        />
        <button type="submit">Save</button>
      </form>
      <nav>
        <ul>
          <li>
            <button onClick={() => setFilter(null)}>All</button>
          </li>
          {tagListHTML}
        </ul>
      </nav>
      <ul>{bookmarksHTML}</ul>
    </>
  );
}

export default BookmarkList;