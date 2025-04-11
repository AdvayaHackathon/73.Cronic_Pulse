"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MapPin, ExternalLink } from "lucide-react"
import Image from "next/image"

interface GoogleMapProps {
  latitude: number
  longitude: number
  name: string
}

export default function GoogleMap({ latitude, longitude, name }: GoogleMapProps) {
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null)

  // Try to get user's location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          })
        },
        () => {
          console.log("Error: The Geolocation service failed.")
        },
      )
    }
  }, [])

  // Generate a static map URL from OpenStreetMap
  const staticMapUrl = `https://staticmap.openstreetmap.de/staticmap.php?center=${latitude},${longitude}&zoom=14&size=600x300&markers=${latitude},${longitude},red`

  const getDirections = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}&query_place_id=${encodeURIComponent(name)}`
    window.open(url, "_blank")
  }

  const getDirectionsFromUserLocation = () => {
    if (!userLocation) return

    const url = `https://www.google.com/maps/dir/?api=1&origin=${userLocation.lat},${userLocation.lng}&destination=${latitude},${longitude}&travelmode=driving`
    window.open(url, "_blank")
  }

  const openInOpenStreetMap = () => {
    const url = `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}&zoom=15`
    window.open(url, "_blank")
  }

  return (
    <div className="space-y-4">
      <div className="relative h-[300px] w-full rounded-md overflow-hidden border border-muted">
        <Image
          src={staticMapUrl || "/placeholder.svg"}
          alt={`Map showing location of ${name}`}
          fill
          className="object-cover"
        />
        <div className="absolute bottom-2 right-2">
          <Button size="sm" variant="secondary" className="bg-white/80 hover:bg-white" onClick={openInOpenStreetMap}>
            <ExternalLink className="h-3 w-3 mr-1" />
            OpenStreetMap
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <div className="flex items-center justify-between p-3 bg-muted rounded-md">
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-sm text-muted-foreground">
              {latitude.toFixed(4)}, {longitude.toFixed(4)}
            </p>
          </div>
          <Button variant="outline" size="sm" onClick={getDirections}>
            <MapPin className="h-4 w-4 mr-2" />
            View
          </Button>
        </div>

        {userLocation && (
          <Button onClick={getDirectionsFromUserLocation} className="w-full">
            <MapPin className="h-4 w-4 mr-2" />
            Get Directions from Your Location
          </Button>
        )}

        <Button variant="outline" onClick={getDirections} className="w-full">
          <ExternalLink className="h-4 w-4 mr-2" />
          Open in Google Maps
        </Button>
      </div>
    </div>
  )
}
