import { useEffect, useState } from "react";

const initialForm = {
  title: "",
  author: "",
  email: "",
  category: "Web Development",
  image: "",
  description: "",
  content: "",
  tags: "",
  publishDate: "",
  status: "Published"
};

function BlogForm({
  initialData,
  onSubmit,
  buttonText
}) {

  const [form, setForm] = useState(initialForm);

  useEffect(() => {

    if (initialData) {
      setForm(initialData);
    }

  }, [initialData]);

  const handleChange = (e) => {

    const {
      name,
      value
    } = e.target;

    setForm({
      ...form,
      [name]: value
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      !form.title ||
      !form.author ||
      !form.email ||
      !form.category ||
      !form.description ||
      !form.content ||
      !form.publishDate
    ) {

      alert("Please fill all required fields.");

      return;
    }

    onSubmit(form);

  };

  return (
    <form
      onSubmit={handleSubmit}
      className="blog-form"
    >

      <div className="row g-4">

        <div className="col-md-6">

          <label>Blog Title *</label>

          <input
            type="text"
            name="title"
            className="form-control"
            value={form.title}
            onChange={handleChange}
            placeholder="Enter blog title"
          />

        </div>

        <div className="col-md-6">

          <label>Author *</label>

          <input
            type="text"
            name="author"
            className="form-control"
            value={form.author}
            onChange={handleChange}
            placeholder="Enter author name"
          />

        </div>

        <div className="col-md-6">

          <label>Email *</label>

          <input
            type="email"
            name="email"
            className="form-control"
            value={form.email}
            onChange={handleChange}
            placeholder="author@example.com"
          />

        </div>

        <div className="col-md-6">

          <label>Category *</label>

          <select
            name="category"
            className="form-select"
            value={form.category}
            onChange={handleChange}
          >

            <option>Web Development</option>
            <option>JavaScript</option>
            <option>React</option>
            <option>Design</option>
            <option>Technology</option>
            <option>Node.js</option>
            <option>Career</option>

          </select>

        </div>

        <div className="col-12">

          <label>Image URL</label>

          <input
            type="url"
            name="image"
            className="form-control"
            value={form.image}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
          />

        </div>

        <div className="col-12">

          <label>Short Description *</label>

          <textarea
            name="description"
            className="form-control"
            rows="3"
            value={form.description}
            onChange={handleChange}
            placeholder="Write a short description..."
          ></textarea>

        </div>

        <div className="col-12">

          <label>Content *</label>

          <textarea
            name="content"
            className="form-control"
            rows="7"
            value={form.content}
            onChange={handleChange}
            placeholder="Write your complete blog content..."
          ></textarea>

        </div>

        <div className="col-md-6">

          <label>Tags</label>

          <input
            type="text"
            name="tags"
            className="form-control"
            value={form.tags}
            onChange={handleChange}
            placeholder="React, JavaScript, Web"
          />

        </div>

        <div className="col-md-3">

          <label>Publish Date *</label>

          <input
            type="date"
            name="publishDate"
            className="form-control"
            value={form.publishDate}
            onChange={handleChange}
          />

        </div>

        <div className="col-md-3">

          <label>Status</label>

          <select
            name="status"
            className="form-select"
            value={form.status}
            onChange={handleChange}
          >

            <option value="Published">
              Published
            </option>

            <option value="Draft">
              Draft
            </option>

          </select>

        </div>

        <div className="col-12">

          <button
            type="submit"
            className="btn btn-primary btn-lg"
          >
            {buttonText}
          </button>

        </div>

      </div>

    </form>
  );
}

export default BlogForm;