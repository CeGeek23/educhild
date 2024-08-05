'use client'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import React from "react";

interface dataItem {
  id: number;
  image_url: string,
  name: string,
}

const Banner = () => {
  const dataReview: dataItem[]= [
    {
      id: 1,
      image_url:"/assets/image1.png",
      name: "Allison",
    },
    {
      id: 2,
      image_url:"/assets/image2.png",
      name: "Kattie",
    },
    {
      id: 3,
      image_url:"/assets/image3.png",
      name: "Letty",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 500, min: 500 },
      items: 1,
    },
  };

  return (
    <div className="mt-20">
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        autoPlay={false}
        arrows={true}
      >
        {dataReview.map((item) => (
          <div key= {item.id}className="mx-2">
            <img
              src={item.image_url}
              alt="" className="rounded-xl" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;