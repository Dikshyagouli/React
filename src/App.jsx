import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'react-toastify/dist/ReactToastify.css';

import "./App.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer"; 
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
import ProductState from "./context/ProductState";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CompanyFormPage from "./components/CompanyFormPage";
import CartItems from "./components/CartIems";
import AddProduct from "./components/Addproduct";
import CompanyFormWithPreview from "./components/CompanyFormWithPreview"

function App() {
  const [mode, setMode] = useState("dark");
  const [text, setText] = useState("Dark mode");
  const [ setAlert] = useState(null);

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
    <div >
      <AuthProvider>
      <ProductState>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} text={text} />
        <ToastContainer />

        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home mode={mode} />} />
            <Route path="/about" element={<About mode={mode} />} />
            <Route path="/blog" element={<Blog mode={mode} />} />
            <Route path="/contact" element={<Contact mode={mode} />} />
            <Route path="/userlist" element={<UserList />} />
            <Route path="/:id/:username/:age" element={<UserDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/CompanyFormWithPreview" element={<CompanyFormWithPreview />} />
            <Route path="/CompanyFormPage" element={<CompanyFormPage />} />
            <Route path="/cartitems" element={<CartItems />} />
            <Route path="/addproduct" element={<AddProduct />} />
          </Routes>
        </div>
       
        <Footer mode={mode} /> 
      </Router>
      </ProductState>
      </AuthProvider>
    </div>
  );
}

export default App;
