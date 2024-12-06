import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import { Home } from "lucide-react";
import Inventory from "./Inventory";
import Dashboard from "./Dashboard";

const Body = () => {
  return (
    <div className="flex-col w-full pl-5">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Inventory" element={<Inventory />} />
          <Route path="/products" element={<ProductList />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Body;
