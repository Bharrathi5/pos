import Navbar from "./Navbar";
import ProductList from "./ProductList";

const Body = () => {
  return (
    <div className="flex-col w-full pl-5">
      <Navbar />
      <ProductList />
    </div>
  );
};

export default Body;
