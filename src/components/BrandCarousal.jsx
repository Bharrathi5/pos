import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { brand1, brand2, brand3, brand4, brand5 } from "@/constants/images";

const BrandCarousal = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        <CarouselItem className="md:basis-1/2 lg:basis-96">
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                {/* <span className="text-3xl font-semibold"> 1</span> */}
                <img src={brand1} />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-96">
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <img src={brand2} />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-96">
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <img src={brand3} />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-96">
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <img src={brand4} />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-96">
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <img src={brand5} />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default BrandCarousal;
