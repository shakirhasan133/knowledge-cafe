import { useState } from "react";
import "./App.css";
import Blogs from "./assets/component/Blogs/Blogs";
import Header from "./assets/component/Header";
import Bookmarks from "./assets/component/Bookmarks/Bookmarks";

function App() {
  const [bookmark, setBookmark] = useState([]);
  const [readTime, setreadTime] = useState(0);

  const handleReadTime = (time, id) => {
    setreadTime(readTime + time);

    const remainingBookmark = bookmark.filter((res) => res.id !== id);
    setBookmark(remainingBookmark);
  };

  const handleBookmark = (blog) => {
    const newBookmark = [...bookmark, blog];
    setBookmark(newBookmark);
  };

  return (
    <>
      <div className="container mx-auto">
        <Header></Header>
        <div className="md:flex justify-between gap-3 mt-4">
          <Blogs
            handleBookmark={handleBookmark}
            handleReadTime={handleReadTime}
            className="w-2/3"
          ></Blogs>
          <Bookmarks
            className="w-1/3"
            bookmark={bookmark}
            readTime={readTime}
          ></Bookmarks>
        </div>
      </div>
    </>
  );
}

export default App;
