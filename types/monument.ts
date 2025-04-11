export interface Monument {
  id: string
  name: string
  description: string
  country: string
  state: string
  location: string
  imageUrl: string
  yearBuilt: string
  visitingHours: string
  facts?: string[]
  coordinates: {
    lat: number
    lng: number
  }
  directionsUrl: string
}
