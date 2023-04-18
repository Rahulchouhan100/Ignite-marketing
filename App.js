import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./src/component/Navbar";
import About from "./src/component/About";
import Plan from "./src/component/Plan";
import Testimonial from "./src/component/Testimonial";
import Services from "./src/component/Services";

const App = () => {
  return (
    <>
      <Navbar />
      <Services />
      <About />
      <Plan />
      <Testimonial />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
