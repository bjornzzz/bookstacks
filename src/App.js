import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import Login from "./pages/Login";
import Books from "./pages/Books";
import DetailedBook from "./pages/DetailedBook";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/books" element={<Books />}></Route>
        <Route path="/books/:id" element={<DetailedBook />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
