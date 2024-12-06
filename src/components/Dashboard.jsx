import { ChartLine } from "lucide-react";
import ChartSales from "./ChartSales";
import ChartRevenue from "./ChartRevenue";
import ChartRental from "./ChartRental";

const Dashboard = () => {
  return (
    <div>
      <div className="flex items-center gap-5">
        <ChartLine className="size-10" />
        <h1 className="text-4xl my-10">Sales Analytics</h1>
      </div>
      <div className="flex gap-16 justify-around">
        <ChartSales />
        <ChartRevenue />
        <ChartRental />
      </div>
      <div></div>
    </div>
  );
};

export default Dashboard;
