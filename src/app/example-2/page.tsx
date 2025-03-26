import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <main>
      <div className="max-w-[900px] mx-auto bg-white min-h-screen pb-10">
        <div className="relative w-full h-[400px]">
        <Image
          src="https://ik.imagekit.io/leco/thumbe.jpg"
          alt="image"
          //   width={900} //400 on phone
          //   height={400} //400 on phone
          fill
          sizes="(max-width: 900px) 100vw, 900px" 
        // sizes="(max-width: 900px) calc(100vw - 64px) calc(900px - 64px)" for px-8 pt-8 on first div
          className=" object-cover"
          priority
        />
        </div>
       
        <div className="px-12">
          <h1 className="text-4xl font-bold mt-10 mb-5">This is a blog post</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            pariatur alias ea error. Ratione minima placeat tenetur excepturi
            nemo ipsa hic eum, pariatur qui sapiente? Molestias magni fugit at
            consectetur veniam et debitis autem totam maiores! Quibusdam laborum
            eius est!
          </p>
        </div>
      </div>
    </main>
  );
}
