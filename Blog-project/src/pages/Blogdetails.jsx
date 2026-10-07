import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { fetchBlogs } from "../redux/blogSlice";

function BlogDetails() {

  const { id } = useParams();

  const dispatch = useDispatch();

  const blogs = useSelector(
    (state) => state.blogs.blogs
  );

  const blog = blogs.find(
    (item) => String(item.id) === String(id)
  );

  useEffect(() => {

    if (blogs.length === 0) {
      dispatch(fetchBlogs());
    }

  }, [dispatch, blogs.length]);

  if (!blog) {

    return (
      <>
        <Header />

        <div className="container py-5 text-center">

          <h2>Blog not found</h2>

          <Link
            to="/blogs"
            className="btn btn-primary mt-3"
          >
            Back to Blogs
          </Link>

        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <article className="container py-5">

        <div className="details-container">

          <span className="category-badge">
            {blog.category}
          </span>

          <h1 className="details-title">
            {blog.title}
          </h1>

          <div className="blog-meta mb-4">

            <span>
              👤 {blog.author}
            </span>

            <span>
              📅 {blog.publishDate}
            </span>

            <span>
              ● {blog.status}
            </span>

          </div>

          <img
            src={blog.image}
            alt={blog.title}
            className="details-image"
          />

          <p className="lead mt-4">
            {blog.description}
          </p>

          <div className="article-content">

            {blog.content
              .split("\n")
              .map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}

          </div>

          <div className="tags mt-4">

            {blog.tags
              .split(",")
              .map((tag) => (
                <span
                  key={tag}
                  className="tag"
                >
                  #{tag.trim()}
                </span>
              ))}

          </div>

          <Link
            to="/blogs"
            className="btn btn-outline-primary mt-4"
          >
            ← Back to Blogs
          </Link>

        </div>

      </article>

      <Footer />
    </>
  );
}

export default BlogDetails;