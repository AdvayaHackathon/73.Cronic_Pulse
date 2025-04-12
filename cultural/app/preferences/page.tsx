"use client"

import PreferencesForm from "@/components/PreferencesForm"
import { useRouter } from "next/navigation"
import { usePreferencesStore } from "@/store/preferences"

export default function PreferencesPage() {
  const router = useRouter()
  const setPreferences = usePreferencesStore((state) => state.setPreferences)

  const handleSubmit = (preferences: any) => {
    setPreferences(preferences)
    router.push("/recommendations")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Your Festival Preferences</h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-8">
        Tell us what you're interested in, and we'll recommend festivals that match your preferences.
      </p>

      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <PreferencesForm onSubmit={handleSubmit} />
      </div>
    </div>
  )
}
