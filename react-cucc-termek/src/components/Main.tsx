import { useLogin } from "../context/useLogin";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import About from "../pages/About";

function Main() {
  const { user } = useLogin()!;

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
        {user ? (
          <>
            <Route
              path="/profile"
              element={<Profile />}
            />
            <Route
              path="/logout"
              element={<Home />}
            />
          </>
        ) : (
          <Route
            path="/login"
            element={<Login />}
          />
        )}
        <Route
          path="*"
          element={<h1>errorbro</h1>}
        />{" "}
      </Routes>
    </main>
  );
}

export default Main;
