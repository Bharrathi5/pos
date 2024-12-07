import { poster } from "@/constants/images";
import BrandCarousal from "./BrandCarousal";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-around w-full gap-5 mt-16">
        <div className="flex-col w-full md:w-3/12">
          <div>
            <h1 className="text-3xl md:text-5xl mb-10">
              <span className="text-7xl">POS </span>for Simplified Hardware
              Store operations
            </h1>
          </div>
          <div>
            <h4 className="text-xl md:text-2xl font-light mb-10">
              Track inventory, manage sales, and streamline operations with ease
            </h4>
          </div>
        </div>
        <div className="w-full md:w-7/12">
          <img
            className="md:w-full h-60 md:h-full rounded-3xl md:object-cover md:size-44"
            src={poster}
            alt="poster"
          />
        </div>
      </div>
      <div className="m-10">
        <h4 className="text-5xl mb-10">Brands</h4>
        <BrandCarousal />
      </div>
    </div>
  );
};

export default Home;
