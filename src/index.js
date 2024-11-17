import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contect";
import About from "./pages/About";
import Service from "./pages/Service";
import Dashboard from "./pages/Dashboard";
import Test from "./pages/Test";
import ProductDetail from "./pages/ProductDetail";
import SignUp from "./pages/Signup";
import React from "react";
import "./index.css";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import UserDetails from "./features/counter/user/UserDetails";
import AddUser from "./features/counter/user/AddUser";
import App from "./App";
import Login from "./pages/Login";
import PrivateRoute from "./component/PrivateRoute";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/About" element={<About />} />
        <Route path="/Dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
        <Route path="/test" element={<Test />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/UserDetails" element={<UserDetails />} />
        <Route path="/AddUser" element={<AddUser />} />ṣ
      </Routes>
    </BrowserRouter>
  </Provider>
);
