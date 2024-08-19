"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/27663337/pexels-photo-27663337/free-photo-of-a-woman-in-a-pink-dress-walking-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/26832674/pexels-photo-26832674/free-photo-of-swa-view-photo-print.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/27244362/pexels-photo-27244362/free-photo-of-lakes-viti-and-oskjuvatn-on-iceland.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/20359974/pexels-photo-20359974/free-photo-of-portrait-of-woman.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
];

const ProductImages = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          fill
          className="object-cover rounded-md"
          alt=""
          sizes="50vw"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="relative w-1/4 h-32 gap-4 mt-8 cursor-pointer"
            onClick={() => setIndex(index)}
          >
            <Image
              src={image.url}
              alt=""
              fill
              sizes="22vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductImages;
