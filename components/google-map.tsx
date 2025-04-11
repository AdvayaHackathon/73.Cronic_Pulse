"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { MapPin, AlertCircle, ExternalLink } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface GoogleMapProps {
  latitude: number
  longitude: number
  name: string
}

export default function GoogleMap({ latitude, longitude, name }: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [mapLoaded, setMapLoaded] = useState(false)
  const [mapError, setMapError] = useState<string | null>(null)
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null)

  // Load Google Maps script with error handling
  useEffect(() => {
    if (!window.google && !document.getElementById("google-maps-script")) {
      const script = document.createElement("script")
      script.id = "google-maps-script"
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`
      script.async = true
      script.defer = true

      script.onload = () => setMapLoaded(true)

      script.onerror = () => {
        setMapError("Failed to load Google Maps API")
      }

      // Handle API errors (like billing not enabled)
      window.gm_authFailure = () => {
        setMapError("Google Maps API key error: Billing may not be enabled on your Google Cloud account")
      }

      document.head.appendChild(script)
    } else if (window.google) {
      setMapLoaded(true)
    }

    // Try to get user's location regardless of map loading
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

  // Initialize map if loaded successfully
  useEffect(() => {
    if (mapLoaded && mapRef.current && window.google && !mapError) {
      try {
        const map = new window.google.maps.Map(mapRef.current, {
          center: { lat: latitude, lng: longitude },
          zoom: 14,
          mapTypeControl: false,
          fullscreenControl: false,
          streetViewControl: false,
        })

        // Add marker for the monument
        new window.google.maps.Marker({
          position: { lat: latitude, lng: longitude },
          map,
          title: name,
          animation: window.google.maps.Animation.DROP,
        })

        // Add marker for user's location if available
        if (userLocation) {
          new window.google.maps.Marker({
            position: userLocation,
            map,
            title: "Your Location",
            icon: {
              path: window.google.maps.SymbolPath.CIRCLE,
              scale: 8,
              fillColor: "#4285F4",
              fillOpacity: 1,
              strokeColor: "#ffffff",
              strokeWeight: 2,
            },
          })
        }
      } catch (error) {
        console.error("Error initializing map:", error)
        setMapError("Failed to initialize Google Maps")
      }
    }
  }, [mapLoaded, latitude, longitude, name, userLocation, mapError])

  const getDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}&destination_place_id=${name.replace(/\s+/g, "+")}`
    window.open(url, "_blank")
  }

  const getDirectionsFromUserLocation = () => {
    if (!userLocation) return

    const url = `https://www.google.com/maps/dir/?api=1&origin=${userLocation.lat},${userLocation.lng}&destination=${latitude},${longitude}&travelmode=driving`
    window.open(url, "_blank")
  }

  // Render fallback UI when map can't be loaded
  if (mapError) {
    return (
      <div className="space-y-4">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Map Error</AlertTitle>
          <AlertDescription>
            {mapError}.
            {mapError.includes("Billing") && (
              <div className="mt-2">
                <p>To fix this issue:</p>
                <ol className="list-decimal pl-5 mt-2 space-y-1">
                  <li>Go to your Google Cloud Console</li>
                  <li>Enable billing for your project</li>
                  <li>Make sure the Maps JavaScript API is enabled</li>
                </ol>
                <a
                  href="https://developers.google.com/maps/documentation/javascript/error-messages#billing-not-enabled-map-error"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center mt-2 text-blue-600 hover:underline"
                >
                  Learn more <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </div>
            )}
          </AlertDescription>
        </Alert>

        <div className="bg-muted p-4 rounded-md text-center">
          <p className="font-medium mb-2">{name}</p>
          <p className="text-muted-foreground mb-4">
            Located at coordinates: {latitude.toFixed(4)}, {longitude.toFixed(4)}
          </p>
          <Button onClick={getDirections} className="w-full">
            <MapPin className="h-4 w-4 mr-2" />
            Open in Google Maps
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div ref={mapRef} className="h-full w-full rounded-md bg-muted" style={{ minHeight: "300px" }}>
        {!mapLoaded && (
          <div className="h-full w-full flex items-center justify-center">
            <p className="text-muted-foreground">Loading map...</p>
          </div>
        )}
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
  )
}
