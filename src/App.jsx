import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';

import "./App.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

function App() {
  const [mode, setMode] = useState("dark");
  const [text, setText] = useState("Dark mode");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      setText("Dark mode");
      showAlert("Light mode has been enabled", "success");
    } else {
      setMode("dark");
      setText("Light mode");
      showAlert("Dark mode has been enabled", "success");
    }
  };

  const showAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => setAlert(null), 2000);
  };

  return (
    <div className={`min-vh-100 ${mode === 'dark' ? 'bg-dark text-light' : 'bg-white text-dark'}`}>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} text={text} />
        <ToastContainer />
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<Home mode={mode} />} />
          <Route path="/about" element={<About mode={mode} />} />
          <Route path="/blog" element={<Blog mode={mode} />} />
          <Route path="/contact" element={<Contact mode={mode} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
