import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import BookCard from "../components/BookCard";
import { booksData } from "../utils/booksData";

function BrowseBooks() {
  const { category = "All" } = useParams();

  const [search, setSearch] = useState("");

  const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "All"];

  const filteredBooks = booksData.filter((book) => {
    const matchCategory = category === "All" || book.category === category;

    const matchSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <div className="p-6 w-full">
      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          className="border p-2 rounded-md w-full max-w-md"
          placeholder="Search by title or author..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Category Filter */}
      <div className="flex justify-center gap-3 mb-8 flex-wrap">
        {categories.map((cat) => (
          <Link
            key={cat}
            to={`/books/${cat}`}
            className={`px-4 py-2 rounded-md transition ${
              category === cat
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {cat}
          </Link>
        ))}
      </div>

      {/* No Books Found */}
      {filteredBooks.length === 0 && (
        <h4 className="text-center font-semibold text-gray-600">
          No books found!
        </h4>
      )}

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default BrowseBooks;
