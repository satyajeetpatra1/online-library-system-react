import { NavLink } from "react-router-dom";

export default function Navbar() {
  const activeLink = "bg-white text-indigo-600 shadow-md";

  const normalLink =
    "text-white hover:bg-indigo-500 hover:shadow-[0_0_10px_rgba(255,255,255,0.4)]";

  return (
    <nav className="bg-indigo-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-extrabold text-white tracking-wide hover:scale-105 transition-transform duration-300"
        >
          📚 Online Library
        </NavLink>

        {/* Navigation Links */}
        <div className="flex gap-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md font-medium transition-all duration-300 ${
                isActive ? activeLink : normalLink
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/books/All"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md font-medium transition-all duration-300 ${
                isActive ? activeLink : normalLink
              }`
            }
          >
            Browse Books
          </NavLink>

          <NavLink
            to="/add-book"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md font-medium transition-all duration-300 ${
                isActive ? activeLink : normalLink
              }`
            }
          >
            Add Book
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
