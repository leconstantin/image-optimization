import Image from "next/image";
import React from "react";
import { imagekitLoader } from "../example-3/page";

export default function page() {
  return (
    <main className="max-w-[900px] mx-auto pt-10 px-6  columns-1 md:columns-2 lg:columns-3 space-y-4">
      <Image
        className="w-[300px] h-auto"
        src="aaa.jpg"
        loader={imagekitLoader}
        alt="Photo"
        width={300}
        height={600}
        sizes=""
      />
      <Image
        className="w-[300px] h-auto"
        src="bbb.jpg"
        loader={imagekitLoader}
        alt="Photo"
        width={300}
        height={600}
        sizes=""
      />
      <Image
        className="w-[300px] h-auto"
        src="ccc.jpg"
        loader={imagekitLoader}
        alt="Photo"
        width={300}
        height={600}
        sizes=""
      />
      <Image
        className="w-[300px] h-auto"
        src="ddd.jpg"
        loader={imagekitLoader}
        alt="Photo"
        width={300}
        height={600}
        sizes=""
      />
      <Image
        className="w-[300px] h-auto"
        src="eee.jpg"
        loader={imagekitLoader}
        alt="Photo"
        width={300}
        height={600}
        sizes=""
      />
    </main>
  );
}
