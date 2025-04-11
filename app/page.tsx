"use client"

import { useState } from "react"
import { MapPin } from "lucide-react"
import CountryStateSelector from "@/components/country-state-selector"
import MonumentList from "@/components/monument-list"
import MonumentDetail from "@/components/monument-detail"
import type { Monument } from "@/types/monument"
import MonumentPredictor from "@/components/monument-predictor"
import { getMonumentByName } from "@/lib/monuments"

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
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        <MapPin className="inline-block mr-2" />
        Explore Monuments Around the World
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left side: Country/State + List */}
        <div>
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
        </div>

        {/* Right side: Image Upload + Prediction */}
        <div>
          <MonumentPredictor onSelectMonument={handlePredictionSelect} />
        </div>
      </div>
    </main>
  )
}
