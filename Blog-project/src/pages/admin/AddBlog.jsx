import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import BlogForm from "../../Components/BlogForm";

import { addBlog } from "../../redux/blogSlice";

function AddBlog() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (blog) => {

    try {

      const result = await dispatch(
        addBlog({
          ...blog,
          id: Date.now().toString()
        })
      ).unwrap();

      console.log("BLOG ADDED:", result);

      alert("Blog added successfully!");

      navigate("/admin");

    } catch (error) {

      console.error("BLOG ADD FAILED:", error);

      alert(
        "Blog could not be added. Please make sure JSON Server is running."
      );

    }

  };

  return (
    <>
      <Header />

      <main className="container py-5">

        <div className="form-page-header">

          <span className="section-label">
            ADMIN PANEL
          </span>

          <h1>
            Add New Blog
          </h1>

          <p>
            Create and publish a new article.
          </p>

        </div>

        <BlogForm
          onSubmit={handleSubmit}
          buttonText="Publish Blog"
        />

      </main>

      <Footer />
    </>
  );
}

export default AddBlog;