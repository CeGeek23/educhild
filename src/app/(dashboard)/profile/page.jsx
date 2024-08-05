"use client";

import React, { useEffect, useState } from "react";
import ReviewModal from "@/components/Page/Profile/ReviewModal";
import Review from "@/components/Page/Profile/Review";
import { v4 as uuidv4 } from "uuid";
import { useContextProvider } from "@/components/Page/Profile/context";

const driverId = "797d6b41-5b9a-41ba-93d3-4a56418e4294";
const userId = "b21ccd75-5be8-4129-bd14-f4837b935fa3";
const reservationId = uuidv4();
const userName = "Gerard";

export default function Profile() {
  // TODO: ACTUALISER LES ADRESSES DES SERVEURS AINSI QUE LES PATHS LORS DE L'INTEGRATION
  let REVIEW_SERVICE_URL = "http://localhost:8000";
  
  const {reload,setReload} = useContextProvider();

  const [comments, setcomments] = useState([
    {
      reviewId: uuidv4(),
      userId: uuidv4(),
      driverId: uuidv4(),
      reservationId: uuidv4(),
      userName: "Papa de William",
      comment:
        "Utilisez les outils de contrôle parental comme un complément, pas un substitut, à votre implication. La meilleure protection reste votre présence et vos discussions ouvertes avec vos enfants sur leur vie numérique.",
      createdAt: "23/06/2024",
      updatedAt: "18h15",
      note: 3,
      likes: 3,
      dislikes: 4,
    },
    {
      reviewId: uuidv4(),
      userId: uuidv4(),
      driverId: uuidv4(),
      reservationId: uuidv4(),
      userName: "Maman de Brenda",
      comment:
        "Adaptez les paramètres de contrôle à l'âge et à la maturité de chaque enfant. Ce qui convient à un adolescent peut être trop restrictif ou pas assez pour un plus jeune. Réévaluez régulièrement les réglages pour garantir un équilibre entre protection et autonomie.",
      createdAt: "14/06/2024",
      updatedAt: "18h15",
      note: 5,
      likes: 10,
      dislikes: 1,
    },
  ]);

  useEffect(() => {
    console.log("tryyyyyyyyyyy1");
    const fetchData = async () => {
      console.log("tryyyyyyyyyyy");
      try {
        const response = await fetch(
          `${REVIEW_SERVICE_URL}/api/reviews/driver/${driverId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("Try fetch");
        if (!response.ok) {
          console.error(
            "Response error:",
            response.status,
            response.statusText
          );
          const errorData = await response.json();
          console.error("Error data:", errorData);
          throw new Error(`Network response was not ok (${response.status})`);
        }

        const reviews = await response.json();
        setcomments([...reviews]);
        // Traiter les reviews retournées par le serveur
      } catch (error) {
        console.error("Error getting reviews:", error);
        // Gérer l'erreur
      }
    };
    fetchData();
  }, [reload]);
  console.log(comments.length);
  console.log("Reviews:", comments);

  return (
    <div className="col-span-12">
      <div className="p-3 bg-white rounded-2xl mb-8">
        <div className="bg-white rounded-2xl">
          {comments.map((comment, index) => {
            return <Review comment={comment} key={index} index={index} />;
          })}

          <ReviewModal
            userId={userId.toString()}
            driverId={driverId.toString()}
            reservationId={reservationId.toString()}
            userName={userName}
          />
        </div>
      </div>
    </div>
  );
}

