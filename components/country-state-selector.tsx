"use client"

import { useEffect, useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { countriesData } from "@/data/countries-states"

interface CountryStateSelectorProps {
  selectedCountry: string | null
  selectedState: string | null
  onCountryChange: (country: string) => void
  onStateChange: (state: string) => void
}

export default function CountryStateSelector({
  selectedCountry,
  selectedState,
  onCountryChange,
  onStateChange,
}: CountryStateSelectorProps) {
  const [states, setStates] = useState<string[]>([])

  useEffect(() => {
    if (selectedCountry) {
      const countryData = countriesData.find((c) => c.name === selectedCountry)
      setStates(countryData?.states || [])
    } else {
      setStates([])
    }
  }, [selectedCountry])

  return (
    <Card className="mb-8">
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="country-select" className="text-sm font-medium">
              Select a Country
            </label>
            <Select value={selectedCountry || ""} onValueChange={onCountryChange}>
              <SelectTrigger id="country-select">
                <SelectValue placeholder="Select a country" />
              </SelectTrigger>
              <SelectContent>
                {countriesData.map((country) => (
                  <SelectItem key={country.name} value={country.name}>
                    {country.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label htmlFor="state-select" className="text-sm font-medium">
              Select a State
            </label>
            <Select value={selectedState || ""} onValueChange={onStateChange} disabled={!selectedCountry}>
              <SelectTrigger id="state-select">
                <SelectValue placeholder={selectedCountry ? "Select a state" : "Select a country first"} />
              </SelectTrigger>
              <SelectContent>
                {states.map((state) => (
                  <SelectItem key={state} value={state}>
                    {state}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
