"use client";
import React from "react";
import { useSelector } from "react-redux";

function Overlay() {
  const viewProduct = useSelector((state) => state.viewProduct);
  return (
    viewProduct && (
      <div className="overlay fixed top-0 left-0 z-40 w-screen h-screen"></div>
    )
  );
}

export default Overlay;
