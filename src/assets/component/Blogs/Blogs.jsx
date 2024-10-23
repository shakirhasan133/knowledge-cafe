import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleBookmark, handleReadTime }) => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetch("../../../../public/blog.json")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);
  return (
    <div>
      {blog.map((data) => {
        return (
          <Blog
            key={data.id}
            blog={data}
            handleBookmark={handleBookmark}
            handleReadTime={handleReadTime}
          ></Blog>
        );
      })}
    </div>
  );
};

Blogs.propTypes = {
  handleBookmark: PropTypes.func,
  handleReadTime: PropTypes.func,
};
export default Blogs;
