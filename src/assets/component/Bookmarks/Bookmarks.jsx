import PropTypes from "prop-types";
import Bookmark from "./Bookmark";

const Bookmarks = ({ bookmark, readTime }) => {
  console.log(bookmark);

  return (
    <div className="bg-slate-100 px-4 ">
      <h1>Spend time on read {readTime}</h1>
      <h1 className="text-center py-4 text-2xl font-bold">
        Bookmark {bookmark.length}
      </h1>

      {bookmark.map((data, idx) => (
        <Bookmark key={idx} data={data}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmark: PropTypes.array,
  readTime: PropTypes.number,
};
export default Bookmarks;
