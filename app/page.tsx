"use client"

import { useState } from "react"
import { MapPin } from "lucide-react"
import CountryStateSelector from "@/components/country-state-selector"
import MonumentList from "@/components/monument-list"
import MonumentDetail from "@/components/monument-detail"
import type { Monument } from "@/types/monument"
import { getMonumentByName } from "@/lib/monuments"
import Sidebar from "@/components/sidebar"

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)
  const [selectedState, setSelectedState] = useState<string | null>(null)
  const [selectedMonument, setSelectedMonument] = useState<Monument | null>(null)
  const [isDetailOpen, setIsDetailOpen] = useState(false)

  const handleCountryChange = (country: string) => {
    setSelectedCountry(country)
    setSelectedState(null)
  }

  const handleStateChange = (state: string) => {
    setSelectedState(state)
  }

  const handleMonumentSelect = (monument: Monument) => {
    setSelectedMonument(monument)
    setIsDetailOpen(true)
  }

  const handleCloseDetail = () => {
    setIsDetailOpen(false)
  }

  const handlePredictionSelect = async (monumentName: string) => {
    const found = await getMonumentByName(monumentName)
    if (found) {
      setSelectedMonument(found)
      setIsDetailOpen(true)
    }
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          <MapPin className="inline-block mr-2" />
          Explore Monuments Around the World
        </h1>

        <CountryStateSelector
          selectedCountry={selectedCountry}
          selectedState={selectedState}
          onCountryChange={handleCountryChange}
          onStateChange={handleStateChange}
        />

        {selectedState && (
          <MonumentList
            country={selectedCountry!}
            state={selectedState}
            onMonumentSelect={handleMonumentSelect}
          />
        )}

        {selectedMonument && (
          <MonumentDetail
            monument={selectedMonument}
            isOpen={isDetailOpen}
            onClose={handleCloseDetail}
          />
        )}
      </main>
    </div>
  )
}
