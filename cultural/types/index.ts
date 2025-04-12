export interface Festival {
  id: string
  name: string
  date: string
  description: string
  category: string
  region: string
  religion: string
  type: string
}

export interface Preferences {
  region: string
  religion: string
  festivalType: string
}
