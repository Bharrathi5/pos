"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "January", rented: 186, returned: 80 },
  { month: "February", rented: 305, returned: 200 },
  { month: "March", rented: 237, returned: 120 },
  { month: "April", rented: 73, returned: 190 },
  { month: "May", rented: 209, returned: 130 },
  { month: "June", rented: 214, returned: 140 },
];

const chartConfig = {
  rented: {
    label: "Rented",
    color: "hsl(var(--chart-1))",
  },
  returned: {
    label: "Returned",
    color: "hsl(var(--chart-2))",
  },
};

const ChartRental = () => {
  return (
    <div>
      <Card className="md:size-96 mb-10">
        <CardHeader>
          <CardTitle>Rental in and Out</CardTitle>
          <CardDescription>January - June 2024</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip content={<ChartTooltipContent hideLabel />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar
                dataKey="rented"
                stackId="a"
                fill="var(--color-rented)"
                radius={[0, 0, 4, 4]}
              />
              <Bar
                dataKey="returned"
                stackId="a"
                fill="var(--color-returned)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 font-medium leading-none">
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            Showing rental status for the last 6 months
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ChartRental;
