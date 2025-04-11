"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Landmark, MapPin } from "lucide-react"
import Image from "next/image"
import type { Monument } from "@/types/monument"
import { getMonumentsByLocation } from "@/lib/monuments"

interface MonumentListProps {
  country: string
  state: string
  onMonumentSelect: (monument: Monument) => void
}

export default function MonumentList({ country, state, onMonumentSelect }: MonumentListProps) {
  const [monuments, setMonuments] = useState<Monument[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMonuments = async () => {
      setLoading(true)
      try {
        const data = await getMonumentsByLocation(country, state)
        setMonuments(data)
      } catch (error) {
        console.error("Failed to fetch monuments:", error)
        setMonuments([])
      } finally {
        setLoading(false)
      }
    }

    fetchMonuments()
  }, [country, state])

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-pulse text-center">
          <Landmark className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
          <p className="text-muted-foreground">Loading monuments...</p>
        </div>
      </div>
    )
  }

  if (monuments.length === 0) {
    return (
      <div className="text-center py-12">
        <Landmark className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
        <h3 className="text-xl font-medium mb-2">No monuments found</h3>
        <p className="text-muted-foreground">
          We couldn't find any monuments in {state}, {country}.
        </p>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">
        Monuments in {state}, {country}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {monuments.map((monument) => (
          <Card key={monument.id} className="overflow-hidden h-full flex flex-col">
            <div className="relative h-48 w-full">
              <Image src={monument.imageUrl || "/placeholder.svg"} alt={monument.name} fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle>{monument.name}</CardTitle>
              <CardDescription className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                {monument.location}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="line-clamp-3 text-muted-foreground">{monument.description}</p>
            </CardContent>
            <CardFooter>
              <Button onClick={() => onMonumentSelect(monument)} className="w-full">
                View Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
