import type { Festival } from "@/types"

// This simulates fetching data from an API or database
export async function getFestivals(): Promise<Festival[]> {
  // In a real app, this would be an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(festivals)
    }, 300) // Simulate network delay
  })
}

const festivals: Festival[] = [
  {
    "id": "1",
    "name": "Phoolon Ki Holi",
    "date": "2025-04-12",
    "description": "Phoolon Ki Holi is a vibrant festival celebrated in Vrindavan, Uttar Pradesh. Unlike the usual Holi with colors, this celebration involves showering flowers. It commemorates the playful divine love of Radha and Krishna. The atmosphere is filled with chants, bhajans, and floral bliss.",
    "category": "Cultural | Spiritual",
    "region": "North India",
    "religion": "Hindu",
    "type": "Traditional"
  },
  {
    "id": "2",
    "name": "Hemis Festival",
    "date": "2025-04-15",
    "description": "Hemis Festival is a two-day spiritual celebration at Hemis Monastery in Ladakh. It honors Guru Padmasambhava, the founder of Tibetan Buddhism. Monks perform masked dances (Cham) symbolizing the triumph of good over evil.",
    "category": "Spiritual | Dance | Cultural",
    "region": "North India",
    "religion": "Buddhist",
    "type": "Traditional"
  },
  {
    "id": "3",
    "name": "Thrissur Pooram",
    "date": "2025-04-18",
    "description": "Held in Kerala, Thrissur Pooram is an extraordinary temple festival featuring a grand parade of caparisoned elephants, fireworks, and classical music. It is a visual and spiritual extravaganza attracting people from across the globe.",
    "category": "Cultural | Religious | Music",
    "region": "South India",
    "religion": "Hindu",
    "type": "Traditional"
  },
  {
    "id": "4",
    "name": "Hornbill Festival",
    "date": "2025-04-21",
    "description": "The Hornbill Festival is celebrated in Nagaland to revive, protect, and preserve the richness of the Naga heritage and traditions. Named after the Indian hornbill bird, it's a feast of music, dance, and traditional art.",
    "category": "Cultural | Music | Dance",
    "region": "North East India",
    "religion": "Tribal",
    "type": "Expo and Exhibitions"
  },
  {
    "id": "5",
    "name": "Ellora Ajanta Festival",
    "date": "2025-04-24",
    "description": "Hosted near the ancient Ellora Caves in Maharashtra, this festival showcases classical dance and music performances by renowned artists. It's a fusion of history, culture, and art.",
    "category": "Art & Culture | Music | Dance",
    "region": "West India",
    "religion": "Secular",
    "type": "Classical"
  },
  {
    "id": "6",
    "name": "Phoolon Ki Holi",
    "date": "2025-04-27",
    "description": "Phoolon Ki Holi is a vibrant festival celebrated in Vrindavan, Uttar Pradesh. Unlike the usual Holi with colors, this celebration involves showering flowers. It commemorates the playful divine love of Radha and Krishna. The atmosphere is filled with chants, bhajans, and floral bliss.",
    "category": "Cultural | Spiritual",
    "region": "North India",
    "religion": "Hindu",
    "type": "Traditional"
  },
  {
    "id": "7",
    "name": "Hemis Festival",
    "date": "2025-04-30",
    "description": "Hemis Festival is a two-day spiritual celebration at Hemis Monastery in Ladakh. It honors Guru Padmasambhava, the founder of Tibetan Buddhism. Monks perform masked dances (Cham) symbolizing the triumph of good over evil.",
    "category": "Spiritual | Dance | Cultural",
    "region": "North India",
    "religion": "Buddhist",
    "type": "Traditional"
  },
  {
    "id": "8",
    "name": "Thrissur Pooram",
    "date": "2025-05-03",
    "description": "Held in Kerala, Thrissur Pooram is an extraordinary temple festival featuring a grand parade of caparisoned elephants, fireworks, and classical music. It is a visual and spiritual extravaganza attracting people from across the globe.",
    "category": "Cultural | Religious | Music",
    "region": "South India",
    "religion": "Hindu",
    "type": "Traditional"
  },
  {
    "id": "9",
    "name": "Hornbill Festival",
    "date": "2025-05-06",
    "description": "The Hornbill Festival is celebrated in Nagaland to revive, protect, and preserve the richness of the Naga heritage and traditions. Named after the Indian hornbill bird, it's a feast of music, dance, and traditional art.",
    "category": "Cultural | Music | Dance",
    "region": "North East India",
    "religion": "Tribal",
    "type": "Expo and Exhibitions"
  },
  {
    "id": "10",
    "name": "Ellora Ajanta Festival",
    "date": "2025-05-09",
    "description": "Hosted near the ancient Ellora Caves in Maharashtra, this festival showcases classical dance and music performances by renowned artists. It's a fusion of history, culture, and art.",
    "category": "Art & Culture | Music | Dance",
    "region": "West India",
    "religion": "Secular",
    "type": "Classical"
  },
  {
    "id": "11",
    "name": "Phoolon Ki Holi",
    "date": "2025-05-12",
    "description": "Phoolon Ki Holi is a vibrant festival celebrated in Vrindavan, Uttar Pradesh. Unlike the usual Holi with colors, this celebration involves showering flowers. It commemorates the playful divine love of Radha and Krishna. The atmosphere is filled with chants, bhajans, and floral bliss.",
    "category": "Cultural | Spiritual",
    "region": "North India",
    "religion": "Hindu",
    "type": "Traditional"
  },
  {
    "id": "12",
    "name": "Hemis Festival",
    "date": "2025-05-15",
    "description": "Hemis Festival is a two-day spiritual celebration at Hemis Monastery in Ladakh. It honors Guru Padmasambhava, the founder of Tibetan Buddhism. Monks perform masked dances (Cham) symbolizing the triumph of good over evil.",
    "category": "Spiritual | Dance | Cultural",
    "region": "North India",
    "religion": "Buddhist",
    "type": "Traditional"
  },
  {
    "id": "13",
    "name": "Thrissur Pooram",
    "date": "2025-05-18",
    "description": "Held in Kerala, Thrissur Pooram is an extraordinary temple festival featuring a grand parade of caparisoned elephants, fireworks, and classical music. It is a visual and spiritual extravaganza attracting people from across the globe.",
    "category": "Cultural | Religious | Music",
    "region": "South India",
    "religion": "Hindu",
    "type": "Traditional"
  },
  {
    "id": "14",
    "name": "Hornbill Festival",
    "date": "2025-05-21",
    "description": "The Hornbill Festival is celebrated in Nagaland to revive, protect, and preserve the richness of the Naga heritage and traditions. Named after the Indian hornbill bird, it's a feast of music, dance, and traditional art.",
    "category": "Cultural | Music | Dance",
    "region": "North East India",
    "religion": "Tribal",
    "type": "Expo and Exhibitions"
  },
  {
    "id": "15",
    "name": "Ellora Ajanta Festival",
    "date": "2025-05-24",
    "description": "Hosted near the ancient Ellora Caves in Maharashtra, this festival showcases classical dance and music performances by renowned artists. It's a fusion of history, culture, and art.",
    "category": "Art & Culture | Music | Dance",
    "region": "West India",
    "religion": "Secular",
    "type": "Classical"
  },
  {
    "id": "16",
    "name": "Phoolon Ki Holi",
    "date": "2025-05-27",
    "description": "Phoolon Ki Holi is a vibrant festival celebrated in Vrindavan, Uttar Pradesh. Unlike the usual Holi with colors, this celebration involves showering flowers. It commemorates the playful divine love of Radha and Krishna. The atmosphere is filled with chants, bhajans, and floral bliss.",
    "category": "Cultural | Spiritual",
    "region": "North India",
    "religion": "Hindu",
    "type": "Traditional"
  },
  {
    "id": "17",
    "name": "Hemis Festival",
    "date": "2025-05-30",
    "description": "Hemis Festival is a two-day spiritual celebration at Hemis Monastery in Ladakh. It honors Guru Padmasambhava, the founder of Tibetan Buddhism. Monks perform masked dances (Cham) symbolizing the triumph of good over evil.",
    "category": "Spiritual | Dance | Cultural",
    "region": "North India",
    "religion": "Buddhist",
    "type": "Traditional"
  },
  {
    "id": "18",
    "name": "Thrissur Pooram",
    "date": "2025-06-02",
    "description": "Held in Kerala, Thrissur Pooram is an extraordinary temple festival featuring a grand parade of caparisoned elephants, fireworks, and classical music. It is a visual and spiritual extravaganza attracting people from across the globe.",
    "category": "Cultural | Religious | Music",
    "region": "South India",
    "religion": "Hindu",
    "type": "Traditional"
  },
  {
    "id": "19",
    "name": "Hornbill Festival",
    "date": "2025-06-05",
    "description": "The Hornbill Festival is celebrated in Nagaland to revive, protect, and preserve the richness of the Naga heritage and traditions. Named after the Indian hornbill bird, it's a feast of music, dance, and traditional art.",
    "category": "Cultural | Music | Dance",
    "region": "North East India",
    "religion": "Tribal",
    "type": "Expo and Exhibitions"
  },
  {
    "id": "20",
    "name": "Ellora Ajanta Festival",
    "date": "2025-06-08",
    "description": "Hosted near the ancient Ellora Caves in Maharashtra, this festival showcases classical dance and music performances by renowned artists. It's a fusion of history, culture, and art.",
    "category": "Art & Culture | Music | Dance",
    "region": "West India",
    "religion": "Secular",
    "type": "Classical"
  },
  {
    "id": "21",
    "name": "Phoolon Ki Holi",
    "date": "2025-06-11",
    "description": "Phoolon Ki Holi is a vibrant festival celebrated in Vrindavan, Uttar Pradesh. Unlike the usual Holi with colors, this celebration involves showering flowers. It commemorates the playful divine love of Radha and Krishna. The atmosphere is filled with chants, bhajans, and floral bliss.",
    "category": "Cultural | Spiritual",
    "region": "North India",
    "religion": "Hindu",
    "type": "Traditional"
  },
  {
    "id": "22",
    "name": "Hemis Festival",
    "date": "2025-06-14",
    "description": "Hemis Festival is a two-day spiritual celebration at Hemis Monastery in Ladakh. It honors Guru Padmasambhava, the founder of Tibetan Buddhism. Monks perform masked dances (Cham) symbolizing the triumph of good over evil.",
    "category": "Spiritual | Dance | Cultural",
    "region": "North India",
    "religion": "Buddhist",
    "type": "Traditional"
  },
  {
    "id": "23",
    "name": "Thrissur Pooram",
    "date": "2025-06-17",
    "description": "Held in Kerala, Thrissur Pooram is an extraordinary temple festival featuring a grand parade of caparisoned elephants, fireworks, and classical music. It is a visual and spiritual extravaganza attracting people from across the globe.",
    "category": "Cultural | Religious | Music",
    "region": "South India",
    "religion": "Hindu",
    "type": "Traditional"
  },
  {
    "id": "24",
    "name": "Hornbill Festival",
    "date": "2025-06-20",
    "description": "The Hornbill Festival is celebrated in Nagaland to revive, protect, and preserve the richness of the Naga heritage and traditions. Named after the Indian hornbill bird, it's a feast of music, dance, and traditional art.",
    "category": "Cultural | Music | Dance",
    "region": "North East India",
    "religion": "Tribal",
    "type": "Expo and Exhibitions"
  },
  {
    "id": "25",
    "name": "Ellora Ajanta Festival",
    "date": "2025-06-23",
    "description": "Hosted near the ancient Ellora Caves in Maharashtra, this festival showcases classical dance and music performances by renowned artists. It's a fusion of history, culture, and art.",
    "category": "Art & Culture | Music | Dance",
    "region": "West India",
    "religion": "Secular",
    "type": "Classical"
  },
  {
    "id": "26",
    "name": "Phoolon Ki Holi",
    "date": "2025-06-26",
    "description": "Phoolon Ki Holi is a vibrant festival celebrated in Vrindavan, Uttar Pradesh. Unlike the usual Holi with colors, this celebration involves showering flowers. It commemorates the playful divine love of Radha and Krishna. The atmosphere is filled with chants, bhajans, and floral bliss.",
    "category": "Cultural | Spiritual",
    "region": "North India",
    "religion": "Hindu",
    "type": "Traditional"
  },
  {
    "id": "27",
    "name": "Hemis Festival",
    "date": "2025-06-29",
    "description": "Hemis Festival is a two-day spiritual celebration at Hemis Monastery in Ladakh. It honors Guru Padmasambhava, the founder of Tibetan Buddhism. Monks perform masked dances (Cham) symbolizing the triumph of good over evil.",
    "category": "Spiritual | Dance | Cultural",
    "region": "North India",
    "religion": "Buddhist",
    "type": "Traditional"
  },
  {
    "id": "28",
    "name": "Thrissur Pooram",
    "date": "2025-07-02",
    "description": "Held in Kerala, Thrissur Pooram is an extraordinary temple festival featuring a grand parade of caparisoned elephants, fireworks, and classical music. It is a visual and spiritual extravaganza attracting people from across the globe.",
    "category": "Cultural | Religious | Music",
    "region": "South India",
    "religion": "Hindu",
    "type": "Traditional"
  },
  {
    "id": "29",
    "name": "Hornbill Festival",
    "date": "2025-07-05",
    "description": "The Hornbill Festival is celebrated in Nagaland to revive, protect, and preserve the richness of the Naga heritage and traditions. Named after the Indian hornbill bird, it's a feast of music, dance, and traditional art.",
    "category": "Cultural | Music | Dance",
    "region": "North East India",
    "religion": "Tribal",
    "type": "Expo and Exhibitions"
  },
  {
    "id": "30",
    "name": "Ellora Ajanta Festival",
    "date": "2025-07-08",
    "description": "Hosted near the ancient Ellora Caves in Maharashtra, this festival showcases classical dance and music performances by renowned artists. It's a fusion of history, culture, and art.",
    "category": "Art & Culture | Music | Dance",
    "region": "West India",
    "religion": "Secular",
    "type": "Classical"
  },
  {
    "id": "31",
    "name": "Phoolon Ki Holi",
    "date": "2025-07-11",
    "description": "Phoolon Ki Holi is a vibrant festival celebrated in Vrindavan, Uttar Pradesh. Unlike the usual Holi with colors, this celebration involves showering flowers. It commemorates the playful divine love of Radha and Krishna. The atmosphere is filled with chants, bhajans, and floral bliss.",
    "category": "Cultural | Spiritual",
    "region": "North India",
    "religion": "Hindu",
    "type": "Traditional"
  },
  {
    "id": "32",
    "name": "Hemis Festival",
    "date": "2025-07-14",
    "description": "Hemis Festival is a two-day spiritual celebration at Hemis Monastery in Ladakh. It honors Guru Padmasambhava, the founder of Tibetan Buddhism. Monks perform masked dances (Cham) symbolizing the triumph of good over evil.",
    "category": "Spiritual | Dance | Cultural",
    "region": "North India",
    "religion": "Buddhist",
    "type": "Traditional"
  },
  {
    "id": "33",
    "name": "Thrissur Pooram",
    "date": "2025-07-17",
    "description": "Held in Kerala, Thrissur Pooram is an extraordinary temple festival featuring a grand parade of caparisoned elephants, fireworks, and classical music. It is a visual and spiritual extravaganza attracting people from across the globe.",
    "category": "Cultural | Religious | Music",
    "region": "South India",
    "religion": "Hindu",
    "type": "Traditional"
  },
  {
    "id": "34",
    "name": "Hornbill Festival",
    "date": "2025-07-20",
    "description": "The Hornbill Festival is celebrated in Nagaland to revive, protect, and preserve the richness of the Naga heritage and traditions. Named after the Indian hornbill bird, it's a feast of music, dance, and traditional art.",
    "category": "Cultural | Music | Dance",
    "region": "North East India",
    "religion": "Tribal",
    "type": "Expo and Exhibitions"
  },
  {
    "id": "35",
    "name": "Ellora Ajanta Festival",
    "date": "2025-07-23",
    "description": "Hosted near the ancient Ellora Caves in Maharashtra, this festival showcases classical dance and music performances by renowned artists. It's a fusion of history, culture, and art.",
    "category": "Art & Culture | Music | Dance",
    "region": "West India",
    "religion": "Secular",
    "type": "Classical"
  },
  {
    "id": "36",
    "name": "Phoolon Ki Holi",
    "date": "2025-07-26",
    "description": "Phoolon Ki Holi is a vibrant festival celebrated in Vrindavan, Uttar Pradesh. Unlike the usual Holi with colors, this celebration involves showering flowers. It commemorates the playful divine love of Radha and Krishna. The atmosphere is filled with chants, bhajans, and floral bliss.",
    "category": "Cultural | Spiritual",
    "region": "North India",
    "religion": "Hindu",
    "type": "Traditional"
  },
  {
    "id": "37",
    "name": "Hemis Festival",
    "date": "2025-07-29",
    "description": "Hemis Festival is a two-day spiritual celebration at Hemis Monastery in Ladakh. It honors Guru Padmasambhava, the founder of Tibetan Buddhism. Monks perform masked dances (Cham) symbolizing the triumph of good over evil.",
    "category": "Spiritual | Dance | Cultural",
    "region": "North India",
    "religion": "Buddhist",
    "type": "Traditional"
  },
  {
    "id": "38",
    "name": "Thrissur Pooram",
    "date": "2025-08-01",
    "description": "Held in Kerala, Thrissur Pooram is an extraordinary temple festival featuring a grand parade of caparisoned elephants, fireworks, and classical music. It is a visual and spiritual extravaganza attracting people from across the globe.",
    "category": "Cultural | Religious | Music",
    "region": "South India",
    "religion": "Hindu",
    "type": "Traditional"
  },
  {
    "id": "39",
    "name": "Hornbill Festival",
    "date": "2025-08-04",
    "description": "The Hornbill Festival is celebrated in Nagaland to revive, protect, and preserve the richness of the Naga heritage and traditions. Named after the Indian hornbill bird, it's a feast of music, dance, and traditional art.",
    "category": "Cultural | Music | Dance",
    "region": "North East India",
    "religion": "Tribal",
    "type": "Expo and Exhibitions"
  },
  {
    "id": "40",
    "name": "Ellora Ajanta Festival",
    "date": "2025-08-07",
    "description": "Hosted near the ancient Ellora Caves in Maharashtra, this festival showcases classical dance and music performances by renowned artists. It's a fusion of history, culture, and art.",
    "category": "Art & Culture | Music | Dance",
    "region": "West India",
    "religion": "Secular",
    "type": "Classical"
  },
  {
    "id": "41",
    "name": "Phoolon Ki Holi",
    "date": "2025-08-10",
    "description": "Phoolon Ki Holi is a vibrant festival celebrated in Vrindavan, Uttar Pradesh. Unlike the usual Holi with colors, this celebration involves showering flowers. It commemorates the playful divine love of Radha and Krishna. The atmosphere is filled with chants, bhajans, and floral bliss.",
    "category": "Cultural | Spiritual",
    "region": "North India",
    "religion": "Hindu",
    "type": "Traditional"
  },
  {
    "id": "42",
    "name": "Hemis Festival",
    "date": "2025-08-13",
    "description": "Hemis Festival is a two-day spiritual celebration at Hemis Monastery in Ladakh. It honors Guru Padmasambhava, the founder of Tibetan Buddhism. Monks perform masked dances (Cham) symbolizing the triumph of good over evil.",
    "category": "Spiritual | Dance | Cultural",
    "region": "North India",
    "religion": "Buddhist",
    "type": "Traditional"
  },
  {
    "id": "43",
    "name": "Thrissur Pooram",
    "date": "2025-08-16",
    "description": "Held in Kerala, Thrissur Pooram is an extraordinary temple festival featuring a grand parade of caparisoned elephants, fireworks, and classical music. It is a visual and spiritual extravaganza attracting people from across the globe.",
    "category": "Cultural | Religious | Music",
    "region": "South India",
    "religion": "Hindu",
    "type": "Traditional"
  },
  {
    "id": "44",
    "name": "Hornbill Festival",
    "date": "2025-08-19",
    "description": "The Hornbill Festival is celebrated in Nagaland to revive, protect, and preserve the richness of the Naga heritage and traditions. Named after the Indian hornbill bird, it's a feast of music, dance, and traditional art.",
    "category": "Cultural | Music | Dance",
    "region": "North East India",
    "religion": "Tribal",
    "type": "Expo and Exhibitions"
  },
  {
    "id": "45",
    "name": "Ellora Ajanta Festival",
    "date": "2025-08-22",
    "description": "Hosted near the ancient Ellora Caves in Maharashtra, this festival showcases classical dance and music performances by renowned artists. It's a fusion of history, culture, and art.",
    "category": "Art & Culture | Music | Dance",
    "region": "West India",
    "religion": "Secular",
    "type": "Classical"
  },
  {
    "id": "46",
    "name": "Phoolon Ki Holi",
    "date": "2025-08-25",
    "description": "Phoolon Ki Holi is a vibrant festival celebrated in Vrindavan, Uttar Pradesh. Unlike the usual Holi with colors, this celebration involves showering flowers. It commemorates the playful divine love of Radha and Krishna. The atmosphere is filled with chants, bhajans, and floral bliss.",
    "category": "Cultural | Spiritual",
    "region": "North India",
    "religion": "Hindu",
    "type": "Traditional"
  },
  {
    "id": "47",
    "name": "Hemis Festival",
    "date": "2025-08-28",
    "description": "Hemis Festival is a two-day spiritual celebration at Hemis Monastery in Ladakh. It honors Guru Padmasambhava, the founder of Tibetan Buddhism. Monks perform masked dances (Cham) symbolizing the triumph of good over evil.",
    "category": "Spiritual | Dance | Cultural",
    "region": "North India",
    "religion": "Buddhist",
    "type": "Traditional"
  },
  {
    "id": "48",
    "name": "Thrissur Pooram",
    "date": "2025-08-31",
    "description": "Held in Kerala, Thrissur Pooram is an extraordinary temple festival featuring a grand parade of caparisoned elephants, fireworks, and classical music. It is a visual and spiritual extravaganza attracting people from across the globe.",
    "category": "Cultural | Religious | Music",
    "region": "South India",
    "religion": "Hindu",
    "type": "Traditional"
  },
  {
    "id": "49",
    "name": "Hornbill Festival",
    "date": "2025-09-03",
    "description": "The Hornbill Festival is celebrated in Nagaland to revive, protect, and preserve the richness of the Naga heritage and traditions. Named after the Indian hornbill bird, it's a feast of music, dance, and traditional art.",
    "category": "Cultural | Music | Dance",
    "region": "North East India",
    "religion": "Tribal",
    "type": "Expo and Exhibitions"
  },
  {
    "id": "50",
    "name": "Ellora Ajanta Festival",
    "date": "2025-09-06",
    "description": "Hosted near the ancient Ellora Caves in Maharashtra, this festival showcases classical dance and music performances by renowned artists. It's a fusion of history, culture, and art.",
    "category": "Art & Culture | Music | Dance",
    "region": "West India",
    "religion": "Secular",
    "type": "Classical"
  }
]
