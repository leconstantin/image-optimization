import Image from "next/image";
import React from "react";
import { imagekitLoader } from "../example-3/page";

export default function page() {
  return (
    <main className="relative min-h-screen flex justify-center items-center">
      <Image
        src="thumbe.jpg"
        loader={imagekitLoader}
        className="object-cover z-0"
        alt="image"
        fill
        sizes="100vw"
      />
      <div className="realtive z-20 max-w-[300px] bg-white/50 backdrop-blur-sm px-8 py-6 rounded">
        <h1 className="text-3xl font-bold mb-3">Welcome to StockPrices</h1>
        <p className="text-xl">
          This is a simple web application that allows you to search for stock
          prices.
        </p>
        <button className="mt-5 bg-blue-400 hover:bg-blue-500 cursor-pointer text-white px-4 py-2 rounded-md">
          Get started
        </button>
      </div>
    </main>
  );
}
