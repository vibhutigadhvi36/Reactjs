import { Link } from "react-router-dom";

function BlogCard({ blog }) {
  return (
    <div className="col-md-6 col-lg-4">

      <div className="card blog-card h-100 border-0">

        <img
          src={blog.image}
          className="card-img-top blog-image"
          alt={blog.title}
        />

        <div className="card-body p-4">

          <span className="category-badge">
            {blog.category}
          </span>

          <h5 className="card-title mt-3 fw-bold">
            {blog.title}
          </h5>

          <p className="card-text text-muted">
            {blog.description}
          </p>

          <div className="blog-meta">

            <span>
              👤 {blog.author}
            </span>

            <span>
              📅 {blog.publishDate}
            </span>

          </div>

          <Link
            to={`/blogs/${blog.id}`}
            className="btn btn-primary w-100 mt-3"
          >
            Read Article →
          </Link>

        </div>

      </div>

    </div>
  );
}

export default BlogCard;