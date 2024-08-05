'use client'
import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface ReviewItem {
  id: number;
  image_url: string;
  name: string;
}

const PeopleReview: React.FC = () => {
  const dataReview: ReviewItem[] = [
    {
      id: 1,
      image_url: "/assets/people1.png",
      name: "Vanessa",
    },
    {
      id: 2,
      image_url: "/assets/people2.png",
      name: "Cedrick",
    },
    {
      id: 3,
      image_url: "/assets/people3.png",
      name: "Hilary",
    },
    {
      id: 4,
      image_url: "/assets/people3.png",
      name: "Brice",
    },
    {
      id: 5,
      image_url: "/assets/people3.png",
      name: "Vanessa",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="mt-20">
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        arrows={false}
        showDots={true}
        infinite={true}
        autoPlay={true}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="pr-8"
      >
        {dataReview.map((item) => (
          <div key={item.id} className="bg-white border p-10 rounded-lg">
            <p className="leading-relaxed italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis.
            </p>
            <div className="mt-10">
              <div className="flex items-center">
                <img
                    src={item.image_url}
                    alt=""
                    className="h-10 w-10 object-cover"
                  />
                <h4 className="ml-5">{item.name}</h4>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default PeopleReview;