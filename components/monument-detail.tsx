"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Clock, Calendar, Info, Map } from "lucide-react"
import Image from "next/image"
import type { Monument } from "@/types/monument"
import GoogleMap from "@/components/google-map"

interface MonumentDetailProps {
  monument: Monument
  isOpen: boolean
  onClose: () => void
}

export default function MonumentDetail({ monument, isOpen, onClose }: MonumentDetailProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto top-1/2 -translate-y-1/2">
        <div className="space-y-6">
          <DialogHeader>
            <DialogTitle className="text-2xl">{monument.name}</DialogTitle>
            <DialogDescription className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              {monument.location}
            </DialogDescription>
          </DialogHeader>

          <div className="relative w-full aspect-video rounded-md overflow-hidden">
            <Image
              src={monument.imageUrl || "/placeholder.svg"}
              alt={monument.name}
              fill
              className="object-cover"
            />
          </div>

          <Tabs defaultValue="info">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="info" className="flex items-center">
                <Info className="h-4 w-4 mr-2" />
                Information
              </TabsTrigger>
              <TabsTrigger value="map" className="flex items-center">
                <Map className="h-4 w-4 mr-2" />
                Map & Directions
              </TabsTrigger>
            </TabsList>

            <TabsContent value="info" className="space-y-4 mt-4">
              <div>
                <h3 className="font-medium mb-2">About</h3>
                <p className="text-muted-foreground">{monument.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 mr-2 mt-0.5 text-muted-foreground" />
                  <div>
                    <h4 className="font-medium">Year Built</h4>
                    <p className="text-muted-foreground">{monument.yearBuilt}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-5 w-5 mr-2 mt-0.5 text-muted-foreground" />
                  <div>
                    <h4 className="font-medium">Visiting Hours</h4>
                    <p className="text-muted-foreground">{monument.visitingHours}</p>
                  </div>
                </div>
              </div>

              {monument.facts && (
                <div>
                  <h3 className="font-medium mb-2">Interesting Facts</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {monument.facts.map((fact, index) => (
                      <li key={index} className="text-muted-foreground">
                        {fact}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </TabsContent>

            <TabsContent value="map" className="mt-4">
                <div className="mt-4">
                <Button className="w-full" onClick={() => window.open(monument.directionsUrl, "_blank")}>
                <MapPin className="h-4 w-4 mr-2" />
                  Get Directions
                </Button>
                </div>  
            </TabsContent>
          </Tabs>

          <DialogFooter className="mt-6">
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  )
}
