import type { Monument } from "@/types/monument"
import { monumentsData } from "@/data/monuments"

export async function getMonumentsByLocation(country: string, state: string): Promise<Monument[]> {
  // In a real application, this would be an API call to your backend
  // For this example, we're using mock data

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800))

  return monumentsData.filter((monument) => monument.country === country && monument.state === state)
}
