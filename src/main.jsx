import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/GlobalComponents/Header.jsx";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/GlobalComponents/Footer.jsx";

function Main() {
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderSticky(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BrowserRouter>
      <div
        className={`w-full z-40 ${
          isHeaderSticky ? "fixed top-0 shadow-md bg-white" : ""
        }`}
      >
        <Header />
      </div>
      <App />
      <Footer />
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
