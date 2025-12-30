import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function BookDetails() {
  const { id } = useParams();
  const book = useSelector((state) =>
    state.books.find((b) => b.id === Number(id))
  );

  if (!book) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold">Book not found</h2>
        <Link to="/books/All" className="text-indigo-600 underline">
          Back to Browse
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 flex justify-center">
      <div className="bg-white shadow-xl rounded-xl max-w-4xl w-full p-6 sm:p-8">
        {/* Back Link */}
        <Link
          to="/books/All"
          className="text-indigo-600 font-medium hover:underline"
        >
          ← Back to Browse
        </Link>

        {/* Content */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src={book.image}
              alt={book.title}
              onError={(e) =>
                (e.target.src =
                  "https://img.freepik.com/free-psd/red-3d-question-mark-transparent-background_84443-55795.jpg?semt=ais_hybrid&w=740&q=80")
              }
              className="w-60 sm:w-72 lg:w-full max-w-sm rounded-lg shadow-md object-cover"
            />
          </div>

          {/* Book Info */}
          <div
          //  className="h-full flex items-start flex-col justify-center"
          >
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">
              {book.title}
            </h1>

            <p className="text-gray-600 mb-4">
              by <span className="font-medium">{book.author}</span>
            </p>

            {/* Category */}
            <span className="inline-block bg-indigo-100 text-indigo-600 text-sm px-3 py-1 rounded-full mb-4">
              {book.category}
            </span>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed mb-6">
              {book.description}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-lg font-semibold">Rating:</span>
              <span className="text-yellow-500 text-lg">⭐ {book.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
