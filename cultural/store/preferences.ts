import { create } from "zustand"
import { persist } from "zustand/middleware"

interface Preferences {
  region: string
  religion: string
  festivalType: string
}

interface PreferencesState {
  preferences: Preferences
  setPreferences: (preferences: Preferences) => void
  resetPreferences: () => void
}

export const usePreferencesStore = create<PreferencesState>()(
  persist(
    (set) => ({
      preferences: {
        region: "",
        religion: "",
        festivalType: "",
      },
      setPreferences: (preferences) => set({ preferences }),
      resetPreferences: () =>
        set({
          preferences: {
            region: "",
            religion: "",
            festivalType: "",
          },
        }),
    }),
    {
      name: "festival-preferences",
    },
  ),
)
