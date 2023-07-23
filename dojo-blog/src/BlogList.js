import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div>
          <div className="blog-preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <div className="Delete">
                <h2>{blog.title}</h2>
                <AiFillDelete className="icon" />
              </div>

              <p>Written by {blog.author}</p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
