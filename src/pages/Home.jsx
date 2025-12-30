import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";
import { useSelector } from "react-redux";

function Home() {
  const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "All"];

  const books = useSelector((store) => store.books);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Welcome to Online Library</h2>

      <div className="flex gap-4 mb-6">
        {categories.map((cat) => (
          <Link
            key={cat}
            to={`/books/${cat}`}
            className="bg-gray-200 px-4 py-2 rounded"
          >
            {cat}
          </Link>
        ))}
      </div>

      <h3 className="text-xl mb-3">Popular Books</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {books.slice(0, 3).map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default Home;
