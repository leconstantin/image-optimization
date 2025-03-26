import Card from "@/components/Card";
import React from "react";

export default function page() {
  return (
    <main
      className="max-w-[1200px] mx-auto px-5 pt-10"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))",
        gap: "7px",
      }}
    >
      <Card />
      <Card />
      <Card />

    </main>
  );
}
