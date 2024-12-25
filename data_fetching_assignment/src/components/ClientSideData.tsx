"use client";
import React, { useEffect, useState } from "react";
import clientData from "@/api/client-side-api";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
interface Store {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count?: number;
  };
}
function clientSideData() {
  const [data, setData] = useState<Store[]>([]);
  const [card, setCard] = useState(6);
  const LoadMore = () => {
    setCard(card + 3);
  };
  useEffect(() => {
    async function apiResponse() {
      const response = await clientData();
      setData(response);
    }
    apiResponse();
  }, []);
  return (
    <div className=" bg-[#E6E8E6] min-h-screen">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.length === 0 ? (
          <div className=" h-screen flex items-center justify-center md:justify-end md:col-start-2 md:col-end-3 mt-6">
          <div className="text-center animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid "></div>
          </div>
        ) : (
          data.slice(0, card).map((item) => (
            <Card key={item.id} className=" p-4">
              <CardHeader>
                <Image
                  src={item.image}
                  alt="product image"
                  width={250}
                  height={250}
                  className="hover:scale-125 object-cover mx-auto mb-2"
                />
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{item.category}</p>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between">
                <p>Price: ${item.price}</p>
                <p>Rating: {item.rating.rate} </p>
                <Button>Add to Cart</Button>
              </CardFooter>
            </Card>
          ))
        )}
      </div>
      {data.length > 0 && (
        <div className="mx-auto mt-8  w-[100px]">
          <Button
            onClick={LoadMore}
            variant={"destructive"}
            className="py-8 px-10"
          >
            Load More
          </Button>
        </div>
      )}
    </div>
  );
}
export default clientSideData;
