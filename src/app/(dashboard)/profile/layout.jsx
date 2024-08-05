"use client";

import {
  StarIcon,
} from "@heroicons/react/24/solid";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Emojis from "@/components/Page/Profile/emojis";
import ContextProvider from "@/components/Page/Profile/context";
import ParentDetails from '@/components/Page/Profile/ParentDetails';
import "@/styles/profile.css";
import Link from "next/link";

export default function ProfileLayout({ children }) {
  const AVERAGE_RATING_PATH = "http://localhost:8000/api/reviews/driver/rating";

  const [refresh, setRefresh] = useState(true);
  const [averageRating, setAverageRating] = useState(0);
  const [nbReviews, setNbReviews] = useState(0);

  let [driverData, setDriverData] = useState({
    driverPicture: "/profile/vanessa.jpg",
    driverName: "Vanessa",
    driverNumber: "652065626",
    driverLocation: "Melen Yaounde",
    driverMail: "christian@gmail.com",
    formationChauffeur: "Maman de Mael",
    Description:
      "Maman attentionnée de quatre enfants, je suis là pour veiller sur la sécurité en ligne de ma famille."  
    });

  useEffect(() => {
    const fetchIconsNumber = async () => {
      try {
        console.log("Dans le fetch..............................");
        const response = await axios.get(AVERAGE_RATING_PATH + "/" + driverId);
        if (response.data !== null) {
          console.log("response for average_rating_get", response.data);
          setAverageRating(response.data.averageRating);
          setNbReviews(response.data.totalReviews);
        }
      } catch (error) {
        console.error(
          "Erreur lors de la récupération de l'average rating :",
          error
        );
      }
    };
    fetchIconsNumber();
  }, [refresh]);
  return (
    <div className="py-[30px] lg:py-[60px] bg-[var(--bg-2)] px-3">
      <div className="container max-w-[1600px]">
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          <div className="col-span-12 xl:col-span-4">
            <div className="bg-white rounded-2xl p-3 sm:p-4 lg:py-8 lg:px-6 mb-6">
              <div className="w-32 h-32 border ovenflow-hidden border-[var(--primary)] rounded-full bg-white p-4 grid place-content-center relative mx-auto mb-10">
                <Image
                  width={130}
                  height={130}
                  src={driverData.driverPicture}
                  alt="image"
                  className="rounded-full w-full h-full"
                />
              </div>
              <h4 className="text-center text-2xl font-semibold mb-4">
                {driverData.driverName}
              </h4>
              <ul className="flex items-center justify-center flex-wrap mb-7">
                <li>
                  <p className="mb-0">
                    Contact:{" "}
                    <span className="text-primary">
                      {" "}
                      {driverData.driverNumber} | {driverData.driverLocation}{" "}
                    </span>
                  </p>
                </li>
              </ul>
              <ul className="flex items-center justify-center flex-wrap mb-7">
                <li>
                  <p className="mb-0">
                    Mail:{" "}
                    <span className="text-primary">
                      {driverData.driverMail}
                    </span>
                  </p>
                </li>
                <div className="flex min-w-full justify-evenly my-3">
                  <div className="flex items-center mr-3">
                    <span className="mr-1 text-2xl">
                      {averageRating.toFixed(1)}
                    </span>{" "}
                    <StarIcon className="w-6 h-6 text-[var(--tertiary)]" />
                    <span className="ml-2 pt-2 text-gray-500 text-s"> {nbReviews} avis</span>{" "}
                  </div>
                  <Emojis />
                </div>
                <Link href="/parameters">
                  <div className="flex gap-4">
                    <div
                      className="inline-flex rounded-full items-center gap-2 p-2 hover:bg-[#8A0010] hover:text-white active:bg-[#FF6347] active:text-white focus:bg-[#FF6347] focus:text-white font-medium mt-2 transition-colors duration-200 ease-in-out cursor-pointer"
                    >
                      <button className="inline-block"> Modify Profile </button>
                    </div>
                  </div>
                </Link>
              </ul>
              <div className="border border-dashed my-7"></div>
              <ul className="flex flex-col gap-4 mb-10 max-text-30 mx-auto">

                <li>
                  <div className="items-center gap-2">
                    {/* <CalendarDaysIcon className="w-5 h-5 text-primary" /> */}
                    <div className="block text-1xl font-semibold clr-neutral-600 mb-4">
                      Parent De
                    </div>
                    <div className="mb-0">{driverData.formationChauffeur}</div>
                  </div>
                </li>
              </ul>

              <span className="block text-2xl font-semibold clr-neutral-600 mb-4">
                Details
              </span>
              <div className="mb-0">{driverData.Description}</div>
            </div>
          </div>
          <div className="col-span-12 xl:col-span-8">
            <div className="p-3 bg-white rounded-2xl mb-8">
              <ParentDetails/>
            </div>
            <div className="grid grid-cols-12 gap-4 align-items-start">
              <ContextProvider setRefresh={setRefresh} refresh={refresh}>
                {children}
              </ContextProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
