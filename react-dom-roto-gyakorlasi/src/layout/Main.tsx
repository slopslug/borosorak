import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Users from "../pages/Users";
// https://google.com
function Main() {
  return (
    <main className="container mt-3">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route
          path="/products"
          element={<Products />}
        />
        <Route
          path="/users"
          element={<Users />}
        />
      </Routes>
    </main>
  );
}

export default Main;
