import { imagekitLoader } from "@/app/example-3/page";
import Image from "next/image";
import React from "react";

export default function Card() {
  return (
    <div className="h-[400px] bg-white rounded border border-black/10 overflow-hidden">
      <div className="relative w-full h-[170px]">
        <Image
          src="thumbe.jpg"
          loader={imagekitLoader}
          alt="image"
          className="object-cover"
          fill
          sizes="(max-width: 641px) 100vw,(max-width: 944px) 50vw,(max-width: 1200px) 33vw, 380.667px"
        />
      </div>
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold ">Card title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          doloremque.
        </p>
      </div>
    </div>
  );
}
