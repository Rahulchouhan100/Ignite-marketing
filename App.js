import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./src/component/Navbar";
import About from "./src/component/About";
import Plan from "./src/component/Plan";
import Testimonial from "./src/component/Testimonial";
import Services from "./src/component/Services";
import Footer from "./src/component/Footer";
import Contact from "./src/component/Contact";
import WorkingProcess from "./src/component/WorkingProcess";

const App = () => {
  return (
    <>
      <Navbar />
      <Services />
      <About />
      <WorkingProcess />
      <Plan />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
