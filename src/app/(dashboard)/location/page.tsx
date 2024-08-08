"use client"

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const MapWithNoSSR = dynamic(() => import('@/components/Page/Location/MapComponent'), {
  ssr: false
})

interface Location {
  latitude: number;
  longitude: number;
}

const Home: React.FC = () => {
  const [location, setLocation] = useState<Location>({ latitude: 0, longitude: 0 })

  useEffect(() => {
    // Ici, vous devriez récupérer la localisation de l'enfant depuis votre backend
    // Ceci est juste un exemple
    setLocation({ latitude: 48.8584, longitude: 2.2945 })
  }, [])

  return (
    <div>
      <h1>Position du mobile de votre enfant</h1>
      <MapWithNoSSR latitude={location.latitude} longitude={location.longitude} childname={'cris'} photoUrl={'assets/images/photo6.jpg'} lastupdateTime='10/06/2024' />
    </div>
  )
}

export default Home