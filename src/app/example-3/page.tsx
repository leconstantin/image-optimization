"use client"

import Image from "next/image";
import React from "react";
type ImageKitLoader={
    src: string,
    width: number,
    quality?: number
}
export const imagekitLoader = ({ src, width, quality }: ImageKitLoader) => {

  if (src[0] === "/") src = src.slice(1);

  const params = [`w-${width}`];
  if (quality) {
    params.push(`q-${quality}`);
  }
  const paramsString = params.join(",");

  let urlEndpoint = "https://ik.imagekit.io/leco";

  if (urlEndpoint[urlEndpoint.length - 1] === "/") {
    urlEndpoint = urlEndpoint.substring(0, urlEndpoint.length - 1);
  }
  return `${urlEndpoint}/${src}?tr=${paramsString}`;
};
export default function page() {
  return (
    <main>
      <div className="max-w-[900px] mx-auto bg-white min-h-screen pb-10">
        <div className="relative w-full h-[400px]">
          <Image
            src="default" // resolver into https://ik.imagekit.io/leco/default
            loader={imagekitLoader}
            alt="image"
            fill
            sizes="(max-width: 900px) 100vw, 900px"
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
