import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BlogList from "../Components/BlogList";
import SearchBar from "../Components/SearchBar";
import Pagination from "../Components/Pagination";

import { fetchBlogs } from "../redux/blogSlice";

function Blogs() {

  const dispatch = useDispatch();

  const {
    blogs,
    loading
  } = useSelector(
    (state) => state.blogs
  );

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("latest");
  const [currentPage, setCurrentPage] = useState(1);

  const blogsPerPage = 6;

  useEffect(() => {
    if (blogs.length === 0) {
      dispatch(fetchBlogs());
    }
  }, [dispatch, blogs.length]);

  const filteredBlogs = useMemo(() => {

    let result = [...blogs];

    if (search.trim()) {

      result = result.filter((blog) =>
        blog.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        blog.author
          .toLowerCase()
          .includes(search.toLowerCase())
      );

    }

    if (category !== "All") {

      result = result.filter(
        (blog) =>
          blog.category === category
      );

    }

    if (sort === "latest") {

      result.sort(
        (a, b) =>
          new Date(b.publishDate) -
          new Date(a.publishDate)
      );

    }

    if (sort === "oldest") {

      result.sort(
        (a, b) =>
          new Date(a.publishDate) -
          new Date(b.publishDate)
      );

    }

    if (sort === "az") {

      result.sort((a, b) =>
        a.title.localeCompare(b.title)
      );

    }

    if (sort === "za") {

      result.sort((a, b) =>
        b.title.localeCompare(a.title)
      );

    }

    return result;

  }, [blogs, search, category, sort]);

  const totalPages = Math.ceil(
    filteredBlogs.length / blogsPerPage
  );

  const startIndex =
    (currentPage - 1) * blogsPerPage;

  const currentBlogs =
    filteredBlogs.slice(
      startIndex,
      startIndex + blogsPerPage
    );

  useEffect(() => {
    setCurrentPage(1);
  }, [search, category, sort]);

  return (
    <>
      <Header />

      <section className="page-banner">

        <div className="container">

          <h1>Explore Blogs</h1>

          <p>
            Discover articles from our community.
          </p>

        </div>

      </section>

      <main className="container py-5">

        <SearchBar
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          sort={sort}
          setSort={setSort}
        />

        {loading ? (

          <div className="text-center py-5">

            <div
              className="spinner-border text-primary"
            ></div>

            <p className="mt-3">
              Loading blogs...
            </p>

          </div>

        ) : (

          <>
            <BlogList blogs={currentBlogs} />

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
            />
          </>

        )}

      </main>

      <Footer />
    </>
  );
}

export default Blogs;