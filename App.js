import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./src/component/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
