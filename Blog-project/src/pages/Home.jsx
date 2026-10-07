import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BlogList from "../Components/BlogList";
import { fetchBlogs } from "../redux/blogSlice";

function Home() {

  const dispatch = useDispatch();

  const blogs = useSelector(
    (state) => state.blogs.blogs
  );

  useEffect(() => {
    if (blogs.length === 0) {
      dispatch(fetchBlogs());
    }
  }, [dispatch, blogs.length]);

  const latestBlogs = [...blogs]
    .sort(
      (a, b) =>
        new Date(b.publishDate) -
        new Date(a.publishDate)
    )
    .slice(0, 3);

  return (
    <>
      <Header />

      <section className="hero-section">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-7">

              <span className="hero-badge">
                ✦ WELCOME TO BLOGSPHERE
              </span>

              <h1>
                Share Your Stories.
                <br />
                <span>Inspire The World.</span>
              </h1>

              <p>
                Discover insightful articles, technology,
                programming tips and ideas from our
                growing community of writers.
              </p>

              <Link
                to="/blogs"
                className="btn btn-primary btn-lg px-4"
              >
                Explore Blogs →
              </Link>

            </div>

            <div className="col-lg-5 d-none d-lg-block">

              <div className="hero-card">

                <div className="hero-card-icon">
                  ✍️
                </div>

                <h4>Write. Share. Inspire.</h4>

                <p>
                  Your ideas deserve to be heard.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="py-5">

        <div className="container">

          <div className="section-heading">

            <span>EXPLORE</span>

            <h2>Latest Articles</h2>

            <p>
              Read our latest stories and insights.
            </p>

          </div>

          <BlogList blogs={latestBlogs} />

          <div className="text-center mt-5">

            <Link
              to="/blogs"
              className="btn btn-outline-primary px-4"
            >
              View All Blogs
            </Link>

          </div>

        </div>

      </section>

      <section
        id="about"
        className="about-section py-5"
      >

        <div className="container text-center">

          <span className="section-label">
            ABOUT BLOGSPHERE
          </span>

          <h2>
            A Place For Ideas & Knowledge
          </h2>

          <p className="mx-auto">
            BlogSphere is a Blog Management System built
            with React.js, Redux Toolkit, Bootstrap and
            JSON Server. It allows users to discover blogs
            while administrators can manage blog records
            using complete CRUD operations.
          </p>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Home;