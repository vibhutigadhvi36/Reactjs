import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import {
  fetchBlogs,
  deleteBlog
} from "../../redux/blogSlice";

function Dashboard() {

  const dispatch = useDispatch();

  const blogs = useSelector(
    (state) => state.blogs.blogs
  );

  useEffect(() => {

    if (blogs.length === 0) {
      dispatch(fetchBlogs());
    }

  }, [dispatch, blogs.length]);

  const published = blogs.filter(
    (blog) => blog.status === "Published"
  ).length;

  const drafts = blogs.filter(
    (blog) => blog.status === "Draft"
  ).length;

  const handleDelete = (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?"
    );

    if (confirmDelete) {
      dispatch(deleteBlog(id));
    }

  };

  return (
    <>
      <Header />

      <main className="admin-page">

        <div className="container py-5">

          <div className="d-flex justify-content-between align-items-center mb-4">

            <div>

              <span className="section-label">
                ADMIN PANEL
              </span>

              <h1 className="fw-bold">
                Dashboard
              </h1>

              <p className="text-muted">
                Manage your blog content.
              </p>

            </div>

            <Link
              to="/admin/add-blog"
              className="btn btn-primary"
            >
              + Add Blog
            </Link>

          </div>

          <div className="row g-4 mb-5">

            <div className="col-md-4">

              <div className="stat-card">

                <span>Total Blogs</span>

                <h2>{blogs.length}</h2>

                <small>
                  All blog records
                </small>

              </div>

            </div>

            <div className="col-md-4">

              <div className="stat-card published-stat">

                <span>Published</span>

                <h2>{published}</h2>

                <small>
                  Live articles
                </small>

              </div>

            </div>

            <div className="col-md-4">

              <div className="stat-card draft-stat">

                <span>Drafts</span>

                <h2>{drafts}</h2>

                <small>
                  Unpublished articles
                </small>

              </div>

            </div>

          </div>

          <div className="admin-table-wrapper">

            <div className="p-4 border-bottom">

              <h4 className="mb-0">
                Blog Management
              </h4>

            </div>

            <div className="table-responsive">

              <table className="table align-middle mb-0">

                <thead>

                  <tr>
                    <th>Blog</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>

                </thead>

                <tbody>

                  {blogs.map((blog) => (

                    <tr key={blog.id}>

                      <td>

                        <strong>
                          {blog.title}
                        </strong>

                      </td>

                      <td>
                        {blog.author}
                      </td>

                      <td>
                        {blog.category}
                      </td>

                      <td>

                        <span
                          className={
                            blog.status === "Published"
                              ? "status-published"
                              : "status-draft"
                          }
                        >
                          {blog.status}
                        </span>

                      </td>

                      <td>

                        <div className="d-flex gap-2">

                          <Link
                            to={`/admin/edit/${blog.id}`}
                            className="btn btn-sm btn-outline-primary"
                          >
                            Edit
                          </Link>

                          <button
                            className="btn btn-sm btn-outline-danger"
                            onClick={() =>
                              handleDelete(blog.id)
                            }
                          >
                            Delete
                          </button>

                        </div>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}

export default Dashboard;