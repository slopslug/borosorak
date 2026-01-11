import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Main from "./layout/Main";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Main />
      </BrowserRouter>
    </>
  );
}

export default App;
