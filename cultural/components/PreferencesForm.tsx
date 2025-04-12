"use client"

import type React from "react"

import { useState } from "react"
import { usePreferencesStore } from "@/store/preferences"

interface PreferencesFormProps {
  onSubmit: (preferences: any) => void
}

export default function PreferencesForm({ onSubmit }: PreferencesFormProps) {
  const storedPreferences = usePreferencesStore((state) => state.preferences)

  const [preferences, setPreferences] = useState({
    region: storedPreferences.region || "",
    religion: storedPreferences.religion || "",
    festivalType: storedPreferences.festivalType || "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    setPreferences((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(preferences)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-1">
          Region
        </label>
        <select
          id="region"
          name="region"
          value={preferences.region}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        >
          <option value="">All Regions</option>
          <option value="North India">North India</option>
          <option value="South India">South India</option>
          <option value="East India">East India</option>
          <option value="West India">West India</option>
          <option value="Central India">Central India</option>
          <option value="Northeast India">Northeast India</option>
        </select>
      </div>

      <div>
        <label htmlFor="religion" className="block text-sm font-medium text-gray-700 mb-1">
          Religion
        </label>
        <select
          id="religion"
          name="religion"
          value={preferences.religion}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        >
          <option value="">All Religions</option>
          <option value="Hindu">Hindu</option>
          <option value="Muslim">Muslim</option>
          <option value="Sikh">Sikh</option>
          <option value="Jain">Jain</option>
          <option value="Buddhist">Buddhist</option>
          <option value="Christian">Christian</option>
          <option value="Secular">Secular</option>
        </select>
      </div>

      <div>
        <label htmlFor="festivalType" className="block text-sm font-medium text-gray-700 mb-1">
          Festival Type
        </label>
        <select
          id="festivalType"
          name="festivalType"
          value={preferences.festivalType}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        >
          <option value="">All Types</option>
          <option value="Religious">Religious</option>
          <option value="Cultural">Cultural</option>
          <option value="Harvest">Harvest</option>
          <option value="National">National</option>
        </select>
      </div>

      <div className="pt-4">
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
        >
          Get Recommendations
        </button>
      </div>
    </form>
  )
}
