import BlogCard from "./BlogCard";

function BlogList({ blogs = [] }) {

  if (blogs.length === 0) {
    return (
      <div className="text-center py-5">

        <div className="empty-icon">
          🔍
        </div>

        <h4>No blogs found</h4>

        <p className="text-muted">
          Try changing your search or filter.
        </p>

      </div>
    );
  }

  return (
    <div className="row g-4">

      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          blog={blog}
        />
      ))}

    </div>
  );
}

export default BlogList;