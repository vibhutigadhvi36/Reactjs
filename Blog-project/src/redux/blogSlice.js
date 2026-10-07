import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/blogs";

// ================= FETCH BLOGS =================

export const fetchBlogs = createAsyncThunk(
  "blogs/fetchBlogs",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL);

      console.log("Fetched blogs:", response.data);

      return response.data;
    } catch (error) {
      console.error("FETCH ERROR:", error);
      return rejectWithValue(
        error.response?.data || error.message
      );
    }
  }
);


// ================= ADD BLOG =================

export const addBlog = createAsyncThunk(
  "blogs/addBlog",
  async (blog, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, blog);

      console.log("Added blog:", response.data);

      return response.data;
    } catch (error) {
      console.error("ADD ERROR:", error);

      return rejectWithValue(
        error.response?.data || error.message
      );
    }
  }
);


// ================= UPDATE BLOG =================

export const updateBlog = createAsyncThunk(
  "blogs/updateBlog",
  async ({ id, blog }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${API_URL}/${id}`,
        blog
      );

      console.log("Updated blog:", response.data);

      return response.data;
    } catch (error) {
      console.error("UPDATE ERROR:", error);

      return rejectWithValue(
        error.response?.data || error.message
      );
    }
  }
);


// ================= DELETE BLOG =================

export const deleteBlog = createAsyncThunk(
  "blogs/deleteBlog",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_URL}/${id}`);

      console.log("Deleted blog:", id);

      return id;
    } catch (error) {
      console.error("DELETE ERROR:", error);

      return rejectWithValue(
        error.response?.data || error.message
      );
    }
  }
);


// ================= SLICE =================

const blogSlice = createSlice({

  name: "blogs",

  initialState: {
    blogs: [],
    loading: false,
    error: null
  },

  reducers: {},

  extraReducers: (builder) => {

    // FETCH

    builder
      .addCase(fetchBlogs.pending, (state) => {

        state.loading = true;
        state.error = null;

      })

      .addCase(fetchBlogs.fulfilled, (state, action) => {

        state.loading = false;
        state.blogs = action.payload;
        state.error = null;

      })

      .addCase(fetchBlogs.rejected, (state, action) => {

        state.loading = false;
        state.error =
          action.payload || "Unable to load blogs";

      });


    // ADD

    builder
      .addCase(addBlog.pending, (state) => {

        state.loading = true;
        state.error = null;

      })

      .addCase(addBlog.fulfilled, (state, action) => {

        state.loading = false;

        state.blogs.push(action.payload);

        state.error = null;

      })

      .addCase(addBlog.rejected, (state, action) => {

        state.loading = false;

        state.error =
          action.payload || "Unable to add blog";

      });


    // UPDATE

    builder
      .addCase(updateBlog.pending, (state) => {

        state.loading = true;

      })

      .addCase(updateBlog.fulfilled, (state, action) => {

        state.loading = false;

        const index = state.blogs.findIndex(
          (blog) => blog.id === action.payload.id
        );

        if (index !== -1) {
          state.blogs[index] = action.payload;
        }

      })

      .addCase(updateBlog.rejected, (state, action) => {

        state.loading = false;

        state.error =
          action.payload || "Unable to update blog";

      });


    // DELETE

    builder
      .addCase(deleteBlog.pending, (state) => {

        state.loading = true;

      })

      .addCase(deleteBlog.fulfilled, (state, action) => {

        state.loading = false;

        state.blogs = state.blogs.filter(
          (blog) => blog.id !== action.payload
        );

      })

      .addCase(deleteBlog.rejected, (state, action) => {

        state.loading = false;

        state.error =
          action.payload || "Unable to delete blog";

      });

  }

});


export default blogSlice.reducer;