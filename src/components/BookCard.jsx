import { Link } from "react-router-dom";

function BookCard({ book }) {
  return (
    <div className="bg-white rounded-lg shadow-black/75 shadow-md p-4 hover:shadow-lg hover:-translate-y-2 hover:scale-105 transition duration-200 h-full">
      {/* Book Image */}
      <img
        src={book.image}
        alt={book.title}
        onError={(e) =>
          (e.target.src =
            "https://img.freepik.com/free-psd/red-3d-question-mark-transparent-background_84443-55795.jpg?semt=ais_hybrid&w=740&q=80")
        }
        className="h-68 w-full object-contain rounded"
      />

      {/* Book Info */}
      <h3 className="mt-3 font-semibold text-lg">{book.title}</h3>
      {/* <p className="text-slate-800 text-sm font-semibold">{book.description}</p> */}
      <p className="text-gray-600 text-sm mt-2">by {book.author}</p>

      <Link
        to={`/book/${book.id}`}
        className="inline-block mt-3 text-indigo-600 font-medium hover:underline"
      >
        View Details →
      </Link>
    </div>
  );
}

export default BookCard;
