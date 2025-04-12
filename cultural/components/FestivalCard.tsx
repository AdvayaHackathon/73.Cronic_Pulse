import type { Festival } from "@/types"
import { formatDate } from "@/lib/utils"

interface FestivalCardProps {
  festival: Festival
}

export default function FestivalCard({ festival }: FestivalCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className={`h-2 ${getCategoryColor(festival.category)}`}></div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-800">{festival.name}</h3>
          <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs font-medium rounded">
            {festival.category}
          </span>
        </div>

        <div className="mb-4">
          <p className="text-sm text-gray-500 mb-1">
            <span className="font-medium">Date:</span> {formatDate(festival.date)}
          </p>
          <p className="text-sm text-gray-500 mb-1">
            <span className="font-medium">Region:</span> {festival.region}
          </p>
          <p className="text-sm text-gray-500">
            <span className="font-medium">Religion:</span> {festival.religion}
          </p>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-3">{festival.description}</p>

        <div className="flex justify-end">
          <button className="text-orange-600 hover:text-orange-800 text-sm font-medium">Learn more</button>
        </div>
      </div>
    </div>
  )
}

function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    Religious: "bg-red-500",
    Cultural: "bg-blue-500",
    Harvest: "bg-green-500",
    National: "bg-purple-500",
  }

  return colors[category] || "bg-gray-500"
}
