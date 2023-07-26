import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { useHistory } from "react-router-dom";

const BlogList = ({ blogs }) => {
  const history = useHistory();
  const deleteBlog = (blogId) => {
    fetch("http://localhost:8000/blogs/" + blogId, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <div className="Delete">
              <h2>{blog.title}</h2>{" "}
            </div>
            <p>Written by {blog.author}</p>
          </Link>
          <div onClick={() => deleteBlog(blog.id)}>
            <AiFillDelete className="icon" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
