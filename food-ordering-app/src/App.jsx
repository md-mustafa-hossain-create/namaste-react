import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Poster from "./components/Poster.jsx";
import Body from "./components/Body.jsx";
import Footer from "./components/Footer.jsx";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Poster />
      <Footer />
    </div>
  );
};

// Rendering the App to the root element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
