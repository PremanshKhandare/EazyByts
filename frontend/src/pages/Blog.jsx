import { useEffect } from "react";
import { useBlogsContext } from "../hooks/useBlogsContext";

// components
import BlogDetails from "../components/BlogDetails";
import BlogForm from "../components/BlogForm";

const Blog = () => {
  const { blogs, dispatch } = useBlogsContext();

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch("/api/blogs"); // Updated API endpoint
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_BLOGS", payload: json });
      }
    };

    fetchBlogs();
  }, [dispatch]);

  // ✅ Function to delete a blog from the context
  const handleDelete = (id) => {
    dispatch({ type: "DELETE_BLOG", payload: id });
  };


  return (
    <div className="blog-home" id="blog">
      <div className="blogs">
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            textAlign: "center",
            color: "#333",
            textTransform: "uppercase",
            marginBottom: "1rem",
            position: "relative",
            display: "inline-block",
          }}
        >
          Blog Section
          <span
            style={{
              display: "block",
              width: "300px",
              height: "4px",
              backgroundColor: "#FFD700",
              borderRadius: "4px",
            }}
          ></span>
        </h2>
        {blogs &&
          blogs.map((blog) => (
            // ✅ Pass handleDelete to BlogDetails
            <BlogDetails blog={blog} key={blog._id} onDelete={handleDelete} />
          ))}
      </div>
      <BlogForm />
    </div>
  );
};

export default Blog;
