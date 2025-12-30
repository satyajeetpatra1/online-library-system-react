import { Link, useLocation } from "react-router-dom";

function ErrorPage() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-50 to-indigo-100 px-4">
      <div className="bg-white shadow-xl rounded-xl p-8 max-w-md w-full text-center">
        {/* 404 Text */}
        <h1 className="text-7xl font-extrabold text-indigo-600 mb-4">404</h1>

        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>

        <p className="text-gray-600 mb-4">
          The page you are looking for does not exist.
        </p>

        {/* Invalid URL */}
        <p className="text-sm text-red-500 break-all mb-6">
          Invalid URL: <span className="font-mono">{location.pathname}</span>
        </p>

        {/* Home Button */}
        <Link
          to="/"
          className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
