import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import BrowseBooks from "./pages/BrowseBooks";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import AddBook from "./pages/AddBook";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/:category" element={<BrowseBooks />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>;
}

export default App;
