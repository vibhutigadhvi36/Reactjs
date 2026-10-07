import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";

import Dashboard from "./pages/admin/Dashboard";
import AddBlog from "./pages/admin/AddBlog";
import EditBlog from "./pages/admin/EditBlog";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/blogs" element={<Blogs />} />

      <Route
        path="/blogs/:id"
        element={<BlogDetails />}
      />

      <Route
        path="/admin"
        element={<Dashboard />}
      />

      <Route
        path="/admin/add-blog"
        element={<AddBlog />}
      />

      <Route
        path="/admin/edit/:id"
        element={<EditBlog />}
      />

    </Routes>
  );
}

export default App;