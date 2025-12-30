import { Link, useLocation } from "react-router-dom";

function ErrorPage() {
  const location = useLocation();

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold">404 - Page Not Found</h2>
      <p>Invalid URL: {location.pathname}</p>
      <Link to="/" className="text-indigo-600 underline">Go Home</Link>
    </div>
  );
}

export default ErrorPage;
