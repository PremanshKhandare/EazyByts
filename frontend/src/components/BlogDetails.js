import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useState } from "react";

const BlogDetails = ({ blog, onDelete }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    if (!window.confirm(`Are you sure you want to delete the blog: "${blog.title}"?`)) return;

    setIsDeleting(true);
    setError(null);

    try {
      const response = await fetch(`/api/blogs/${blog._id}`, { method: "DELETE" });
      const json = await response.json();

      if (!response.ok) throw new Error(json.error || "Failed to delete blog");

      alert("Blog deleted successfully!");
      onDelete(blog._id);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="blog-details">
      <h2>{blog.title}</h2>
      <p><strong>By: </strong>{blog.author}</p>
      <p><strong>Published: </strong>
        {blog.createdAt ? formatDistanceToNow(new Date(blog.createdAt), { addSuffix: true }) : "Unknown"}
      </p>
      <p className="content">{blog.content}</p>

      <button className="delete-btn" onClick={handleDelete} disabled={isDeleting}>
        {isDeleting ? "Deleting..." : "Delete"}
      </button>

      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default BlogDetails;
