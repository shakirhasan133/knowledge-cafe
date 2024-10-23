import PropTypes from "prop-types";
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookmark, handleReadTime }) => {
  console.log(blog);

  const {
    id,
    cover,
    title,
    author,
    author_img,
    reading_time,
    posted_date,
    hashtags,
  } = blog;

  return (
    <div>
      <img
        key={id}
        src={cover}
        alt={`Photo of ${title}`}
        className="rounded-md w-full"
      />

      <div className="flex justify-between items-center my-3">
        <div className="flex">
          <img src={author_img} alt="" className="w-14 mr-3" />
          <div>
            <h3 className="font-bold text-xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex justify-center gap-2">
          <p>{reading_time} min read</p>
          <button onClick={() => handleBookmark(blog)}>
            <FaRegBookmark />
          </button>
        </div>
      </div>

      <div className="mb-2">
        <h1 className="font-bold text-2xl">{title}</h1>
        {hashtags.map((has, i) => (
          <span key={i}>
            <a className="text-gray-600" href="">
              #{has}{" "}
            </a>
          </span>
        ))}
      </div>
      <button
        onClick={() => handleReadTime(reading_time, id)}
        className="text-blue-700 underline mb-10"
      >
        Mark as read
      </button>
    </div>
  );
};

export default Blog;
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmark: PropTypes.func,
  handleReadTime: PropTypes.func,
};
