import FestivalCard from "@/components/FestivalCard"
import { getFestivals } from "@/lib/data"
import Link from "next/link"

export default async function Home() {
  const festivals = await getFestivals()

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Indian Festivals Calendar</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover the rich cultural heritage of India through its vibrant festivals and celebrations.
        </p>
        <div className="mt-6">
          <Link
            href="/preferences"
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-lg transition-colors"
          >
            Set Your Preferences
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {festivals.map((festival) => (
          <FestivalCard key={festival.id} festival={festival} />
        ))}
      </div>
    </main>
  )
}
