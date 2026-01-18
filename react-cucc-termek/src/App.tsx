import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { LoginProvider } from "./context/LoginProvider";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  return (
    <>
      <BrowserRouter>
        <LoginProvider>
          <Navbar />
          <Main />
        </LoginProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
