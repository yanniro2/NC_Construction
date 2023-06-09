import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import HomePage from "./Pages/HomePage";
import Customer from "./Pages/CustomerPage";
import Employee from "./Pages/EmployeePage";
import Logistics from "./Pages/LogisticsPage";
import Payment from "./Pages/Payment";
import Reciept from "./Pages/Reciept";
import Stock from "./Pages/StockPage"
import Task from "./Pages/TaskManager"
import Report from "./Pages/Report"

import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { HiArrowCircleDown } from "react-icons/hi"
const App = () =>
{

  // Stock
  const [stocksPayment, setStocksPayment] = useState(0);
  const [selectedItemsStock, setSelectedItemsStock] = useState([]);
  const [totalPriceStock, setTotalPriceStock] = useState(0);

  //Logistics
  const [logisticPayment, setLogisticPayment] = useState(0);
  const [selectedItemsLogistic, setSelectedItemsLogistic] = useState([]);
  const [totalPriceLogistic, setTotalPriceLogistic] = useState(0);
  //App
  const [authUser, setAuthUser] = useState(null);

  useEffect(() =>
  {
    const listen = onAuthStateChanged(auth, (user) =>
    {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () =>
    {
      listen();
    };
  }, []);

  const userSignOut = (e) =>
  {

    signOut(auth)
      .then(() =>
      {
        console.log("sign out successful");
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };
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
            {/* <li>
              <Link to="/reciept">Reciept</Link>
            </li> */}
            <li>
              <Link to="/employee">Employee</Link>
            </li>
            <li>
              <Link to="/customer">Customer</Link>
            </li>
            <li>
              <Link to="/task">Ongoing Project</Link>
            </li>
            {/* <li>
              <Link to="/report">Report</Link>
            </li> */}
          </ul>

          {authUser ? (
            <div className="font-lg cursor-pointer relative bg-white group shadow-none  ">
              <p className="flex items-center gap-1">{authUser.email} <HiArrowCircleDown /></p>

              <div className="absolute z-[9999] top-[1.5rem] right-0 ">
                <button className="items-center justify-center w-full hidden hover:block group-hover:block bg-white px-2 py-1 rounded-full btn text-dark-blue text-[1rem]" onClick={userSignOut}>Sign out</button>
              </div>
            </div>
          ) : (<div className="flex gap-5 font-xl items-center">
            <Link to="/register"  >Register</Link>
            <Link to="/login" className=" border-[1px] rounded px-5 py-3  shadow-md">Login</Link>
          </div>)}

        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route path="/stocks" element={<Stock setStocksPayment={setStocksPayment} selectedItemsStock={selectedItemsStock} setSelectedItemsStock={setSelectedItemsStock} totalPriceStock={totalPriceStock} setTotalPriceStock={setTotalPriceStock} />} />


          <Route path="/logistics" element={<Logistics setLogisticPayment={setLogisticPayment} selectedItemsLogistic={selectedItemsLogistic}
            setSelectedItemsLogistic={setSelectedItemsLogistic}
            totalPriceLogistic={totalPriceLogistic}
            setTotalPriceLogistic={setTotalPriceLogistic}

          />} />


          <Route path="/payment" element={<Payment stocksPayment={stocksPayment} logisticPayment={logisticPayment} />} />
          <Route path="/reciept" element={<Reciept />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/task" element={<Task />} />
          <Route path="/report" element={<Report />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
