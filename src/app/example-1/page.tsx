import Image from "next/image";
import React from "react";
import thumbe from "../../../public/thumbe.jpg";

export default function page() {
  return (
    <main className="flex flex-col md:flex-row gap-10 mt-24 md:justify-center items-center">
      <Image
        src={thumbe}
        alt="image"
        // width={400} when we have local image like that above
        // height={224.146}
        className="w-[250px] md:w-[400px] h-auto rounded"
        sizes="(max-width: 768px) 250px, 400px"
        placeholder="blur" // for local image
        priority // before fold
      />
      <div className="max-w-[300px]">
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
