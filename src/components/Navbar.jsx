import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white p-4 flex justify-between">
      <h1 className="font-bold text-lg">📚 Online Library</h1>
      <div className="space-x-6">
        <Link to="/">Home</Link>
        <Link to="/books/All">Browse Books</Link>
        <Link to="/add-book">Add Book</Link>
      </div>
    </nav>
  );
}

export default Navbar;
