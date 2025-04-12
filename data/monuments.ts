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
    imageUrl: "https://freepngimg.com/thumb/statue_of_liberty/1-2-statue-of-liberty-png-image.png",
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
    imageUrl: "https://strimeo.tv/wp-content/uploads/2020/01/golden-gate-bridge-at-sunrise-san-francisco-california.jpg",
    yearBuilt: "1937",
    visitingHours: "Open 24 hours",
    facts: [
      "The bridge is painted 'International Orange'",
      "It took four years to build the bridge",
      "The bridge is 1.7 miles long"
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
    imageUrl: "https://traveldigg.com/wp-content/uploads/2016/05/Lincoln-Memorial-Image-720x404.jpg",
    yearBuilt: "1922",
    visitingHours: "Open 24 hours",
    facts: [
      "The building is in the form of a Greek Doric temple",
      "The memorial has 36 columns representing the states in the Union at the time of Lincoln's death",
      "The statue of Lincoln inside is 19 feet tall"
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
    imageUrl: "https://www.pngall.com/wp-content/uploads/2016/06/Taj-Mahal-Transparent.png",
    yearBuilt: "1643",
    visitingHours: "Sunrise to Sunset (Closed on Fridays)",
    facts: [
      "It took approximately 22 years to complete the construction",
      "The Taj Mahal appears to change color depending on the time of day",
      "Over 20,000 workers were employed for its construction",
      "ताज महल भारत के उत्तर प्रदेश राज्य के आगरा शहर में स्थित है। यह सफेद संगमरमर से बना एक भव्य मकबरा है जिसे मुग़ल सम्राट शाहजहाँ ने अपनी पत्नी मुमताज़ महल की याद में बनवाया था।",
      "यह स्मारक यूनESCO विश्व धरोहर स्थल के रूप में सूचीबद्ध है और इसे विश्व के सात आश्चर्यों में से एक माना जाता है।",
      "ताज महल का निर्माण कार्य 1632 में शुरू हुआ और इसे पूरा होने में लगभग 22 साल लगे। इसकी वास्तुकला मुग़ल, फारसी, इस्लामिक और भारतीय शैलियों का अद्भुत संगम है।"
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Red_Fort_in_Delhi_03-2016_img3.jpg/1200px-Red_Fort_in_Delhi_03-2016_img3.jpg",
    yearBuilt: "1639",
    visitingHours: "9:30 AM - 4:30 PM (Closed on Mondays)",
    facts: [
      "The fort gets its name from its massive red sandstone walls",
      "It houses several museums",
      "The Prime Minister of India addresses the nation from here on Independence Day",
      "लाल किला भारत की राजधानी दिल्ली में स्थित एक ऐतिहासिक दुर्ग है, जिसे मुग़ल सम्राट शाहजहाँ ने 17वीं शताब्दी में बनवाया था।",
      "यह किला लाल बलुआ पत्थर से बना है और इसकी वास्तुकला में मुग़ल, फारसी और भारतीय शैली की झलक मिलती है।",
      "हर साल 15 अगस्त को भारत के प्रधानमंत्री यहीं से राष्ट्रीय ध्वज फहराते हैं और देश को संबोधित करते हैं।"
    ],
    coordinates: {
      lat: 28.6562,
      lng: 77.241,
    },
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Red+Fort+Delhi",
  },
  {
    id: "india-india-gate",
    name: "India Gate",
    description:
      "India Gate is a war memorial located in New Delhi, built in honor of the soldiers of the British Indian Army who died in the First World War. Designed by Sir Edwin Lutyens, it stands as a prominent symbol of sacrifice and valor.",
    country: "India",
    state: "Delhi",
    location: "New Delhi, Delhi",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/The_India_Gate%2C_New_Delhi_%285621259188%29.jpg/1200px-The_India_Gate%2C_New_Delhi_%285621259188%29.jpg",
    yearBuilt: "1931",
    visitingHours: "Open all day",
    facts: [
      "Names of over 13,000 soldiers are inscribed on the gate",
      "It was originally called the All India War Memorial",
      "The Amar Jawan Jyoti was added after the 1971 Indo-Pak war",
      "इंडिया गेट नई दिल्ली में स्थित एक युद्ध स्मारक है, जिसे प्रथम विश्व युद्ध और अफ़ग़ान युद्ध में शहीद हुए भारतीय सैनिकों की याद में बनवाया गया था।",
      "इसकी ऊँचाई लगभग 42 मीटर है और इसका डिज़ाइन सर एडविन लुटियंस ने तैयार किया था।",
      "इंडिया गेट के नीचे 'अमर जवान ज्योति' जलती है, जो देश के शहीदों के सम्मान का प्रतीक है।"
    ],
    coordinates: {
      lat: 28.6129,
      lng: 77.2295,
    },
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=India+Gate"
    
  },

  {
    id: "india-meenakshi-temple",
    name: "Meenakshi Temple",
    description:
      "Located in the heart of Madurai, the Meenakshi Temple is dedicated to Goddess Meenakshi and Lord Sundareswarar. Renowned for its stunning Dravidian architecture and colorful gopurams, it's a major pilgrimage and tourist site.",
    country: "India",
    state: "Tamil Nadu",
    location: "Madurai, Tamil Nadu",
    imageUrl: "https://i.pinimg.com/originals/db/a8/23/dba823ecfc97948d3fa66071cd309e19.png",
    yearBuilt: "12th Century (current structure mostly 16th century)",
    visitingHours: "5:00 AM to 12:30 PM and 4:00 PM to 9:30 PM",
    facts: [
      "The temple complex has 14 majestic towers (gopurams)",
      "One of the few temples where the goddess is the principal deity",
      "Attracts millions of pilgrims annually during the Meenakshi Tirukalyanam festival",
      "மீனாக்ஷி அம்மன் கோவில் தமிழ்நாட்டின் மதுரை நகரில் அமைந்துள்ளது, இது பாரம்பரிய ஹிந்து கோவில்களில் ஒன்றாகும்.",
      "இந்த கோவில் பார்வதி தேவியின் உருவமான மீனாக்ஷி தேவிக்கும், சிவபெருமானின் உருவமான சுந்தரேசுவரருக்கும் அர்ப்பணிக்கப்பட்டது.",
      "கோவிலின் கோபுரங்கள் (tower) வண்ணமயமாக சுருக்கமான சிற்பங்களால் அலங்கரிக்கப்பட்டுள்ளன, மற்றும் இது மதுரையின் முக்கிய பாரம்பரியச் சின்னமாகும்."
    ],
    coordinates: {
      lat: 9.9195,
      lng: 78.1194,
    },
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Meenakshi+Temple"
  },

  {
    id: "india-gol-gumbaz",
    name: "Gol Gumbaz",
    description:
      "Gol Gumbaz is the mausoleum of Mohammed Adil Shah, Sultan of Bijapur. It is famed for its massive dome, which is among the largest in the world and is unsupported by pillars.",
    country: "India",
    state: "Karnataka",
    location: "Bijapur, Karnataka",
    imageUrl: "https://www.globetrove.com/wp-content/uploads/2018/01/Gol-Gumbaz.jpg",
    yearBuilt: "1656",
    visitingHours: "6:00 AM to 6:00 PM",
    facts: [
      "The dome is the second-largest in the world after the Pantheon in Rome",
      "Whispering gallery inside allows sound to echo multiple times",
      "An architectural marvel with Indo-Islamic style",
      "ಗೋಲ ಗುಂಬಜ್ ಕರ್ನಾಟಕದ ವಿಜಯಪುರದಲ್ಲಿ (ಹಳೆಯ ಬೀಜಾಪುರ) ಇರುವ ಪ್ರಸಿದ್ಧ ಇಸ್ಲಾಮಿಕ್ ಸ್ಮಾರಕವಾಗಿದೆ.",
      "ಇದು ಮೊಹಮ್ಮದ್ ಆದಿಲ್ ಶಾಹಿಯರ ಸಮಾಧಿಯಾಗಿದೆ ಮತ್ತು ಅದರ ಗಂಬದ್ (ಗುಬ್ಬಚಿ ಗೋಪುರ) ಪ್ರಪಂಚದ ಅತಿದೊಡ್ಡ ಗುಂಬಜುಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ.",
      "ಗುಂಬಜಿನೊಳಗಿನ 'ವಿಸ್ಪರಿಂಗ್ ಗ್ಯಾಲರಿ' ಬಹಳ ಪ್ರಸಿದ್ಧವಾಗಿದ್ದು, ಒಂದು ದಿಕ್ಕಿನಲ್ಲಿ ಮೌನವಾಗಿ ಮಾತಾಡಿದರೆ ಇನ್ನೊಂದು ಕಡೆ ಸ್ಪಷ್ಟವಾಗಿ ಕೇಳುತ್ತದೆ."
    ],
    coordinates: {
      lat: 16.8302,
      lng: 75.7100,
    },
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Gol+Gumbaz"
  },
  {
    id: "india-rani-ki-vav",
    name: "Rani ki Vav (The Queen’s Stepwell)",
    description:
      "Rani ki Vav is an intricately constructed stepwell located in Patan, Gujarat. Built by Queen Udayamati in memory of her husband, it exemplifies Maru-Gurjara architectural style and is a UNESCO World Heritage Site.",
    country: "India",
    state: "Gujarat",
    location: "Patan, Gujarat",
    imageUrl: "https://gujaratdarshanguide.com/wp-content/uploads/2021/03/Rani-ki-vav-1.jpg",
    yearBuilt: "11th Century",
    visitingHours: "8:00 AM to 6:00 PM",
    facts: [
      "More than 500 major sculptures and over a thousand minor ones",
      "It was discovered in a preserved state after being flooded by the Saraswati river",
      "Design showcases the sanctity of water",
      "રાણી કી વાવ ગુજરાતના પાટણ શહેરમાં સ્થિત એક પ્રસિદ્ધ સ્ટેપવેલ છે, જેનો નિર્માણ સિદ્ધરાજ સોલંકીની યાદમાં તેની માતા રાણી ઉદયમતી દ્વારા કરાયું હતું.",
      "આ વાવમાં અદભુત શિલ્પકલા જોવા મળે છે, જેમાં દેવતાઓ, અવતારો અને ઐતિહાસિક પાત્રોની મૂર્તિઓ સુંદર રીતે ઉત્કીર્ણ છે.",
      "યુનેસ્કોએ રાણી કી વાવને વર્લ્ડ હેરિટેજ સાઇટ તરીકે માન્યતા આપી છે અને આ સ્થળ ગુજરાતની સમૃદ્ધ સંસ્કૃતિનું પ્રતિબિંબ છે."
    ],
    coordinates: {
      lat: 23.8591,
      lng: 72.1019,
    },
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Rani+ki+Vav"
  },

  {
    id: "india-sanchi-stupa",
    name: "Sanchi Stupa",
    description:
      "The Great Stupa at Sanchi is one of the oldest stone structures in India, originally commissioned by Emperor Ashoka in the 3rd century BCE. It is a UNESCO World Heritage Site and a major Buddhist monument.",
    country: "India",
    state: "Madhya Pradesh",
    location: "Sanchi, Madhya Pradesh",
    imageUrl: "https://www.mapsofindia.com/ci-moi-images/my-india/sanchi-stupa-1024x696.jpg",
    yearBuilt: "3rd Century BCE",
    visitingHours: "6:30 AM to 6:30 PM",
    facts: [
      "Ashoka built the original structure after converting to Buddhism",
      "The four gateways (toranas) are famous for their intricate carvings",
      "It is a central pilgrimage site for Buddhists",
      "सांची स्तूप मध्य प्रदेश के रायसेन ज़िले में स्थित एक प्राचीन बौद्ध स्मारक है, जो भोपाल से लगभग 46 किलोमीटर दूर है।",
      "इस स्तूप का निर्माण सम्राट अशोक ने तीसरी शताब्दी ईसा पूर्व में करवाया था, और यह भगवान बुद्ध के अवशेषों को समर्पित है।",
      "सांची स्तूप अपनी सुंदर वास्तुकला, नक्काशीदार तोरण द्वारों और बौद्ध कला के लिए विश्व प्रसिद्ध है, और यह एक यूनेस्को विश्व धरोहर स्थल भी है।"
    ],
    coordinates: {
      lat: 23.4793,
      lng: 77.7391,
    },
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Sanchi+Stupa"
  },
  {
    id: "india-jantar-mantar-jaipur",
    name: "Jantar Mantar (Jaipur)",
    description:
      "Jantar Mantar in Jaipur is an astronomical observatory built in the early 18th century by Maharaja Jai Singh II. It houses the world’s largest stone sundial and is a UNESCO World Heritage Site.",
    country: "India",
    state: "Rajasthan",
    location: "Jaipur, Rajasthan",
    imageUrl: "https://www.thehistoryhub.com/wp-content/uploads/2014/04/Jaipur-Jantar-Mantar-Samrat-Yantra.jpg",
    yearBuilt: "1734",
    visitingHours: "9:00 AM to 4:30 PM",
    facts: [
      "Contains 19 astronomical instruments",
      "Still used to predict eclipses and track stars",
      "Its sundial measures time to an accuracy of 2 seconds",
      "जंतर मंतर जयपुर, राजस्थान में स्थित एक ऐतिहासिक खगोलीय वेधशाला है, जिसे महाराजा सवाई जय सिंह द्वितीय ने 18वीं शताब्दी में बनवाया था।",
      "यह वेधशाला सूर्य, चंद्रमा और अन्य खगोलीय पिंडों की गति मापने के लिए बनाए गए विशाल यंत्रों का संग्रह है।",
      "जंतर मंतर को इसकी वैज्ञानिक और वास्तुकला संबंधी महत्ता के कारण यूनेस्को विश्व धरोहर स्थल घोषित किया गया है।"
    ],
    coordinates: {
      lat: 26.9246,
      lng: 75.8235,
    },
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Jantar+Mantar+Jaipur"
  },
  {
    id: "india-gwalior-fort",
    name: "Gwalior Fort",
    description:
      "Perched on a rocky hilltop, Gwalior Fort is one of the most majestic forts in India, known for its history, palaces, temples, and stunning views. It has been ruled by several dynasties over the centuries.",
    country: "India",
    state: "Madhya Pradesh",
    location: "Gwalior, Madhya Pradesh",
    imageUrl: "https://wiki.fibis.org/images/9/9c/Gwalior_Fort.jpg",
    yearBuilt: "6th Century (rebuilt later)",
    visitingHours: "8:00 AM to 5:30 PM",
    facts: [
      "Referred to as ‘the pearl among Indian fortresses’ by Babur",
      "Home to the 10th-century Saas-Bahu temples and Man Singh Palace",
      "Boasts some of the earliest examples of zero in inscriptions",
      "ग्वालियर किला मध्य प्रदेश के ग्वालियर शहर में एक पहाड़ी पर स्थित है और यह भारत के सबसे मजबूत किलों में से एक माना जाता है।",
      "इस किले का इतिहास लगभग 1,000 साल पुराना है और इसे विभिन्न राजवंशों—जैसे तोमर, मुग़ल, मराठा और सिंधिया—ने शासित किया है।",
      "किले के भीतर मान मंदिर महल, गुरुद्वारा दाता बंदी छोड़, और शिलालेखों से युक्त जैन मूर्तियाँ प्रमुख आकर्षण हैं।"
    ],
    coordinates: {
      lat: 26.2298,
      lng: 78.1734,
    },
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Gwalior+Fort"
  },
  {
    id: "india-umaid-bhawan-palace",
    name: "Umaid Bhawan Palace",
    description:
      "Umaid Bhawan Palace is one of the world’s largest private residences, built during a time of famine to provide employment. Part palace, part museum, and part luxury hotel, it symbolizes opulence and Rajputana architecture.",
    country: "India",
    state: "Rajasthan",
    location: "Jodhpur, Rajasthan",
    imageUrl: "https://www.tusktravel.com/blog/wp-content/uploads/2023/02/Umaid-Bhawan-Palace-in-Jodhpur-Rajasthan.jpg",
    yearBuilt: "1943",
    visitingHours: "10:00 AM to 4:30 PM (Museum timings)",
    facts: [
      "Built with golden-yellow sandstone",
      "Still serves as the residence of the Jodhpur royal family",
      "The palace has 347 rooms",
      "ग्वालियर किला मध्य प्रदेश के ग्वालियर शहर में एक पहाड़ी पर स्थित है और यह भारत के सबसे मजबूत किलों में से एक माना जाता है।",
      "इस किले का इतिहास लगभग 1,000 साल पुराना है और इसे विभिन्न राजवंशों—जैसे तोमर, मुग़ल, मराठा और सिंधिया—ने शासित किया है।",
      "किले के भीतर मान मंदिर महल, गुरुद्वारा दाता बंदी छोड़, और शिलालेखों से युक्त जैन मूर्तियाँ प्रमुख आकर्षण हैं।"
    ],
    coordinates: {
      lat: 26.2768,
      lng: 73.0479,
    },
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Umaid+Bhawan+Palace"
  },

  {
    id: "india-junagarh-fort",
    name: "Junagarh Fort",
    description:
      "Junagarh Fort is an impressive fort complex located in Bikaner, Rajasthan. Unlike many other forts in Rajasthan, it is not built on a hill, yet remains unconquered throughout history.",
    country: "India",
    state: "Rajasthan",
    location: "Bikaner, Rajasthan",
    imageUrl: "https://rajasthantouroperator.com/images/Junagarh-Fort.jpg",
    yearBuilt: "1594",
    visitingHours: "10:00 AM to 4:30 PM",
    facts: [
      "Built by Raja Rai Singh, a general in Akbar's army",
      "It houses temples, palaces, and pavilions",
      "Features a mix of Rajput, Mughal and Gujarati architecture",
      "जूनागढ़ किला राजस्थान के बीकानेर शहर में स्थित है और इसे राजा राय सिंह ने 16वीं शताब्दी में बनवाया था।",
      "यह किला अपने भव्य महलों, जटिल नक्काशी, और खूबसूरत आंगनों के लिए प्रसिद्ध है, जिनमें फूल महल, चंद्र महल और अनूप महल प्रमुख हैं।",
      "जूनागढ़ किला खास बात यह है कि यह राजस्थान के उन गिने-चुने किलों में से एक है जो पहाड़ी पर नहीं, बल्कि समतल ज़मीन पर बना है।"
    ],
    coordinates: {
      lat: 28.0229,
      lng: 73.3177,
    },
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Junagarh+Fort"
  },
  {
    id: "india-cellular-jail",
    name: "Cellular Jail (Kala Pani)",
    description:
      "The Cellular Jail in Port Blair was a colonial prison used by the British to exile political prisoners. It stands as a symbol of India’s struggle for independence.",
    country: "India",
    state: "Andaman and Nicobar Islands",
    location: "Port Blair, Andaman and Nicobar Islands",
    imageUrl: "https://c8.alamy.com/comp/H3JA3M/famous-cellular-jail-at-port-blair-andaman-and-nicobar-india-H3JA3M.jpg",
    yearBuilt: "1906",
    visitingHours: "9:00 AM to 5:00 PM",
    facts: [
      "Named for its solitary confinement cells (693 in total)",
      "Now a national memorial and museum",
      "Hosts a light and sound show recounting freedom fighters' stories",
      "काला पानी अंडमान और निकोबार द्वीप समूह के पोर्ट ब्लेयर में स्थित एक ऐतिहासिक जेल है, जिसे अंग्रेजों ने भारतीय स्वतंत्रता सेनानियों को कठोर सज़ा देने के लिए बनवाया था।",
      "इस जेल को 'सेलुलर जेल' कहा जाता है क्योंकि इसमें कैदियों को एकांत में रखने के लिए अलग-अलग सेल बनाए गए थे।",
      "वीर सावरकर सहित कई प्रसिद्ध स्वतंत्रता सेनानियों को यहाँ बंदी बनाकर रखा गया था, और आज यह स्थान एक राष्ट्रीय स्मारक के रूप में संरक्षित है।"
    ],
    coordinates: {
      lat: 11.6724,
      lng: 92.7386,
    },
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Cellular+Jail"
  },
  {
    id: "india-brihadeeswarar-temple",
    name: "Brihadeeswarar Temple (Gangaikonda Cholapuram)",
    description:
      "This temple, built by Rajendra Chola I, is a magnificent example of Dravidian architecture and part of the 'Great Living Chola Temples' UNESCO group.",
    country: "India",
    state: "Tamil Nadu",
    location: "Gangaikonda Cholapuram, Tamil Nadu",
    imageUrl: " https://commons.wikimedia.org/wiki/File:Brihadeeswarar_Temple.jpg",
    yearBuilt: "11th Century",
    visitingHours: "6:00 AM to 12:00 PM and 4:00 PM to 8:00 PM",
    facts: [
      "Built to commemorate the Chola conquest of the Ganges region",
      "Similar in design to the Brihadeeswarar Temple in Thanjavur",
      "Made from granite transported from miles away",
      "பெருவுடையார் கோவில் தமிழ்நாட்டின் தஞ்சாவூரில் அமைந்துள்ள ஒரு பிரமாண்டமான சிவன் கோவிலாகும், இதை சோழ அரசன் ராஜராஜ சோழன் 11ஆம் நூற்றாண்டில் கட்டினார்.",
      "இந்த கோவில் ஒரு யுனெஸ்கோ உலக பாரம்பரியச் சின்னமாகும் மற்றும் இது திராவிடக் கட்டிடக் கலையின் சிறந்த எடுத்துக்காட்டாகக் கருதப்படுகிறது.",
      "கோவிலின் விசேஷம் அதின் மிகப்பெரிய விஞ்ஞான ரீதியான கூரையும், 80 டன் எடையுள்ள கலசமும் ஆகும் – இவை எந்த现代 கருவிகளும் இன்றி கட்டப்பட்டது."
    ],
    coordinates: {
      lat: 11.2000,
      lng: 79.4500,
    },
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Gangaikonda+Cholapuram+Temple"
  },
  {
    id: "india-hampi",
    name: "Hampi",
    description:
      "Hampi is a UNESCO World Heritage Site and was once the capital of the Vijayanagara Empire. The site features a stunning collection of ruins, temples, and monolithic sculptures.",
    country: "India",
    state: "Karnataka",
    location: "Hampi, Karnataka",
    imageUrl: "https://s4.scoopwhoop.com/anj/hampi/d37513a7-1579-422e-888c-58e2fb94fcee.jpg",
    yearBuilt: "14th Century",
    visitingHours: "6:00 AM to 6:00 PM",
    facts: [
      "Known for the Virupaksha Temple, stone chariot, and Vittala Temple",
      "Mentioned in ancient texts as Pampa Kshetra",
      "A major trading center during its peak",
      "ಹಂಪೆ ಕರ್ನಾಟಕದ ಬಳ್ಳಾರಿ ಜಿಲ್ಲೆಯಲ್ಲಿರುವ ಐತಿಹಾಸಿಕ ನಗರಿಯಾಗಿದ್ದು, ಇದು ವಿಜಯನಗರ ಸಾಮ್ರಾಜ್ಯದ ರಾಜಧಾನಿಯಾಗಿತ್ತು.",
      "ಇಲ್ಲಿ ಅನೆಕ ದೇವಸ್ಥಾನಗಳು, ಬಂಡೆಗಳ ಮೇಲೆ ನಿರ್ಮಿತ ರಾಜಕೀಯ ಹಾಗೂ ಧಾರ್ಮಿಕ ಸ್ಮಾರಕಗಳು ಇವೆ, ವಿಶೇಷವಾಗಿ ವಿರೂಪಾಕ್ಷ ದೇವಾಲಯ ಮತ್ತು ವಿಟ್ಠಲ ದೇವಾಲಯ ಪ್ರಸಿದ್ಧವಾಗಿದೆ.",
      "ಹಂಪೆಯನ್ನು ಅದರ ಐತಿಹಾಸಿಕ ಹಾಗೂ ಸಾಂಸ್ಕೃತಿಕ ಮಹತ್ವಕ್ಕಾಗಿ ಯುನೆಸ್ಕೋ ವಿಶ್ವ ಧಾರೋಹರ ಸ್ಥಳವಾಗಿ ಘೋಷಿಸಲಾಗಿದೆ."
    ],
    coordinates: {
      lat: 15.3350,
      lng: 76.4600,
    },
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Hampi"
  },

  {
    id: "india-lingaraj-temple",
    name: "Lingaraj Temple",
    description:
      "Lingaraj Temple is one of the oldest and largest temples in Bhubaneswar, dedicated to Lord Shiva. It is a classic example of Kalinga architecture and an important pilgrimage site in Odisha.",
    country: "India",
    state: "Odisha",
    location: "Bhubaneswar, Odisha",
    imageUrl: "https://www.mapsofindia.com/ci-moi-images/my-india/lingraj-hindu-temple.jpg",
    yearBuilt: "11th Century",
    visitingHours: "6:00 AM to 12:30 PM and 3:30 PM to 9:00 PM",
    facts: [
      "Built in the Deula style of Kalinga architecture",
      "Stands 180 feet tall",
      "Only Hindus are allowed inside the temple",
      "लिंगराज मंदिर ओडिशा की राजधानी भुवनेश्वर में स्थित एक प्राचीन और भव्य हिंदू मंदिर है, जो भगवान शिव को समर्पित है।",
      "यह मंदिर कलिंग शैली की वास्तुकला का उत्कृष्ट उदाहरण है और इसका निर्माण 11वीं शताब्दी में सोमवंशी राजा ययाति प्रथम द्वारा कराया गया था।",
      "मंदिर परिसर में मुख्य गर्भगृह के अलावा नाटमंडप, भोगमंडप और यज्ञमंडप जैसे कई अन्य भाग हैं, जो इसे आध्यात्मिक और सांस्कृतिक दृष्टि से महत्वपूर्ण बनाते हैं।"
    ],
    coordinates: {
      lat: 20.2396,
      lng: 85.8415,
    },
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Lingaraj+Temple+Bhubaneswar"
  },
  {
    id: "india-mahabalipuram-monuments",
    name: "Mahabalipuram Monuments",
    description:
      "The Group of Monuments at Mahabalipuram includes rock-cut temples, cave sanctuaries, and structural shrines built by the Pallavas in the 7th and 8th centuries. It is a UNESCO World Heritage Site.",
    country: "India",
    state: "Tamil Nadu",
    location: "Mahabalipuram, Tamil Nadu",
    imageUrl: "https://luxevista.in/wp-content/uploads/2024/01/Mahabalipuram-Shore-Temple.png",
    yearBuilt: "7th–8th Century",
    visitingHours: "6:00 AM to 6:00 PM",
    facts: [
      "Home to the famous Shore Temple and Descent of the Ganges sculpture",
      "Built during the Pallava dynasty",
      "Monuments are carved out of granite rock",
      "மகாபலிபுரம் தமிழ்நாட்டின் காஞ்சிபுரம் மாவட்டத்தில் அமைந்துள்ள ஒரு பண்டைய பாறைச் சிற்பக் கலைநிலையமாகும், இது பழங்கால பல்லவ அரசர்களால் கட்டப்பட்டது.",
      "இங்கு அர்ஜுனன் தவம், கடற்கரைக் கோவில்கள் மற்றும் பஞ்ச ரதங்கள் போன்ற சிற்பக்கலைக்கு சிறந்த எடுத்துக்காட்டுகள் உள்ளன.",
      "மகாபலிபுரம் யுனெஸ்கோ உலக பாரம்பரியச் சின்னமாக அறிவிக்கப்பட்டுள்ளது, மேலும் இது சுற்றுலா பயணிகளுக்கு மிக முக்கியமான இடமாகும்."
    ],
    coordinates: {
      lat: 12.6208,
      lng: 80.1945,
    },
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Mahabalipuram+Monuments"
  },
  {
    id: "india-kumbhalgarh-fort",
    name: "Kumbhalgarh Fort",
    description:
      "Kumbhalgarh Fort is a Mewar fortress on the Aravalli Hills in Rajasthan. It has the second-longest continuous wall in the world and is a UNESCO World Heritage Site under the Hill Forts of Rajasthan.",
    country: "India",
    state: "Rajasthan",
    location: "Rajsamand District, Rajasthan",
    imageUrl: "https://www.postoast.com/wp-content/uploads/2021/09/Kumbhalgarh-Fort-History.jpg",
    yearBuilt: "15th Century",
    visitingHours: "9:00 AM to 6:00 PM",
    facts: [
      "The fort wall extends over 36 kilometers",
      "Birthplace of Maharana Pratap",
      "Has over 300 temples within its walls",
      "कुम्भलगढ़ किला राजस्थान के राजसमंद ज़िले में स्थित है, जिसे मेवाड़ के शासक महाराणा कुम्भा ने 15वीं शताब्दी में बनवाया था।",
      "इस किले की दीवार लगभग 36 किलोमीटर लंबी है, जो चीन की दीवार के बाद दुनिया की दूसरी सबसे लंबी दीवार मानी जाती है।",
      "कुम्भलगढ़ किला महाराणा प्रताप का जन्मस्थान भी है और यह अरावली की पहाड़ियों में स्थित होने के कारण एक दुर्गम और सुरक्षात्मक किला रहा है।"
    ],
    coordinates: {
      lat: 25.1473,
      lng: 73.5830,
    },
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Kumbhalgarh+Fort"
  },
  {
    id: "india-ranakpur-jain-temple",
    name: "Ranakpur Jain Temple",
    description:
      "The Ranakpur Jain Temple is dedicated to Tirthankara Adinatha and is known for its stunning marble architecture and 1,444 intricately carved pillars.",
    country: "India",
    state: "Rajasthan",
    location: "Ranakpur, Rajasthan",
    imageUrl: "https://indiashine.net/wp-content/uploads/2021/02/ing_19075_01950.jpg",
    yearBuilt: "15th Century",
    visitingHours: "7:00 AM to 7:00 PM",
    facts: [
      "Each of the 1,444 pillars is uniquely carved",
      "Built using light-colored marble",
      "The temple is set in a secluded valley in the Aravalli range",
      "रणकपुर जैन मंदिर राजस्थान के पाली ज़िले में अरावली की पहाड़ियों के बीच स्थित एक प्रसिद्ध तीर्थ स्थल है, जो भगवान आदिनाथ को समर्पित है।",
      "इस भव्य मंदिर का निर्माण 15वीं शताब्दी में हुआ था और इसे सफेद संगमरमर से बनाया गया है, जिसमें 1,400 से अधिक खूबसूरत तराशी गई स्तंभ हैं—हर एक स्तंभ की नक्काशी अलग है।",
      "रणकपुर मंदिर जैन वास्तुकला का अद्भुत उदाहरण है और इसकी शांति, सुंदरता और जटिल नक्काशियाँ दुनियाभर के पर्यटकों और श्रद्धालुओं को आकर्षित करती हैं।"
    ],
    coordinates: {
      lat: 25.1103,
      lng: 73.4760,
    },
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Ranakpur+Jain+Temple"
  },
  {
    id: "india-sher-shah-suri-tomb",
    name: "Tomb of Sher Shah Suri",
    description:
      "The tomb of Sher Shah Suri is an outstanding example of Indo-Islamic architecture, built in the center of an artificial lake in Sasaram, Bihar.",
    country: "India",
    state: "Bihar",
    location: "Sasaram, Bihar",
    imageUrl: "https://live.staticflickr.com/5757/21681029221_c02d8fb80d_b.jpg",
    yearBuilt: "1545",
    visitingHours: "9:00 AM to 5:00 PM",
    facts: [
      "Constructed in red sandstone with Indo-Afghan style",
      "Built by Sher Shah’s son, Salim Shah",
      "Located in the middle of a man-made lake",
      "शेरशाह सूरी का मकबरा बिहार के सासाराम शहर में स्थित है, जिसे अफगान शासक शेरशाह सूरी की याद में 16वीं शताब्दी में बनवाया गया था।",
      "यह मकबरा एक बड़े जलाशय के बीच एक छोटे से द्वीप पर स्थित है और इसे पठान वास्तुकला का उत्कृष्ट उदाहरण माना जाता है।",
      "मकबरे का गुंबद ऊँचाई और भव्यता में ताजमहल से पहले का सबसे बड़ा था, और इसका लाल पत्थर का निर्माण इसकी मजबूती और सुंदरता को दर्शाता है।"
    ],
    coordinates: {
      lat: 24.9522,
      lng: 84.0265,
    },
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Tomb+of+Sher+Shah+Suri"
  },


  {
  id: "india-purana-qila",
  name: "Purana Qila (Old Fort)",
  description:
    "Purana Qila, one of the oldest forts in Delhi, is believed to be built on the site of the ancient city of Indraprastha mentioned in the Mahabharata. It was rebuilt by Sher Shah Suri and Humayun.",
  country: "India",
  state: "Delhi",
  location: "Delhi, India",
  imageUrl: "https://www.trawell.in/admin/images/upload/07821254Delhi_Purana_Qila_Main.jpg",
  yearBuilt: "16th Century",
  visitingHours: "7:00 AM to 5:00 PM",
  facts: [
    "Contains the Qila-i-Kuhna Mosque inside",
    "A moat surrounds the fort, previously connected to the Yamuna River",
    "Excavations have revealed layers of history from various periods",
    "पुराना क़िला दिल्ली का एक ऐतिहासिक किला है, जिसका निर्माण सम्राट शेरशाह सूरी ने 16वीं शताब्दी में करवाया था।",
    "ऐसा माना जाता है कि यह स्थल महाभारत काल के इंद्रप्रस्थ नगर का हिस्सा था, जिससे इसका ऐतिहासिक महत्व और भी बढ़ जाता है।",
    "किले की मजबूत दीवारें, बुर्ज़, दरवाज़े और इसके अंदर स्थित किला-कुंआ, किला-मस्जिद और शेरमंडल जैसे ढाँचे इसकी भव्यता और स्थापत्य कला को दर्शाते हैं।"
  ],
  coordinates: {
    lat: 28.6095,
    lng: 77.2433,
  },
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Purana+Qila+Delhi"
},
{
  id: "india-bibi-ka-maqbara",
  name: "Bibi Ka Maqbara",
  description:
    "Often called the 'Mini Taj', Bibi Ka Maqbara was built by Aurangzeb's son Azam Shah in memory of his mother, Dilras Banu Begum, in Aurangabad, Maharashtra.",
  country: "India",
  state: "Maharashtra",
  location: "Aurangabad, Maharashtra",
  imageUrl: "https://image3.mouthshut.com/images/Restaurant/Photo/-81016_9323.jpg",
  yearBuilt: "1660",
  visitingHours: "8:00 AM to 8:00 PM",
  facts: [
    "Inspired by the Taj Mahal’s design",
    "Built using marble and basalt",
    "Surrounded by formal Mughal-style gardens",
    "बीबी का मकबरा महाराष्ट्रातील औरंगाबाद शहरात स्थित असून, याला 'दक्षिणेचा ताजमहल' असेही म्हटले जाते.",
    "हे मकबरे मुघल सम्राट औरंगजेबाच्या पत्नी दिलरस बानो बेगमसाठी त्यांच्या मुलाने, अज़म शहाने 17व्या शतकात बांधले होते.",
    "या वास्तूची रचना आणि संगमरवरी काम ताजमहलशी साधर्म्य दर्शवते, आणि ही एक प्रसिद्ध ऐतिहासिक व पर्यटनस्थळ आहे."


  ],
  coordinates: {
    lat: 19.9017,
    lng: 75.3203,
  },
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Bibi+Ka+Maqbara"
},
{
  id: "india-charar-e-sharif",
  name: "Charar-E-Sharif",
  description:
    "Charar-e-Sharif is a revered Muslim shrine in Kashmir, dedicated to Sheikh Noor-ud-din Noorani, a famous Sufi saint. It is a key spiritual center for both Muslims and Hindus.",
  country: "India",
  state: "Jammu and Kashmir",
  location: "Budgam District, Jammu and Kashmir",
  imageUrl: "https://cutthewood.com/wp-content/uploads/2019/10/Charar-e-Sharif-shrine.jpg",
  yearBuilt: "15th Century",
  visitingHours: "All day",
  facts: [
    "The shrine was rebuilt multiple times after being damaged",
    "A key pilgrimage spot in Kashmir",
    "Sufi saint Noorani is revered for promoting peace and tolerance",
    "चरार-ए-शरीफ़ जम्मू और कश्मीर के बडगाम ज़िले में स्थित एक पवित्र सूफी दरगाह है, जो कश्मीर के प्रसिद्ध सूफी संत शेख़ नूरुद्दीन नूरानी (आर.ए.) को समर्पित है।",
    "यह दरगाह कश्मीर की सूफी और आध्यात्मिक परंपराओं का केंद्र मानी जाती है, जहाँ हज़ारों श्रद्धालु दुआ और ज़ियारत के लिए आते हैं।",
    "चरार-ए-शरीफ़ की वास्तुकला पारंपरिक कश्मीरी लकड़ी की कारीगरी से बनी है, जो सादगी और भव्यता का सुंदर संगम प्रस्तुत करती है।"
  ],
  coordinates: {
    lat: 33.8534,
    lng: 74.7634,
  },
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Charar+e+Sharif"
},
{
  id: "india-chhota-imambara",
  name: "Chhota Imambara",
  description:
    "Chhota Imambara is a beautiful Islamic monument in Lucknow built by Muhammad Ali Shah as a congregation hall for Shia Muslims and his mausoleum.",
  country: "India",
  state: "Uttar Pradesh",
  location: "Lucknow, Uttar Pradesh",
  imageUrl: "https://4.bp.blogspot.com/-1YuvAGT4HwY/WE7UM4SDWII/AAAAAAAAppA/KN2b9gCFq1Av2nUrq_vel5FZ9XbI529ZgCLcB/s1600/Chota%2BImambara%2BLucknow%2B8.jpg",
  yearBuilt: "1838",
  visitingHours: "6:00 AM to 5:00 PM",
  facts: [
    "Also known as Imambara of Hussainabad",
    "Features chandeliers from Belgium and ornate calligraphy",
    "Houses the tombs of Muhammad Ali Shah and his family",
    
"छोटा इमामबाड़ा उत्तर प्रदेश की राजधानी लखनऊ में स्थित एक भव्य इमारत है, जिसे नवाब मोहम्मद अली शाह ने 1838 में बनवाया था।",
    "यह इमामबाड़ा शिया मुसलमानों के लिए एक पवित्र स्थल है, जहाँ मुहर्रम के दौरान विशेष आयोजन होते हैं और इसे रोशनी से भव्य रूप से सजाया जाता है।",
    "इसकी वास्तुकला इंडो-इस्लामिक और मुगल शैली का सुंदर मिश्रण है, और इसके अंदर की झाड़-फानूस और सजावट इसे ‘पैलेस ऑफ़ लाइट्स’ भी कहलवाती है।"
  ],
  coordinates: {
    lat: 26.8643,
    lng: 80.9192,
  },
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Chhota+Imambara+Lucknow"
},
{
  id: "india-ellora-caves",
  name: "Ellora Caves",
  description:
    "Ellora Caves, a UNESCO World Heritage Site, is a complex of 34 rock-cut monasteries and temples that represent Buddhism, Hinduism, and Jainism, carved between the 6th and 9th centuries.",
  country: "India",
  state: "Maharashtra",
  location: "Aurangabad, Maharashtra",
  imageUrl: "https://www.heritagedaily.com/wp-content/uploads/2020/05/Ellora2016_103-1-scaled.jpg",
  yearBuilt: "600–1000 CE",
  visitingHours: "6:00 AM to 6:00 PM (Closed on Tuesdays)",
  facts: [
    "The Kailasa temple (Cave 16) is a massive monolithic rock excavation",
    "Represents religious harmony in ancient India",
    "Carved over several centuries by different dynasties",
    "एलोरा लेणीं महाराष्ट्राच्या औरंगाबाद जिल्ह्यात स्थित असून, या लेणींमध्ये बौद्ध, हिंदू आणि जैन धर्माच्या 34 प्राचीन गुंफा आहेत.",
    "येथे स्थित कैलास मंदिर हे संपूर्ण एकाच दगडात कोरलेले जगातील सर्वात मोठे शिल्प आहे, ज्याचे स्थापत्य आणि कोरीवकाम अद्वितीय आहे.",
    "एलोरा लेणीं युनेस्कोच्या जागतिक वारसा यादीत समाविष्ट आहेत आणि भारताच्या धार्मिक सहिष्णुता व सांस्कृतिक वैविध्याचे प्रतीक मानल्या जातात."
  ],
  coordinates: {
    lat: 20.0268,
    lng: 75.1794,
  },
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Ellora+Caves"
},

{
  id: "india-fatehpur-sikri",
  name: "Fatehpur Sikri",
  description:
    "Fatehpur Sikri is a UNESCO World Heritage Site built by Emperor Akbar in the 16th century. It served as the capital of the Mughal Empire for about 10 years.",
  country: "India",
  state: "Uttar Pradesh",
  location: "Fatehpur Sikri, Uttar Pradesh",
  imageUrl: "https://www.adotrip.com/public/images/areas/master_images/5c3f12df60cea-Fatehpur_Sikri_Attractions.jpg",
  yearBuilt: "1571",
  visitingHours: "6:00 AM to 6:00 PM",
  facts: [
    "Buland Darwaza is the highest gateway in the world",
    "Abandoned due to water scarcity",
    "Blends Persian, Indian, and Islamic architectural styles",
    "फतेहपुर सीकरी उत्तर प्रदेश के आगरा ज़िले में स्थित एक ऐतिहासिक नगर है, जिसे मुगल सम्राट अकबर ने 16वीं शताब्दी में अपनी राजधानी के रूप में बसाया था।",
    "यह नगर अकबर की धार्मिक सहिष्णुता, वास्तुकला और प्रशासनिक दृष्टिकोण का प्रतीक है, जहाँ जामा मस्जिद, बुलंद दरवाज़ा और शेख सलीम चिश्ती की दरगाह जैसे प्रसिद्ध स्थल स्थित हैं।",
    "फतेहपुर सीकरी की इमारतें लाल बलुआ पत्थर से बनी हैं और यह स्थल युनेस्को विश्व धरोहर स्थल के रूप में भी मान्यता प्राप्त है।"
  ],
  coordinates: {
    lat: 27.0937,
    lng: 77.6600,
  },
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Fatehpur+Sikri"
},
{
  id: "india-hawa-mahal",
  name: "Hawa Mahal",
  description:
    "Hawa Mahal, or the 'Palace of Winds', is a five-storey pink sandstone palace in Jaipur built so royal women could observe street festivities while remaining unseen.",
  country: "India",
  state: "Rajasthan",
  location: "Jaipur, Rajasthan",
  imageUrl: "https://static.vecteezy.com/system/resources/previews/011/084/232/large_2x/full-picture-of-hawa-mahal-of-rajasthan-photo.jpg",
  yearBuilt: "1799",
  visitingHours: "9:00 AM to 4:30 PM",
  facts: [
    "Features 953 small windows (jharokhas)",
    "Constructed without a foundation",
    "Part of the City Palace complex",
    "हवा महल राजस्थान की राजधानी जयपुर में स्थित एक प्रसिद्ध ऐतिहासिक इमारत है, जिसे 1799 में महाराजा सवाई प्रताप सिंह ने बनवाया था।",
    "यह पाँच मंज़िला इमारत गुलाबी और लाल बलुआ पत्थरों से बनी है और इसमें 953 छोटी खिड़कियाँ (झरोखे) हैं, जिससे ठंडी हवा का संचार होता है—इसी कारण इसका नाम 'हवा महल' पड़ा।",
    "हवा महल का निर्माण शाही महिलाएँ परदे में रहते हुए सड़कों के जुलूस और दैनिक जीवन को देखने के लिए कर सकें, इस उद्देश्य से किया गया था।"
  ],
  coordinates: {
    lat: 26.9239,
    lng: 75.8267,
  },
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Hawa+Mahal+Jaipur"
},
{
  id: "india-gateway-of-india",
  name: "Gateway of India",
  description:
    "The Gateway of India is an iconic arch-monument built in the early 20th century in Mumbai. It commemorates the landing of King George V and Queen Mary in 1911.",
  country: "India",
  state: "Maharashtra",
  location: "Mumbai, Maharashtra",
  imageUrl: "https://www.indiachal.com/wp-content/uploads/2018/12/Historical_Gateway_Of_India.jpg",
  yearBuilt: "1924",
  visitingHours: "Open 24 hours",
  facts: [
    "Built in Indo-Saracenic architectural style",
    "Was the ceremonial entrance for Viceroys and Governors",
    "Last British troops exited India through this arch in 1948",
    "गेटवे ऑफ इंडिया हे मुंबईतील अरब सागराच्या किनाऱ्यावर वसलेले एक प्रसिद्ध ऐतिहासिक स्मारक आहे, जे 20व्या शतकाच्या सुरुवातीला बांधले गेले.",
    "हे स्मारक 1911 मध्ये भारतात आलेल्या इंग्लंडच्या राजा जॉर्ज पंचम आणि राणी मेरी यांच्या स्वागतासाठी बांधण्यात आले होते.",
    "गेटवे ऑफ इंडिया ही ब्रिटिश साम्राज्याची भारतात प्रवेशद्वारासारखी ओळख होती, आणि 1948 मध्ये शेवटचा ब्रिटिश सैन्यदल याच ठिकाणावरून निघून गेला होता."
  ],
  coordinates: {
    lat: 18.9219,
    lng: 72.8347,
  },
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Gateway+of+India"
},
{
  id: "india-khajuraho-temples",
  name: "Khajuraho Temples",
  description:
    "The Khajuraho Group of Monuments is a UNESCO World Heritage Site famous for its stunning erotic sculptures, intricate carvings, and Nagara-style architecture.",
  country: "India",
  state: "Madhya Pradesh",
  location: "Khajuraho, Madhya Pradesh",
  imageUrl: "https://www.holidify.com/images/cmsuploads/compressed/shutterstock_1032564361_20200219140243.jpg",
  yearBuilt: "950–1050 AD",
  visitingHours: "6:00 AM to 6:00 PM",
  facts: [
    "Originally 85 temples, only 25 survive today",
    "Dedicated to Hinduism and Jainism",
    "Famous for detailed carvings including sculptures of daily life",
    "खजुराहो के मंदिर मध्यप्रदेश के छतरपुर ज़िले में स्थित हैं, जिन्हें 10वीं से 12वीं शताब्दी के बीच चंदेल वंश के राजाओं ने बनवाया था।",
    "ये मंदिर अपनी अद्वितीय नागर शैली की वास्तुकला और बारीक कामुक मूर्तिकला (शृंगारिक शिल्प) के लिए विश्वप्रसिद्ध हैं।",
    "खजुराहो के मंदिरों को यूनेस्को की विश्व धरोहर सूची में शामिल किया गया है, और यह भारत के सांस्कृतिक वैभव का प्रतीक माने जाते हैं।"
  ],
  coordinates: {
    lat: 24.8520,
    lng: 79.9199,
  },
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Khajuraho+Temples"
},
{
  id: "india-sun-temple-konark",
  name: "Sun Temple, Konark",
  description:
    "The Sun Temple at Konark is a 13th-century temple dedicated to the Hindu sun god Surya. It is designed in the shape of a giant chariot with stone wheels and horses.",
  country: "India",
  state: "Odisha",
  location: "Konark, Odisha",
  imageUrl: "https://www.templedairy.in/wp-content/uploads/2016/02/konark-sun-temple.jpg",
  yearBuilt: "1250 AD",
  visitingHours: "6:00 AM to 8:00 PM",
  facts: [
    "A UNESCO World Heritage Site",
    "Features 24 intricately carved stone wheels",
    "Built by King Narasimhadeva I of the Eastern Ganga dynasty",
    "कोणार्क का सूर्य मंदिर ओडिशा राज्य के पुरी ज़िले में स्थित है, जिसे 13वीं शताब्दी में गंगा वंश के राजा नरसिंहदेव प्रथम ने बनवाया था।",
    "यह मंदिर सूर्य देव को समर्पित है और इसकी संरचना एक विशाल रथ की तरह है, जिसमें बारह जोड़े नक्काशीदार पहिए और सात घोड़े दर्शाए गए हैं।",
    "कोणार्क सूर्य मंदिर को यूनेस्को विश्व धरोहर स्थल के रूप में मान्यता प्राप्त है और यह भारत की अद्वितीय स्थापत्य कला और विज्ञान की समझ का प्रतीक है।"
  ],
  coordinates: {
    lat: 19.8876,
    lng: 86.0945,
  },
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Sun+Temple+Konark"
},

{
  id: "india-alai-darwaza",
  name: "Alai Darwaza",
  description:
    "The Alai Darwaza is a magnificent gateway built by Alauddin Khalji in 1311 AD. It is the main entrance to the Quwwat-ul-Islam Mosque inside the Qutub Complex in Delhi.",
  country: "India",
  state: "Delhi",
  location: "Mehrauli, Delhi",
  imageUrl: "https://c8.alamy.com/compes/tc68p2/alai-darwaza-construido-por-alauddin-khalji-qutb-minar-qutb-complejo-mehrauli-area-de-delhi-india-tc68p2.jpg",
  yearBuilt: "1311",
  visitingHours: "7:00 AM to 5:00 PM",
  facts: [
    "First building in India to use true Islamic architecture principles",
    "Built of red sandstone and white marble",
    "Features intricate carvings and latticed stone windows",
    "अलई दरवाज़ा दिल्ली के कुतुब मीनार परिसर में स्थित एक भव्य प्रवेश द्वार है, जिसे खिलजी वंश के सुल्तान अलाउद्दीन खिलजी ने 1311 ई. में बनवाया था।",
    "यह दरवाज़ा इंडो-इस्लामिक स्थापत्य शैली का पहला और बेहतरीन उदाहरण माना जाता है, जिसमें लाल बलुआ पत्थर और सफेद संगमरमर का सुंदर संयोजन है।",
    "अलई दरवाज़ा की मेहराबें, जालीदार खिड़कियाँ और कुरान की आयतों की नक्काशी इसे स्थापत्य कला की दृष्टि से अत्यंत महत्वपूर्ण बनाती हैं।"
  ],
  coordinates: {
    lat: 28.5246,
    lng: 77.1855,
  },
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Alai+Darwaza+Delhi"
},
{
  id: "india-alai-minar",
  name: "Alai Minar",
  description:
    "The Alai Minar was an ambitious project by Alauddin Khalji meant to be twice the height of Qutub Minar, but was left incomplete after his death.",
  country: "India",
  state: "Delhi",
  location: "Qutub Complex, Delhi",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/71/Alai_Minar_and_qutub_minar.jpg",
  yearBuilt: "Early 14th Century",
  visitingHours: "7:00 AM to 5:00 PM",
  facts: [
    "Stands at about 24 meters in height",
    "Only the first storey was completed",
    "Meant to be the grandest minaret of its time",
    "अलाई मीनार दिल्ली के कुतुब मीनार परिसर में स्थित एक अधूरी मीनार है, जिसका निर्माण सुल्तान अलाउद्दीन खिलजी ने शुरू करवाया था।",
    "अलाउद्दीन खिलजी की योजना थी कि वह कुतुब मीनार से दोगुनी ऊँचाई की मीनार बनवाए, लेकिन उनकी मृत्यु के बाद यह कार्य अधूरा रह गया।",
    "वर्तमान में अलाई मीनार केवल पहली मंज़िल तक बनी है, और यह लाल पत्थरों से निर्मित एक विशाल गोलाकार ढांचा है, जो इतिहास में अधूरे सपनों का प्रतीक मानी जाती है।"
  ],
  coordinates: {
    lat: 28.5246,
    lng: 77.1847,
  },
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Alai+Minar+Delhi"
},
{
  id: "india-basilica-of-bom-jesus",
  name: "Basilica of Bom Jesus",
  description:
    "Located in Goa, the Basilica of Bom Jesus is a UNESCO World Heritage Site and holds the mortal remains of St. Francis Xavier. It is one of the finest examples of baroque architecture in India.",
  country: "India",
  state: "Goa",
  location: "Old Goa, Goa",
  imageUrl: "https://goa-tourism.org.in/images/places-to-visit/headers/basilica-de-bom-jesus-goa-entry-fee-timings-holidays-reviews-header.jpg",
  yearBuilt: "1605",
  visitingHours: "9:00 AM to 6:30 PM",
  facts: [
    "One of the oldest churches in India",
    "Holds the remains of St. Francis Xavier, visible every 10 years",
    "Built with laterite stone and tiled roof",
    "‘Basilica of Bom Jesus’ हें गोव्याचेर ओल्ड गोवा हांवठेर स्थित एक प्राचीन कॅथलिक चर्च आसा, हांका 1605 वर्सा साकार केलेलां.",
    "ह्या चर्चां खातीर तेवो सगळ्यात फेमस आसा की तेन्ना सेंट फ्रान्सिस झेवियर हांचे पवित्र शरीर जतन करून ठेवलेलां आसा.",
    "हें चर्च बारोक स्थापत्यशैलीचें उत्कृष्ट उदाहरण आसा, आनी UNESCO वर्ल्ड हेरिटेज साईट म्हणून मान्यताप्राप्त आसा."
  ],
  coordinates: {
    lat: 15.5009,
    lng: 73.9121,
  },
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Basilica+of+Bom+Jesus+Goa"
},
{
  id: "india-charminar",
  name: "Charminar",
  description:
    "Charminar is a historic monument and mosque located in Hyderabad, built by Muhammad Quli Qutb Shah to commemorate the end of a deadly plague.",
  country: "India",
  state: "Telangana",
  location: "Hyderabad, Telangana",
  imageUrl: "https://cdn.pixabay.com/photo/2022/01/09/09/35/charminar-6925631_1280.jpg",
  yearBuilt: "1591",
  visitingHours: "9:30 AM to 5:30 PM",
  facts: [
    "Features four grand arches and four minarets",
    "Built at the intersection of historical trade routes",
    "Represents Indo-Islamic architecture with Persian influences",
    "చార్మినార్ హైదరాబాద్ నగరంలో ఉన్న ఒక ప్రసిద్ధ చారిత్రాత్మక స్మారకం, దీన్ని కుతుబ్ షాహీ వంశానికి చెందిన మహమ్మద్ కులీ కుతుబ్ షా 1591లో నిర్మించాడు.",
    "ఇది నాలుగు అద్భుతమైన మినారట్లతో నిర్మించబడి ఉండటం వల్ల 'చార్మినార్' అనే పేరు వచ్చింది — 'చార్' అంటే నాలుగు, 'మినార్' అంటే గోపురాలు.",
    "చార్మినార్ ఇస్లామిక్ శైలిలో నిర్మించబడి 있으며, ఇది హైదరాబాద్‌ సంస్కృతి, చరిత్ర మరియు వారసత్వానికి ప్రాతినిధ్యం వహించే ముఖ్య గుర్తుగా నిలిచింది."
  ],
  coordinates: {
    lat: 17.3616,
    lng: 78.4747,
  },
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Charminar+Hyderabad"
},
{
  id: "india-sripuram-golden-temple",
  name: "Sripuram Golden Temple",
  description:
    "The Sripuram Golden Temple, located in Vellore, Tamil Nadu, is a spiritual park known for its star-shaped path and a temple covered in pure gold leaf work. It is dedicated to the goddess Lakshmi (Sri Lakshmi Narayani).",
  country: "India",
  state: "Tamil Nadu",
  location: "Vellore, Tamil Nadu",
  imageUrl : "https://2.bp.blogspot.com/-9-bXzRF1z8s/V44OG6m-HOI/AAAAAAAAs_U/j1v3HPDVcVwxt87Vd0GgZjEvBGwomdIhQCLcB/s1600/Sripuram%2BLaxmi%2BNarayani%2BGolden%2BTemple%2BVellore%2BPicture.8.jpg",
  yearBuilt: "2007",
  visitingHours: "8:00 AM – 8:00 PM",
  facts: [
    "Constructed using over 1.5 tonnes of pure gold",
    "Star-shaped path symbolizes a spiritual journey",
    "Managed by the Sri Narayani Peedam Charitable Trust",
    "தமிழ்நாட்டில் உள்ள பிரபலமான சூரியன் கோவில் 'சூரியனார் கோவில்' என அழைக்கப்படுகிறது, இது தஞ்சாவூர் மாவட்டத்தில் உள்ள சூரியனார் கோவில் என்ற ஊரில் அமைந்துள்ளது.",
    "இந்த கோவில் சூரிய பகவானுக்கு அர்ப்பணிக்கப்பட்டது மற்றும் இங்கு சூரியனைத் தவிர மற்ற நவகிரஹ தெய்வங்களும் வணங்கப்படுகின்றனர்.",
    "சூரியனார் கோவில் தமிழ் பண்டிகை காலங்களில், குறிப்பாக ரதசப்தமி மற்றும் சூரியபிரதோஷ தினங்களில், பெரும் பக்தர்களால் பார்வையிடப்படுகிறது."
  ],
  coordinates: {
    lat: 12.8919,
    lng: 79.1444,
  },
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Sripuram+Golden+Temple+Vellore"
},

{
  id: "india-iron-pillar",
  name: "Iron Pillar",
  description:
    "The Iron Pillar of Delhi is a 7.2-meter tall structure famous for its rust-resistant composition. It stands in the Qutub Complex and dates back to the 4th century.",
  country: "India",
  state: "Delhi",
  location: "Mehrauli, Delhi",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Iron_Pillar_01.jpg/960px-Iron_Pillar_01.jpg",
  yearBuilt: "4th century",
  visitingHours: "7:00 AM to 5:00 PM",
  facts: [
    "Made of 98% wrought iron",
    "Shows no significant rust despite being over 1600 years old",
    "Believed to have been moved from Central India",
    "लौह स्तंभ दिल्ली के कुतुब मीनार परिसर में स्थित एक रहस्यमय और ऐतिहासिक धातु स्तंभ है, जिसे लगभग 1600 साल पहले गुप्त वंश के चंद्रगुप्त द्वितीय के काल में स्थापित किया गया था।",
    "इस स्तंभ की सबसे अनोखी बात यह है कि यह सदियों से खुले वातावरण में खड़ा होने के बावजूद जंग नहीं लगा, जो प्राचीन भारत की धातु विज्ञान पर अद्भुत पकड़ को दर्शाता है।",
    "स्तंभ पर संस्कृत में ब्राह्मी लिपि में लेख अंकित है, जिसमें राजा की वीरता और धार्मिकता का वर्णन किया गया है।"
  ],
  coordinates: {
    lat: 28.5244,
    lng: 77.1856,
  },
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Iron+Pillar+Delhi"
},
{
  id: "india-jamali-kamali-tomb",
  name: "Jamali Kamali Tomb",
  description:
    "The Jamali Kamali Tomb and Mosque is a 16th-century monument in Delhi associated with the Sufi saint Jamali and an unknown person named Kamali.",
  country: "India",
  state: "Delhi",
  location: "Mehrauli, Delhi",
  imageUrl: "https://c8.alamy.com/comp/2A75X8N/jamali-kamali-mosque-and-tomb-located-in-the-archaeological-village-complex-in-mehrauli-delhi-india-2A75X8N.jpg",
  yearBuilt: "1528",
  visitingHours: "7:00 AM to 5:00 PM",
  facts: [
    "Mysterious monument known for its legends and ghost stories",
    "Features Indo-Persian architecture",
    "Located in the Mehrauli Archaeological Park",
    "जमाली-कमाली मक़बरा दिल्ली के महरौली क्षेत्र में स्थित है, जो एक प्रसिद्ध सूफी संत 'जमाली' (शेख फज़लुल्ला) और उनके साथी 'कमाली' को समर्पित है।",
    "यह मक़बरा 16वीं शताब्दी में बनाया गया था और इसमें एक मस्जिद तथा एक कब्रगाह शामिल है, जिसे मुग़ल वास्तुकला की सुंदर शैली में सजाया गया है।",
    "जमाली-कमाली स्थल न केवल ऐतिहासिक दृष्टि से महत्वपूर्ण है, बल्कि इसे रहस्यमय और अलौकिक अनुभवों के लिए भी जाना जाता है।"
  ],
  coordinates: {
    lat: 28.5215,
    lng: 77.1858,
  },
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Jamali+Kamali+Delhi"
},
{
  id: "india-lotus-temple",
  name: "Lotus Temple",
  description:
    "The Lotus Temple in Delhi is a Baháʼí House of Worship known for its flower-like shape and open-to-all spiritual philosophy.",
  country: "India",
  state: "Delhi",
  location: "New Delhi, Delhi",
  imageUrl: "https://cdn.britannica.com/67/156667-050-62285333/Lotus-Temple-New-Delhi-India.jpg",
  yearBuilt: "1986",
  visitingHours: "9:00 AM to 5:00 PM (Closed on Mondays)",
  facts: [
    "Has won numerous architectural awards",
    "Inspired by the shape of a lotus flower",
    "Open to people of all religions",
    "लोटस टेम्पल भारत की राजधानी दिल्ली में स्थित एक प्रसिद्ध बहाई उपासना स्थल है, जिसे 1986 में जनता के लिए खोला गया था।",
    "यह मंदिर अपनी कमल के फूल जैसी अद्वितीय वास्तुकला के लिए जाना जाता है, जिसमें सफेद संगमरमर की 27 पंखुड़ियाँ हैं जो नौ दिशाओं में खुलती हैं।",
    "लोटस टेम्पल सभी धर्मों के लोगों के लिए खुला है, जहाँ कोई भी शांति और ध्यान के लिए आ सकता है—यह एकता और आध्यात्मिकता का प्रतीक है।"
  ],
  coordinates: {
    lat: 28.5535,
    lng: 77.2588,
  },
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Lotus+Temple+Delhi"
},
{
  id: "india-mysore-palace",
  name: "Mysore Palace",
  description:
    "The Mysore Palace is a grand royal residence in Karnataka that served as the seat of the Wadiyar dynasty. It is one of the most visited monuments in India.",
  country: "India",
  state: "Karnataka",
  location: "Mysuru, Karnataka",
  imageUrl: "https://www.thehistoryhub.com/wp-content/uploads/2014/04/Mysore-Palace.jpg",
  yearBuilt: "1912 (current structure)",
  visitingHours: "10:00 AM to 5:30 PM",
  facts: [
    "Illuminated by over 100,000 bulbs during Dussehra",
    "Designed by British architect Henry Irwin",
    "Blends Hindu, Muslim, Rajput, and Gothic styles",
    "ಮೈಸೂರು ಅರಮನೆ ಕರ್ನಾಟಕದ ಮೈಸೂರು ನಗರದಲ್ಲಿ ಇರುವ ಒಂದು ಐತಿಹಾಸಿಕ ಹಾಗೂ ರಾಜಕೀಯ ಪ್ರಾಮುಖ್ಯತೆಯಿರುವ ಭವ್ಯವಾದ ಅರಮನೆ ಆಗಿದೆ.",
    "ಈ ಅರಮನೆವು ವಡ್ಯಾರ್ ರಾಜವಂಶದವರು ನಿವಾಸವಾಗಿದ್ದು, ಅದರ ದೀಪಾಲಂಕಾರ, ಗಾಜುಜ್ಞಾನ, ಹಾಗೂ ದ್ರವಿಡ ಶೈಲಿಯ ವಾಸ್ತುಶಿಲ್ಪಕ್ಕೆ ಖ್ಯಾತಿ ಪಡೆದಿದೆ.",
    "ದಸರಾ ಹಬ್ಬದ ಸಮಯದಲ್ಲಿ ಮೈಸೂರು ಅರಮನೆ ಸಂಪೂರ್ಣವಾಗಿ ದೀಪಗಳಿಂದ ಅಲಂಕರಿಸಲಾಗುತ್ತದೆ, ಇದು ಸಾವಿರಾರು ಪ್ರವಾಸಿಗರನ್ನು ಆಕರ್ಷಿಸುವ ಪ್ರಮುಖ ಆಕರ್ಷಣೆಯಾಗಿದೆ."
  ],
  coordinates: {
    lat: 12.3052,
    lng: 76.6552,
  },
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Mysore+Palace"
},
{
  id: "india-qutub-minar",
  name: "Qutub Minar",
  description:
    "Qutub Minar is the tallest brick minaret in the world, located in Delhi. It is a UNESCO World Heritage Site and one of India’s most iconic monuments.",
  country: "India",
  state: "Delhi",
  location: "Mehrauli, Delhi",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Q_Minar.jpg/1200px-Q_Minar.jpg",
  yearBuilt: "1193",
  visitingHours: "7:00 AM to 5:00 PM",
  facts: [
    "Stands at 73 meters tall",
    "Built by Qutb-ud-din Aibak and later completed by Iltutmish",
    "Surrounded by several historically significant structures",
    "कुतुब मीनार दिल्ली के महरौली क्षेत्र में स्थित एक ऐतिहासिक मीनार है, जिसे 1193 में कुतुबुद्दीन ऐबक ने बनवाना शुरू किया और बाद में इल्तुतमिश ने पूरा किया।",
    "यह मीनार 73 मीटर ऊँची है और इसमें पांच मंज़िलें हैं, जो लाल बलुआ पत्थर और संगमरमर से बनी हुई हैं, तथा इस पर खूबसूरत इस्लामिक शिलालेख अंकित हैं।",
    "कुतुब मीनार युनेस्को की विश्व धरोहर स्थल के रूप में मान्यता प्राप्त है और यह भारत की मध्यकालीन इस्लामिक वास्तुकला का एक शानदार उदाहरण है।"
  ],
  coordinates: {
    lat: 28.5245,
    lng: 77.1855,
  },
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Qutub+Minar+Delhi"
},

{
  id: "india-tanjavur-temple",
  name: "Brihadeeswarar Temple (Tanjavur)",
  description:
    "Also known as the Big Temple, this Chola-era marvel is one of the greatest glories of South Indian architecture. It is a UNESCO World Heritage Site located in Tanjavur.",
  country: "India",
  state: "Tamil Nadu",
  location: "Tanjavur, Tamil Nadu",
  imageUrl: "https://t3.ftcdn.net/jpg/04/83/99/42/360_F_483994277_swklfyWmGq7cT6PzspdrQOWbFIrxYVFV.jpg",
  yearBuilt: "1010 AD",
  visitingHours: "6:00 AM to 12:30 PM, 4:00 PM to 8:30 PM",
  facts: [
    "Built by Raja Raja Chola I",
    "Features the world’s tallest temple tower (Vimana)",
    "Constructed using granite without binding materials",
    "பெருவுடையார் கோவில் தமிழ்நாட்டின் தஞ்சாவூரில் உள்ள ஒரு பிரபலமான சிவன் கோவிலாகும், இதை சோழ அரசர் இராஜராஜ சோழன் 11ஆம் நூற்றாண்டில் கட்டினார்.",
    "இந்த கோவில் 'ராஜராஜேஸ்வரம்' என்றும் அழைக்கப்படுகிறது மற்றும் இது தமிழ் சோழ معمாரியக்கலையின் சிறந்த எடுத்துக்காட்டாக கருதப்படுகிறது.",
    "இந்த கோவிலில் உள்ள விமானம் (கோபுரம் மேல் பகுதி) உலகின் உயரமானதாகும், மேலும் கோயிலின் முழு கட்டிடமும் கிரானைட் கற்களால் கட்டப்பட்டுள்ளது."
  ],
  coordinates: {
    lat: 10.7828,
    lng: 79.1318,
  },
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Brihadeeswarar+Temple+Tanjavur"
},
{
  id: "india-victoria-memorial",
  name: "Victoria Memorial",
  description:
    "The Victoria Memorial is a majestic marble building in Kolkata, built in memory of Queen Victoria. It now serves as a museum and tourist destination.",
  country: "India",
  state: "West Bengal",
  location: "Kolkata, West Bengal",
  imageUrl: " https://commons.wikimedia.org/wiki/File:Victoria_Memorial_Kolkata.jpg",
  yearBuilt: "1921",
  visitingHours: "10:00 AM to 5:00 PM (Closed on Mondays)",
  facts: [
    "Made entirely of Makrana marble",
    "Blends British and Mughal architectural styles",
    "Surrounded by lush gardens and fountains",
    "ভিক্টোরিয়া মেমোরিয়াল কলকাতার একটি ঐতিহাসিক সৌধ, যা ব্রিটিশ রানি ভিক্টোরিয়ার স্মৃতিতে 1906 থেকে 1921 সালের মধ্যে নির্মিত হয়।",
    "এই সৌধটি সাদা মার্বেল দিয়ে তৈরি এবং এর স্থাপত্যে মুঘল ও ইউরোপীয় রীতির সংমিশ্রণ দেখা যায়।",
    "ভিক্টোরিয়া মেমোরিয়ালে একটি জাদুঘরও রয়েছে, যেখানে ব্রিটিশ আমলের বিভিন্ন চিত্র, নথি ও ঐতিহাসিক নিদর্শন সংরক্ষিত আছে।"
  ],
  coordinates: {
    lat: 22.5448,
    lng: 88.3426,
  },
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Victoria+Memorial+Kolkata"
},
{
  id: "india-ajanta-caves",
  name: "Ajanta Caves",
  description:
    "The Ajanta Caves are rock-cut Buddhist cave monuments famous for their exquisite murals and sculptures. They are a UNESCO World Heritage Site.",
  country: "India",
  state: "Maharashtra",
  location: "Aurangabad, Maharashtra",
  imageUrl: " https://www.whizzed.net/wp-content/uploads/2020/07/Ajanta-Caves-scaled.jpg",
  yearBuilt: "2nd century BCE to 6th century CE",
  visitingHours: "9:00 AM to 5:30 PM (Closed on Mondays)",
  facts: [
    "Consists of 30 rock-cut caves",
    "Contains paintings that narrate the Jataka tales",
    "Rediscovered in 1819 by a British officer",
    "‘अजिंठा लेणी’ महाराष्ट्रातील औरंगाबाद जिल्ह्यात वेरूळपासून काही अंतरावर असलेल्या एका डोंगर उतारावर वसलेली बौद्धकालीन लेण्यांची मालिका आहे.",
    "या लेण्या ख्रिस्तपूर्व 2ऱ्या शतकापासून इ.स. 6व्या शतकापर्यंत तयार करण्यात आल्या असून, त्या मुख्यतः बौद्ध विहार आणि चैत्यगृह आहेत.",
  "अजिंठा लेणींतील भित्तीचित्रे आणि शिल्पकाम ही प्राचीन भारतीय कला, संस्कृती आणि धार्मिक परंपरेचं अद्वितीय उदाहरण मानली जातात."
  ],
  coordinates: {
    lat: 20.5527,
    lng: 75.7033,
  },
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Ajanta+Caves+Maharashtra"
},


]  
