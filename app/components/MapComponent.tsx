"use client"

import React from "react";
import {GoogleMap, LoadScript, Marker} from "@react-google-maps/api";
import { useState } from "react";
import Skeleton from '@mui/material/Skeleton';


export default function MapComponent() {
  const [isMapLoaded, setIsMapLoaded] = useState(false);  // Track loading state

    const containerStyle = {
        width: '100%',
        height: '250px',
        borderRadius: '10px'
      };

      const center = {
        lat: 33.410980,
        lng: -112.072490,
      };

      const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

      if (!googleMapsApiKey) {
          return <div>Error: Google Maps API key is not set!</div>;
      }

      return (
        <div className="max-w-[500px] mx-auto">
            {!isMapLoaded && (
                // Skeleton loader with Tailwind CSS
                <Skeleton variant="rectangular" width="100%" height={400} />
            )}
            <LoadScript googleMapsApiKey={googleMapsApiKey} onLoad={() => setIsMapLoaded(true)}>
                {isMapLoaded && (
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={10}
                    >
                        <Marker position={center} />
                    </GoogleMap>
                )}
            </LoadScript>
        </div>
      );
}
