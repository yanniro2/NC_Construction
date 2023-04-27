import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import HomePage from "./Pages/HomePage";
import VehicleDetailsPage from "./Pages/VehicleDetailsPage";
import CategoryPage from "./Pages/CategoryPage";

const App = () =>
{
  return (
    <Router>
      <div >
        <nav className="fixed font-popins top-0 left-0 right-0 px-10 py-5 flex items-center justify-evenly w-full bg-white drop-shadow-md ">
          <Link to="/" className="text-[1.2rem] font-lg">NC Construction</Link>
          <ul className=" flex gap-10 font-md items-center">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/stocks">Stocks</Link>
            </li>
            <li>
              <Link to="/aboutus">About us</Link>
            </li>
            <li>
              <Link to="/contactus">Contact us</Link>
            </li>
            <li>
              <Link to="/vehicle-details">Vehicle Details</Link>
            </li>
            <li>
              <Link to="/category">Category</Link>
            </li>
          </ul>

          <div className="flex gap-5 font-xl items-center">
            <Link to="/register"  >Register</Link>
            <Link to="/login" className=" border-[1px] rounded px-5 py-3  shadow-md">Login</Link>

          </div>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/vehicle-details" element={<VehicleDetailsPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/category" element={<CategoryPage />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
