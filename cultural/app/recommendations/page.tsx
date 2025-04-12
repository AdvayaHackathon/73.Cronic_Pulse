"use client"

import { useEffect, useState } from "react"
import { usePreferencesStore } from "@/store/preferences"
import { getFestivals } from "@/lib/data"
import FestivalCard from "@/components/FestivalCard"
import Link from "next/link"
import type { Festival } from "@/types"

export default function RecommendationsPage() {
  const preferences = usePreferencesStore((state) => state.preferences)
  const [recommendations, setRecommendations] = useState<Festival[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAndFilterFestivals = async () => {
      setLoading(true)
      const allFestivals = await getFestivals()

      // Filter festivals based on preferences
      const filtered = allFestivals.filter((festival) => {
        const regionMatch = !preferences.region || festival.region === preferences.region
        const religionMatch = !preferences.religion || festival.religion === preferences.religion
        const typeMatch = !preferences.festivalType || festival.type === preferences.festivalType

        return regionMatch && religionMatch && typeMatch
      })

      setRecommendations(filtered)
      setLoading(false)
    }

    fetchAndFilterFestivals()
  }, [preferences])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-lg">Loading recommendations...</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Your Festival Recommendations</h1>

      {recommendations.length > 0 ? (
        <>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-8">
            Based on your preferences, here are the festivals we think you'll enjoy.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendations.map((festival) => (
              <FestivalCard key={festival.id} festival={festival} />
            ))}
          </div>
        </>
      ) : (
        <div className="text-center py-8">
          <p className="text-lg mb-4">No festivals match your current preferences.</p>
          <Link
            href="/preferences"
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-lg transition-colors"
          >
            Update Preferences
          </Link>
        </div>
      )}
    </div>
  )
}
