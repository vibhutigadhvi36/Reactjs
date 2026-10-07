import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useNavigate,
  useParams
} from "react-router-dom";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import BlogForm from "../../Components/BlogForm";

import {
  fetchBlogs,
  updateBlog
} from "../../redux/blogSlice";

function EditBlog() {

  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const blogs = useSelector(
    (state) => state.blogs.blogs
  );

  const blog = blogs.find(
    (item) =>
      String(item.id) === String(id)
  );

  useEffect(() => {

    if (blogs.length === 0) {
      dispatch(fetchBlogs());
    }

  }, [dispatch, blogs.length]);

  const handleSubmit = async (updatedBlog) => {

    await dispatch(
      updateBlog({
        id,
        blog: updatedBlog
      })
    );

    alert("Blog updated successfully!");

    navigate("/admin");

  };

  if (!blog) {

    return (
      <>
        <Header />

        <div className="container py-5 text-center">

          <h2>Blog not found</h2>

        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="container py-5">

        <div className="form-page-header">

          <span className="section-label">
            ADMIN PANEL
          </span>

          <h1>
            Edit Blog
          </h1>

          <p>
            Update your blog information.
          </p>

        </div>

        <BlogForm
          initialData={blog}
          onSubmit={handleSubmit}
          buttonText="Update Blog"
        />

      </main>

      <Footer />
    </>
  );
}

export default EditBlog;