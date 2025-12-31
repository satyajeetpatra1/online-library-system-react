import { useDispatch } from "react-redux";
import { addBook } from "../utils/booksSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AddBook() {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.title ||
      !form.author ||
      !form.category ||
      !form.image ||
      !form.rating ||
      !form.description
    ) {
      alert("All fields are required");
      return;
    }

    dispatch(addBook({ ...form, id: Date.now() }));
    navigate("/books/All");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6">
      <form
        onSubmit={handleSubmit}
        className="
          bg-white shadow-xl rounded-xl
          p-6 sm:p-8
          w-full max-w-md md:max-w-2xl
          space-y-6 outline-1 outline-slate-400
        "
      >
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-indigo-600">
            Add New Book
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            Fill in the details to add a book to the library
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium mb-1">Book Title</label>
            <input
              type="text"
              placeholder="Enter Book Title..."
              className="border p-2 w-full rounded focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
          </div>

          {/* Author */}
          <div>
            <label className="block text-sm font-medium mb-1">Author</label>
            <input
              type="text"
              placeholder="Enter Author Name..."
              className="border p-2 w-full rounded focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              onChange={(e) => setForm({ ...form, author: e.target.value })}
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <select
              className="border p-2 w-full rounded focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              defaultValue=""
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            >
              <option value="" disabled>
                Select category
              </option>
              <option>Fiction</option>
              <option>Non-Fiction</option>
              <option>Sci-Fi</option>
            </select>
          </div>

          {/* Rating */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Rating (0 - 5)
            </label>
            <input
              type="number"
              step="0.1"
              min="0"
              max="5"
              placeholder="Enter Rating..."
              className="border p-2 w-full rounded focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              onChange={(e) =>
                setForm({ ...form, rating: Number(e.target.value) })
              }
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            rows="4"
            placeholder="Short description of the book..."
            className="border p-2 w-full rounded resize-none focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-sm font-medium mb-1">Image URL</label>
          <input
            type="text"
            placeholder="Enter Image Link..."
            className="border p-2 w-full rounded focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            onChange={(e) => setForm({ ...form, image: e.target.value })}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="
            w-full
            bg-indigo-600 text-white
            py-2.5
            rounded-lg font-medium
            hover:bg-indigo-700
            transition
          "
        >
          Add Book
        </button>
      </form>
    </div>
  );
}
