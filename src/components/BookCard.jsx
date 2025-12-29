import { Link } from "react-router-dom";

function BookCard({ book }) {
  return (
    <Link to={`/book/${book.id}`}>
      <div className="bg-white rounded-lg shadow-black/75 shadow-md p-4 hover:shadow-lg hover:-translate-y-2 hover:scale-105 transition duration-200 h-full">
        {/* Book Image */}
        <img
          src={book.image}
          alt={book.title}
          className="h-48 w-full object-cover rounded"
        />

        {/* Book Info */}
        <h3 className="mt-3 font-semibold text-lg">{book.title}</h3>
        <p className="text-slate-800 text-sm font-semibold">by {book.description}</p>
        <p className="text-gray-600 text-sm">by {book.author}</p>
      </div>
    </Link>
  );
}

export default BookCard;
