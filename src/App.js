import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import HomePage from "./Pages/HomePage";
import Customer from "./Pages/CustomerPage";
import Employee from "./Pages/EmployeePage";
import Logistics from "./Pages/Logistics";
import Payment from "./Pages/Payment";
import Reciept from "./Pages/Reciept";
import Stock from "./Pages/Stocks"
import Task from "./Pages/TaskManager"
const App = () =>
{
  return (
    <Router>
      <div >
        <nav className="fixed font-popins top-0 left-0 right-0 px-10 py-5 flex items-center justify-evenly w-full bg-white drop-shadow-md z-[5000]">
          <Link to="/" className="text-[1.2rem] font-lg">NC Construction</Link>
          <ul className=" flex gap-10 font-md items-center">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/stocks">Stocks</Link>
            </li>
            <li>
              <Link to="/logistics">Logistics</Link>
            </li>
            <li>
              <Link to="/payment">Payment</Link>
            </li>
            <li>
              <Link to="/reciept">Reciept</Link>
            </li>
            <li>
              <Link to="/employee">Employee</Link>
            </li>
            <li>
              <Link to="/customer">Customer</Link>
            </li>
            <li>
              <Link to="/task">Task</Link>
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
          <Route path="/stocks" element={<Stock />} />
          <Route path="/logistics" element={<Logistics />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/reciept" element={<Reciept />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/task" element={<Task />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
