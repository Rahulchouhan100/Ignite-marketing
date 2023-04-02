import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./src/component/Navbar";
import About from "./src/component/About";
import Plan from "./src/component/Plan";

const App = () => {
  return (
    <>
      <Navbar />
      <About />
      <Plan />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
