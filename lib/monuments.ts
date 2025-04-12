import type { Monument } from "@/types/monument"
import { monumentsData } from "@/data/monuments"

export async function getMonumentsByLocation(country: string, state: string): Promise<Monument[]> {
  await new Promise((resolve) => setTimeout(resolve, 800))
  return monumentsData.filter((monument) => monument.country === country && monument.state === state)
}

export async function getMonumentByName(name: string | undefined): Promise<Monument | undefined> {
  if (!name) return undefined
  return monumentsData.find(
    (monument) => monument.name.toLowerCase() === name.toLowerCase()
  )
}
