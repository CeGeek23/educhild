'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface destinationsItem{
  id: number;
  image_url: string;
  rate: string;
  message: string;
}

const Destination: React.FC = () => {
  const destinations: destinationsItem[] = [
    {
      id: 1,
      image_url:"/assets/image1.png",
      rate: "4.6",
      message: "lorem ipsum",
    },
    {
      id: 2,
      image_url:"/assets/image2.png",
      rate: "5.0",
      message: "lorem ipsum",
    },
    {
      id: 3,
      image_url: "/assets/image3.png",
      rate: "4.6",
      message: "lorem ipsum",
    },
    {
      id: 4,
      image_url: "/assets/image4.png",
      rate: "4.6",
      message: "lorem ipsum",
    },
    {
      id: 5,
      image_url: "/assets/image5.png",
      rate: "4.6",
      message: "lorem ipsum",
    },
    {
      id: 6,
      image_url: "/assets/image6.png",
      rate: "4.6",
      message: "lorem ipsum",
    },
    {
      id: 7,
      image_url: "/assets/image1.png",
      rate: "4.6",
      message: "lorem ipsum",
    },
    {
      id: 8,
      image_url: "/assets/image2.png",
      rate: "4.6",
      message: "lorem ipsum",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-20">
      {destinations.map((item, key) => (
        <div className="" key={key}>
          <Link href="/">
              <Image
                src={item.image_url}
                width={500}
                height={300}
                className="object-cover rounded-md hover:opacity-75"
                alt=""
              />

              <div className="py-3">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 text-red-500 fill-current"
                  >
                    <g data-name="Layer 2">
                      <g data-name="star">
                        <rect
                          width="24"
                          height="24"
                          transform="rotate(90 12 12)"
                          opacity="0"
                        />
                        <path d="M17.56 21a1 1 0 0 1-.46-.11L12 18.22l-5.1 2.67a1 1 0 0 1-1.45-1.06l1-5.63-4.12-4a1 1 0 0 1-.25-1 1 1 0 0 1 .81-.68l5.7-.83 2.51-5.13a1 1 0 0 1 1.8 0l2.54 5.12 5.7.83a1 1 0 0 1 .81.68 1 1 0 0 1-.25 1l-4.12 4 1 5.63a1 1 0 0 1-.4 1 1 1 0 0 1-.62.18z" />
                      </g>
                    </g>
                  </svg>
                  <label className="mx-2 text-sm">{item.rate}</label>
                </div>
                <div className="">
                  <h4 className="font-semibold mt-1">{item.message}</h4>
                  <label htmlFor="" className="text-gray-500">
                    More About
                  </label>
                </div>
              </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Destination;