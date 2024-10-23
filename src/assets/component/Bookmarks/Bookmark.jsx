import PropTypes from "prop-types";

const Bookmark = ({ data }) => {
  const { title } = data;
  return (
    <div className="p-3 m-2 bg-slate-200 rounded-lg">
      <h2>{title}</h2>
    </div>
  );
};

Bookmark.propTypes = {
  blogData: PropTypes.object,
  data: PropTypes.object,
};
export default Bookmark;
