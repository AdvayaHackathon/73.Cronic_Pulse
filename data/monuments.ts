import type { Monument } from "@/types/monument"

export const monumentsData: Monument[] = [
  // United States
  {
    id: "us-statue-liberty",
    name: "Statue of Liberty",
    description:
      "The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor in New York City. The copper statue was a gift from the people of France to the people of the United States.",
    country: "United States",
    state: "New York",
    location: "Liberty Island, New York Harbor",
    imageUrl: "https://images.unsplash.com/photo-1605130284535-11dd9eedc58a?q=80&w=1000&auto=format&fit=crop",
    yearBuilt: "1886",
    visitingHours: "9:30 AM - 5:00 PM",
    facts: [
      "The statue is 305 feet tall from the ground to the tip of the torch",
      "The seven spikes on the crown represent the seven oceans and continents",
      "The statue's full name is 'Liberty Enlightening the World'",
    ],
    coordinates: {
      lat: 40.6892,
      lng: -74.0445,
    },
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Statue+of+Liberty",
  },
  {
    id: "us-golden-gate",
    name: "Golden Gate Bridge",
    description:
      "The Golden Gate Bridge is a suspension bridge spanning the Golden Gate, the one-mile-wide strait connecting San Francisco Bay and the Pacific Ocean.",
    country: "United States",
    state: "California",
    location: "San Francisco, California",
    imageUrl: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1000&auto=format&fit=crop",
    yearBuilt: "1937",
    visitingHours: "Open 24 hours",
    facts: [
      "The bridge is painted 'International Orange'",
      "It took four years to build the bridge",
      "The bridge is 1.7 miles long",
    ],
    coordinates: {
      lat: 37.8199,
      lng: -122.4783,
    },
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Golden+Gate+Bridge",
  },
  {
    id: "us-lincoln-memorial",
    name: "Lincoln Memorial",
    description:
      "The Lincoln Memorial is a US national memorial built to honor the 16th President of the United States, Abraham Lincoln. It is located on the western end of the National Mall in Washington, D.C.",
    country: "United States",
    state: "Washington DC",
    location: "National Mall, Washington DC",
    imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000&auto=format&fit=crop",
    yearBuilt: "1922",
    visitingHours: "Open 24 hours",
    facts: [
      "The building is in the form of a Greek Doric temple",
      "The memorial has 36 columns representing the states in the Union at the time of Lincoln's death",
      "The statue of Lincoln inside is 19 feet tall",
    ],
    coordinates: {
      lat: 38.8893,
      lng: -77.0502,
    },
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Lincoln+Memorial",
  },

  // India
  {
    id: "india-taj-mahal",
    name: "Taj Mahal",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal.",
    country: "India",
    state: "Uttar Pradesh",
    location: "Agra, Uttar Pradesh",
    imageUrl: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1000&auto=format&fit=crop",
    yearBuilt: "1643",
    visitingHours: "Sunrise to Sunset (Closed on Fridays)",
    facts: [
      "It took approximately 22 years to complete the construction",
      "The Taj Mahal appears to change color depending on the time of day",
      "Over 20,000 workers were employed for its construction",
    ],
    coordinates: {
      lat: 27.1751,
      lng: 78.0421,
    },
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Taj+Mahal",
  },
  {
    id: "india-red-fort",
    name: "Red Fort",
    description:
      "The Red Fort is a historic fort in the city of Delhi that served as the main residence of the Mughal Emperors. Built in 1639, it was the ceremonial and political center of the Mughal government.",
    country: "India",
    state: "Delhi",
    location: "Old Delhi, Delhi",
    imageUrl: "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?q=80&w=1000&auto=format&fit=crop",
    yearBuilt: "1639",
    visitingHours: "9:30 AM - 4:30 PM (Closed on Mondays)",
    facts: [
      "The fort gets its name from its massive red sandstone walls",
      "It houses several museums",
      "The Prime Minister of India addresses the nation from here on Independence Day",
    ],
    coordinates: {
      lat: 28.6562,
      lng: 77.241,
    },
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Red+Fort+Delhi",
  },

  
