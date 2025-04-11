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

  // France
  {
    id: "france-eiffel-tower",
    name: "Eiffel Tower",
    description:
      "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower.",
    country: "France",
    state: "Île-de-France",
    location: "Champ de Mars, Paris",
    imageUrl: "https://images.unsplash.com/photo-1543349689-9a4d426bee8e?q=80&w=1000&auto=format&fit=crop",
    yearBuilt: "1889",
    visitingHours: "9:00 AM - 12:45 AM",
    facts: [
      "It was built as the entrance arch for the 1889 World's Fair",
      "The tower is 324 meters tall",
      "It was the tallest man-made structure in the world for 41 years",
    ],
    coordinates: {
      lat: 48.8584,
      lng: 2.2945,
    },
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Eiffel+Tower",
  },
  {
    id: "france-louvre",
    name: "Louvre Museum",
    description:
      "The Louvre, or the Louvre Museum, is the world's largest art museum and a historic monument in Paris, France. It is home to some of the most famous works of art, including the Mona Lisa.",
    country: "France",
    state: "Île-de-France",
    location: "Rue de Rivoli, Paris",
    imageUrl: "https://images.unsplash.com/photo-1565099824688-e8c8bfb91a5c?q=80&w=1000&auto=format&fit=crop",
    yearBuilt: "1793",
    visitingHours: "9:00 AM - 6:00 PM (Closed on Tuesdays)",
    facts: [
      "It was originally built as a fortress in the 12th century",
      "It houses approximately 38,000 objects from prehistory to the 21st century",
      "The glass pyramid was added in 1989",
    ],
    coordinates: {
      lat: 48.8606,
      lng: 2.3376,
    },
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Louvre+Museum",
  },

  // Italy
  {
    id: "italy-colosseum",
    name: "Colosseum",
    description:
      "The Colosseum is an oval amphitheatre in the centre of the city of Rome, Italy. It is the largest ancient amphitheatre ever built, and is still the largest standing amphitheatre in the world today.",
    country: "Italy",
    state: "Lazio",
    location: "Piazza del Colosseo, Rome",
    imageUrl: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1000&auto=format&fit=crop",
    yearBuilt: "80 AD",
    visitingHours: "8:30 AM - 7:00 PM",
    facts: [
      "It could hold an estimated 50,000 to 80,000 spectators",
      "It was used for gladiatorial contests and public spectacles",
      "It took only 8 years to build",
    ],
    coordinates: {
      lat: 41.8902,
      lng: 12.4922,
    },
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Colosseum+Rome",
  },
  {
    id: "italy-leaning-tower",
    name: "Leaning Tower of Pisa",
    description:
      "The Leaning Tower of Pisa is the campanile, or freestanding bell tower, of the cathedral of the Italian city of Pisa, known worldwide for its nearly four-degree lean.",
    country: "Italy",
    state: "Tuscany",
    location: "Piazza del Duomo, Pisa",
    imageUrl: "https://images.unsplash.com/photo-1603199506016-b9a594b593c0?q=80&w=1000&auto=format&fit=crop",
    yearBuilt: "1372",
    visitingHours: "10:00 AM - 8:00 PM",
    facts: [
      "The tower began to lean during construction due to soft ground on one side",
      "It took 199 years to build",
      "The tower is about 56 meters tall",
    ],
    coordinates: {
      lat: 43.723,
      lng: 10.3966,
    },
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Leaning+Tower+of+Pisa",
  },

  // United Kingdom
  {
    id: "uk-big-ben",
    name: "Big Ben",
    description:
      "Big Ben is the nickname for the Great Bell of the striking clock at the north end of the Palace of Westminster in London, England. The name is frequently extended to refer to both the clock and the clock tower.",
    country: "United Kingdom",
    state: "England",
    location: "Westminster, London",
    imageUrl: "https://images.unsplash.com/photo-1500380804539-4e1e8c1e7118?q=80&w=1000&auto=format&fit=crop",
    yearBuilt: "1859",
    visitingHours: "Tours by appointment only",
    facts: [
      "The tower is 96 meters tall",
      "The clock faces are 7 meters in diameter",
      "The minute hands are 4.2 meters long",
    ],
    coordinates: {
      lat: 51.5007,
      lng: -0.1246,
    },
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Big+Ben+London",
  },
  {
    id: "uk-stonehenge",
    name: "Stonehenge",
    description:
      "Stonehenge is a prehistoric monument in Wiltshire, England. It consists of a ring of standing stones, each around 13 feet high, seven feet wide, and weighing around 25 tons.",
    country: "United Kingdom",
    state: "England",
    location: "Salisbury Plain, Wiltshire",
    imageUrl: "https://images.unsplash.com/photo-1599833975787-5c143f373c30?q=80&w=1000&auto=format&fit=crop",
    yearBuilt: "3000 BC",
    visitingHours: "9:30 AM - 5:00 PM",
    facts: [
      "It is believed to have been constructed between 3000 BC to 2000 BC",
      "The stones are aligned with the sunrise on the summer solstice",
      "Some of the stones were transported from over 150 miles away",
    ],
    coordinates: {
      lat: 51.1789,
      lng: -1.8262,
    },
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Stonehenge",
  },
]
