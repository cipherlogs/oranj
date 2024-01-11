import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import WifiIcon from "@mui/icons-material/Wifi";
import BluetoothIcon from "@mui/icons-material/Bluetooth";
import LoginIcon from "@mui/icons-material/Login";
import HelpIcon from "@mui/icons-material/Help";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import GavelIcon from "@mui/icons-material/Gavel";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const settings = [
  {
    isThemeMode: true,
    type: "switch",
    text: "Light Mode",
    altText: "Dark Mode",
    MainIcon: LightModeIcon,
    AltIcon: DarkModeIcon,
  },
  {
    type: "switch",
    text: "Wi-Fi",
    MainIcon: WifiIcon,
  },
  {
    type: "switch",
    text: "Bluetooth",
    MainIcon: BluetoothIcon,
  },
];

const termsPolicies = [
  {text: "Terms of Service"},
  {text: "Cookie Policy"},
  {text: "Refund Policy"},
  {text: "Shipping Policy"},
  {text: "Cancellation Policy"},
  {text: "Return Policy"},
];

const moreCategories = [
  {text: "Oranje iOS"},
  {text: "Oranje Android"},
  {text: "Best Communities"},
  {text: "Blog"},
  {text: "FAQs"},
  {text: "About Us"},
  {text: "Events"},
  {text: "News"},
  {text: "Testimonials"},
];

export const userProfileItems = [
  {type: "section", text: "Settings", data: settings},
  {type: "divider"},
  {text: "Help Center", MainIcon: HelpIcon},
  {text: "Careers", MainIcon: AssuredWorkloadIcon},
  {text: "Press", MainIcon: NewspaperIcon},
  {
    type: "nested",
    text: "More",
    MainIcon: ReadMoreIcon,
    data: moreCategories,
  },
  {
    type: "nested",
    text: "Terms & Policies",
    MainIcon: GavelIcon,
    data: termsPolicies,
  },
  {text: "Advertise with on Oranje", MainIcon: AdsClickIcon},
  {type: "divider"},
  {text: "Log In / Sign Up", MainIcon: LoginIcon},
];

// Icons for topicsData
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SportsFootballIcon from "@mui/icons-material/SportsFootball";
import BusinessIcon from "@mui/icons-material/Business";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import TvIcon from "@mui/icons-material/Tv";
import PersonIcon from "@mui/icons-material/Person";
import PetsIcon from "@mui/icons-material/Pets";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import MovieIcon from "@mui/icons-material/Movie";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import FlightIcon from "@mui/icons-material/Flight";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import SchoolIcon from "@mui/icons-material/School";
import ScienceIcon from "@mui/icons-material/Science";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";

const gamingSubMenu = [
  {text: "Fortnite"},
  {text: "League of Legends"},
  {text: "Among Us"},
];

const sportsSubMenu = [
  {text: "Football"},
  {text: "Basketball"},
  {text: "Tennis"},
];

const businessSubMenu = [
  {text: "Entrepreneurship"},
  {text: "Investing"},
  {text: "Startups"},
];

const cryptoSubMenu = [
  {text: "Bitcoin"},
  {text: "Ethereum"},
  {text: "Altcoins"},
];

const televisionSubMenu = [
  {text: "Drama"},
  {text: "Comedy"},
  {text: "Documentaries"},
];

const celebritySubMenu = [
  {text: "Hollywood"},
  {text: "Music Stars"},
  {text: "Influencers"},
];

const animalsPetsSubMenu = [
  {text: "Cats"},
  {text: "Dogs"},
  {text: "Exotic Pets"},
];

const musicSubMenu = [{text: "Pop"}, {text: "Rock"}, {text: "Hip Hop"}];

const moviesSubMenu = [{text: "Action"}, {text: "Drama"}, {text: "Comedy"}];

const fitnessSubMenu = [
  {text: "Cardio"},
  {text: "Strength Training"},
  {text: "Yoga"},
];

const natureSubMenu = [
  {text: "Flowers"},
  {text: "Landscapes"},
  {text: "Wildlife"},
];

const foodSubMenu = [{text: "Italian"}, {text: "Mexican"}, {text: "Sushi"}];

const travelSubMenu = [
  {text: "Beaches"},
  {text: "Mountains"},
  {text: "Cities"},
];

const healthSubMenu = [
  {text: "Nutrition"},
  {text: "Mental Health"},
  {text: "Fitness Tips"},
];

const educationSubMenu = [
  {text: "Mathematics"},
  {text: "History"},
  {text: "Literature"},
];

const scienceSubMenu = [
  {text: "Physics"},
  {text: "Biology"},
  {text: "Chemistry"},
];

const techSubMenu = [
  {text: "Programming"},
  {text: "Gadgets"},
  {text: "Software Development"},
];

const topicsData = [
  {
    type: "nested",
    text: "Gaming",
    data: gamingSubMenu,
    MainIcon: SportsEsportsIcon,
  },
  {
    type: "nested",
    text: "Sports",
    data: sportsSubMenu,
    MainIcon: SportsFootballIcon,
  },
  {
    type: "nested",
    text: "Business",
    data: businessSubMenu,
    MainIcon: BusinessIcon,
  },
  {
    type: "nested",
    text: "Crypto",
    data: cryptoSubMenu,
    MainIcon: MonetizationOnIcon,
  },
  {
    type: "nested",
    text: "Television",
    data: televisionSubMenu,
    MainIcon: TvIcon,
  },
  {
    type: "nested",
    text: "Celebrity",
    data: celebritySubMenu,
    MainIcon: PersonIcon,
  },
  {
    type: "nested",
    text: "Animals & Pets",
    data: animalsPetsSubMenu,
    MainIcon: PetsIcon,
  },
  {
    type: "nested",
    text: "Music",
    data: musicSubMenu,
    MainIcon: MusicNoteIcon,
  },
  {
    type: "nested",
    text: "Movies",
    data: moviesSubMenu,
    MainIcon: MovieIcon,
  },
  {
    type: "nested",
    text: "Fitness",
    data: fitnessSubMenu,
    MainIcon: FitnessCenterIcon,
  },
  {
    type: "nested",
    text: "Nature",
    data: natureSubMenu,
    MainIcon: EmojiNatureIcon,
  },
  {
    type: "nested",
    text: "Food",
    data: foodSubMenu,
    MainIcon: RestaurantIcon,
  },
  {
    type: "nested",
    text: "Travel",
    data: travelSubMenu,
    MainIcon: FlightIcon,
  },
  {
    type: "nested",
    text: "Health",
    data: healthSubMenu,
    MainIcon: LocalHospitalIcon,
  },
  {
    type: "nested",
    text: "Education",
    data: educationSubMenu,
    MainIcon: SchoolIcon,
  },
  {
    type: "nested",
    text: "Science",
    data: scienceSubMenu,
    MainIcon: ScienceIcon,
  },
  {
    type: "nested",
    text: "Tech",
    data: techSubMenu,
    MainIcon: EmojiObjectsIcon,
  },
];

// Icons for Resources
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import WebIcon from "@mui/icons-material/Web";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const programmingResourcesSubMenu = [
  {text: "MDN Web Docs"},
  {text: "Stack Overflow"},
  {text: "Codecademy"},
];

const webDesignResourcesSubMenu = [
  {text: "Awwwards"},
  {text: "Smashing Magazine"},
  {text: "CSS-Tricks"},
];

const financeResourcesSubMenu = [
  {text: "Investopedia"},
  {text: "The Motley Fool"},
  {text: "Bloomberg"},
];

const resourcesData = [
  {
    type: "nested",
    text: "Programming",
    data: programmingResourcesSubMenu,
    MainIcon: LibraryBooksIcon,
  },
  {
    type: "nested",
    text: "Web Design",
    data: webDesignResourcesSubMenu,
    MainIcon: WebIcon,
  },
  {
    type: "nested",
    text: "Finance",
    data: financeResourcesSubMenu,
    MainIcon: AttachMoneyIcon,
  },
];

const popularPostsData = [
  {text: "English / Global"},
  {text: "Deutsch"},
  {text: "Espagnol"},
  {text: "Francais"},
  {text: "Italiano"},
  {text: "Portuges"},
];

export const sideListItems = [
  {text: "Home", MainIcon: HomeIcon},
  {text: "Trends", MainIcon: TrendingUpIcon},
  {text: "Popular", MainIcon: WhatshotIcon},
  {type: "divider"},
  {
    isNestedList: true,
    type: "nested",
    text: "Topics",
    data: topicsData,
    isOpen: true,
  },
  {type: "divider"},
  {
    isNestedList: true,
    type: "nested",
    text: "Resources",
    data: resourcesData,
  },
  {
    isNestedList: true,
    type: "nested",
    text: "Popular posts",
    data: popularPostsData,
  },
];

export const trendingVideos = [
  {
    title: "What People Are Saying on the Third Anniversary of Jan?",
    url: "https://media2.giphy.com/media/vo8U7E8udj3cYDqLcg/giphy.webp",
    avatar: {
      userName: "HayaoFanPage",
      url: "https://source.unsplash.com/random?gold?10",
    },
  },
  {
    title: "30 kids got free tickets for their first NFL game",
    url: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExODl5NGl6MGpwOGx5ZWI2NXZheWtyN3IyeG1hMW52MHAzaXgyOGs2eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/txC8ApcJe5GEM0h5wL/giphy.gif",
    avatar: {
      userName: "FrostyPenguin",
      url: "https://source.unsplash.com/random?penguin?10",
    },
  },
  {
    title: "Study Links Airplane Toilets to Viral Transmission",
    url: "https://media2.giphy.com/media/kcm1OXhUFxucxQntyI/giphy.gif",
    avatar: {
      userName: "SunnySparrow",
      url: "https://source.unsplash.com/random?beach?3",
    },
  },
  {
    title: "FashionX Announces Neon Model Extravaganza!",
    url: "https://media0.giphy.com/media/8Vrq2Aq20Io5sTdLrh/giphy.gif",
    avatar: {
      userName: "WiseOwl",
      url: "https://source.unsplash.com/random?owl?52",
    },
  },
  {
    title:
      "Accidentally Starts Kitchen Inferno, Jury Still Deciding: Genius or Gaffe?",
    url: "https://media2.giphy.com/media/l2SpUHGccTQ4cogbm/giphy.gif?cid=ecf05e47jrh7fjuzqy2v2f5s82px0wx8o3dcamcw4hkjci0q&ep=v1_gifs_related&rid=giphy.gif&ct=g",
    avatar: {
      userName: "CuriousCat",
      url: "https://source.unsplash.com/random?cat?82",
    },
  },
  {
    title: "I Invented the Viral Challenge That Almost Killed Me!",
    url: "https://media1.giphy.com/media/8ua3WlT8PtJYgBSBsU/giphy.gif",
    avatar: {
      userName: "MightyLion",
      url: "https://source.unsplash.com/random?lion?60",
    },
  },
  {
    title:
      "Cat Rescues Toddler From Inferno, Internet Erupts in Fur-ocious Applause",
    url: "https://media1.giphy.com/media/QTm9OcYZkynmCZMBXt/giphy.gif",
    avatar: {
      userName: "FriendlyDolphin",
      url: "https://source.unsplash.com/random?ocean?3",
    },
  },
  {
    title: "The Most Intense Competition of the Year",
    url: "https://media3.giphy.com/media/dIx1V97YYvVeDajwnn/giphy.webp",
    avatar: {
      userName: "NewsTV",
      url: "https://source.unsplash.com/random?sports?10",
    },
  },
];

import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import PublicIcon from "@mui/icons-material/Public";

export const sortItems = {
  text: "Hot",
  MainIcon: LocalFireDepartmentIcon,
  data: [
    {text: "Hot"},
    {text: "Best"},
    {text: "New"},
    {text: "Top"},
    {text: "Rising"},
  ],
};

export const posts = [
  {
    community: "TechTalk",
    avatar: "https://source.unsplash.com/random?technology?274",
    date: "1 day ago",
    postTitle: "The future of AI and machine learning",
    imgUrl: "",
    postText:
      "Artificial intelligence and machine learning are rapidly evolving fields that are changing the way we live and work. What do you think the future holds for AI and machine learning?",
    likes: "8.7K",
    commentsCount: 312,
  },
  {
    community: "Foodies",
    avatar: "https://source.unsplash.com/random?food?293",
    date: "3 days ago",
    postTitle: "The best pizza toppings of all time",
    imgUrl: "",
    postText:
      "Pizza is one of the most popular foods in the world, and for good reason. What are your favorite pizza toppings of all time?",
    likes: "6.2K",
    commentsCount: 178,
  },
  {
    community: "TravelBugs",
    avatar: "https://source.unsplash.com/random?travel?247",
    date: "1 week ago",
    postTitle: "The most beautiful places in the world",
    imgUrl: "https://source.unsplash.com/random?trave?l19",
    postText: "",
    likes: "9.8K",
    commentsCount: 234,
  },
  {
    community: "GamingCommunity",
    avatar: "https://source.unsplash.com/random?gaming?269",
    date: "2 weeks ago",
    postTitle: "The best gaming laptops of 2024",
    imgUrl: "https://source.unsplash.com/random?laptop?41",
    postText: "",
    likes: "7.5K",
    commentsCount: 143,
  },
  {
    community: "FitnessFreaks",
    avatar: "https://source.unsplash.com/random?fitness?287",
    date: "3 weeks ago",
    postTitle: "The ultimate guide to losing weight",
    imgUrl: "",
    postText:
      "Losing weight can be a challenging process, but it's not impossible. What are your best tips for losing weight and keeping it off?",
    likes: "5.6K",
    commentsCount: 98,
  },
  {
    community: "PetLovers",
    avatar: "https://source.unsplash.com/random?pet?251",
    date: "1 month ago",
    postTitle: "The cutest pets on the internet",
    imgUrl: "https://source.unsplash.com/random?pet?35",
    postText: "",
    likes: "4.3K",
    commentsCount: 87,
  },
  {
    community: "Fashionistas",
    avatar: "https://source.unsplash.com/random?fashion?295",
    date: "2 months ago",
    postTitle: "The top fashion trends of 2024",
    imgUrl: "https://source.unsplash.com/random?fashion?75",
    postText: "",
    likes: "10.1K",
    commentsCount: 178,
  },
  {
    community: "MovieLovers",
    avatar: "https://source.unsplash.com/random?movie?29",
    date: "3 months ago",
    postTitle: "The best movies of all time",
    imgUrl: "",
    postText:
      "Movies are a great way to escape reality and immerse yourself in a different world. What are your favorite movies of all time?",
    likes: "7.8K",
    commentsCount: 256,
  },
  {
    community: "MysticMermaid",
    avatar: "https://source.unsplash.com/random?ocean?256",
    date: "4 months ago",
    postTitle: "The mysteries of the ocean",
    imgUrl: "https://source.unsplash.com/random?ocean?77",
    postText: "",
    likes: "9.4K",
    commentsCount: 143,
  },
  {
    community: "TechTalk",
    avatar: "https://source.unsplash.com/random?technology?176",
    date: "2 days ago",
    postTitle: "What's the best programming language to learn in 2024?",
    imgUrl: "",
    postText:
      "As we enter a new year, it's time to start thinking about which programming language to learn next. With so many options available, it can be overwhelming to choose just one. What do you think is the best programming language to learn in 2024 and why?",
    likes: "12.3K",
    commentsCount: 256,
  },
  {
    community: "Foodies",
    avatar: "https://source.unsplash.com/random?food?134",
    date: "1 week ago",
    postTitle: "The ultimate guide to making the perfect pizza at home",
    imgUrl: "https://source.unsplash.com/random?pizza?93",
    postText: "",
    likes: "7.8K",
    commentsCount: 98,
  },
  {
    community: "TravelBugs",
    avatar: "https://source.unsplash.com/random?travel?162",
    date: "2 weeks ago",
    postTitle: "What's your favorite travel destination and why?",
    imgUrl: "",
    postText:
      "We all have that one travel destination that holds a special place in our hearts. Whether it's the food, the culture, or the people, there's something about that place that keeps us coming back for more. What's your favorite travel destination and why?",
    likes: "5.6K",
    commentsCount: 178,
  },
  {
    community: "GamingCommunity",
    avatar: "https://source.unsplash.com/random?gaming?138",
    date: "3 weeks ago",
    postTitle: "What's the best game you've played in 2023?",
    imgUrl: "",
    postText:
      "2023 was a great year for gaming, with so many amazing titles released. What's the best game you've played in 2023 and why?",
    likes: "8.9K",
    commentsCount: 312,
  },
  {
    community: "FitnessFreaks",
    avatar: "https://source.unsplash.com/random?fitness?167",
    date: "1 month ago",
    postTitle: "The ultimate guide to building muscle mass",
    imgUrl: "https://source.unsplash.com/random?muscle?91",
    postText: "",
    likes: "6.2K",
    commentsCount: 124,
  },
  {
    community: "PetLovers",
    avatar: "https://source.unsplash.com/random?pet?168",
    date: "1 month ago",
    postTitle: "What's the funniest thing your pet has ever done?",
    imgUrl: "",
    postText:
      "Pets are a constant source of entertainment, and they never fail to make us laugh. What's the funniest thing your pet has ever done?6",
    likes: "4.3K",
    commentsCount: 87,
  },
  {
    community: "Fashionistas",
    avatar: "https://source.unsplash.com/random?fashion?166",
    date: "2 months ago",
    postTitle: "The top fashion trends of 2024",
    imgUrl: "https://source.unsplash.com/random?fashion?96",
    postText: "",
    likes: "10.1K",
    commentsCount: 178,
  },
  {
    community: "TechWizards",
    avatar: "https://source.unsplash.com/random?tech?173",
    date: "2 hr. ago",
    postTitle:
      "🚀 Breaking: Revolutionary Quantum Computing Breakthrough Unveiled!",
    imgUrl: "https://source.unsplash.com/random?quantum?281",
    postText: "",
    likes: "12.8K",
    commentsCount: 256,
  },
  {
    community: "FoodieFiesta",
    avatar: "https://source.unsplash.com/random?food?171",
    date: "5 hr. ago",
    postTitle:
      "What's the secret ingredient for the perfect chocolate cake? 🍫🍰",
    imgUrl: "",
    postText:
      "Discover the hidden gem that elevates your chocolate cake to a whole new level. Click to unveil the magic!",
    likes: "7.3K",
    commentsCount: 98,
  },
  {
    community: "AdventureSeekers",
    avatar: "https://source.unsplash.com/random?adventure?164",
    date: "3 hr. ago",
    postTitle:
      "Unbelievable: Lost City Discovered in the Heart of the Amazon Rainforest!",
    imgUrl: "https://source.unsplash.com/random?amazon?268",
    postText: "",
    likes: "10.6K",
    commentsCount: 187,
  },
  {
    community: "SpaceExplorers",
    avatar: "https://source.unsplash.com/random?space?161",
    date: "4 hr. ago",
    postTitle:
      "🌌 Mind-Blowing: New Exoplanet with Potential Signs of Extraterrestrial Life!",
    imgUrl: "https://source.unsplash.com/random?exoplanet?281",
    postText: "",
    likes: "9.1K",
    commentsCount: 142,
  },
  {
    community: "FitnessFanatics",
    avatar: "https://source.unsplash.com/random?fitness?112",
    date: "6 hr. ago",
    postTitle:
      "Transform Your Body in 30 Days: The Ultimate Fitness Challenge 💪",
    imgUrl: "",
    postText:
      "Embark on a journey to a healthier you! Click to reveal the secrets of this transformative fitness challenge.",
    likes: "8.5K",
    commentsCount: 115,
  },
  {
    community: "PetParadise",
    avatar: "https://source.unsplash.com/random?pets?115",
    date: "1 hr. ago",
    postTitle:
      "🐾 Cutest Pets of the Day: Share a Photo of Your Furry Friend!",
    imgUrl: "https://source.unsplash.com/random?cutepets?290",
    postText: "",
    likes: "11.2K",
    commentsCount: 203,
  },
  {
    community: "GamingGurus",
    avatar: "https://source.unsplash.com/random?gaming?141",
    date: "3 hr. ago",
    postTitle: "Epic Showdown: Best Gaming Moments of the Year Revealed!",
    imgUrl: "",
    postText:
      "Relive the excitement and intensity of the most epic gaming moments. Click to watch the highlights!",
    likes: "9.8K",
    commentsCount: 168,
  },
  {
    community: "TravelEnthusiasts",
    avatar: "https://source.unsplash.com/random?travel?170",
    date: "2 hr. ago",
    postTitle:
      "Discover Hidden Gems: Off the Beaten Path Travel Destinations 🌍",
    imgUrl: "https://source.unsplash.com/random?hiddenGems?285",
    postText: "",
    likes: "10.4K",
    commentsCount: 177,
  },
  {
    community: "Fashionistas",
    avatar: "https://source.unsplash.com/random?fashion?184",
    date: "4 hr. ago",
    postTitle: "Runway Ready: Trending Fashion Styles for the Season!",
    imgUrl: "",
    postText:
      "Stay ahead in the fashion game with the latest runway-inspired styles. Click to elevate your wardrobe!",
    likes: "8.9K",
    commentsCount: 122,
  },
  {
    community: "HealthHeroes",
    avatar: "https://source.unsplash.com/random?health?182",
    date: "5 hr. ago",
    postTitle: "Superfoods Unleashed: Boost Your Immunity Naturally! 🌿",
    imgUrl: "https://source.unsplash.com/random?superfoods?264",
    postText: "",
    likes: "9.6K",
    commentsCount: 154,
  },
  {
    community: "BookwormsClub",
    avatar: "https://source.unsplash.com/random?books?116",
    date: "6 hr. ago",
    postTitle: "Book Lovers Rejoice: Must-Read Novels of the Year Revealed!",
    imgUrl: "",
    postText:
      "Dive into the literary world with these captivating novels. Click to explore the best reads of the year!",
    likes: "7.7K",
    commentsCount: 135,
  },
  {
    community: "DIYCrafters",
    avatar: "https://source.unsplash.com/random?diy?144",
    date: "1 hr. ago",
    postTitle: "Crafting Magic: DIY Home Decor Ideas That Will Amaze You!",
    imgUrl: "https://source.unsplash.com/random?crafts?236",
    postText: "",
    likes: "8.2K",
    commentsCount: 111,
  },
  {
    community: "MusicMasters",
    avatar: "https://source.unsplash.com/random?music?160",
    date: "3 hr. ago",
    postTitle: "Melody Unleashed: Hottest Music Releases of the Month!",
    imgUrl: "",
    postText:
      "Immerse yourself in the latest tunes that are taking the music world by storm. Click to listen now!",
    likes: "10.1K",
    commentsCount: 162,
  },
  {
    community: "FitnessFanatics",
    avatar: "https://source.unsplash.com/random?fitness?297",
    date: "2 hr. ago",
    postTitle:
      "Transform Your Body in 30 Days: The Ultimate Fitness Challenge 💪",
    imgUrl: "",
    postText:
      "Embark on a journey to a healthier you! Click to reveal the secrets of this transformative fitness challenge.",
    likes: "8.5K",
    commentsCount: 115,
  },

  {
    community: "PhotographyPassion",
    avatar: "https://source.unsplash.com/random?photography?131",
    date: "4 hr. ago",
    postTitle:
      "Capturing Beauty: Tips for Perfect Photography Composition 📸",
    imgUrl: "https://source.unsplash.com/random?composition?241",
    postText: "",
    likes: "11.5K",
    commentsCount: 198,
  },
  {
    community: "ScienceExplorers",
    avatar: "https://source.unsplash.com/random?science?182",
    date: "5 hr. ago",
    postTitle:
      "Mind-Bending: Latest Scientific Discoveries That Will Amaze You!",
    imgUrl: "",
    postText:
      "Explore the frontiers of science with these groundbreaking discoveries. Click to expand your scientific knowledge!",
    likes: "9.2K",
    commentsCount: 143,
  },
  {
    community: "TechInnovators",
    avatar: "https://source.unsplash.com/random?tech?265",
    date: "3 hr. ago",
    postTitle: "Future Tech: Gadgets That Will Change the Way You Live!",
    imgUrl: "",
    postText:
      "Step into the future with these revolutionary tech gadgets. Click to witness the next era of innovation!",
    likes: "10.9K",
    commentsCount: 177,
  },
  {
    community: "MovieMania",
    avatar: "https://source.unsplash.com/random?movies?182",
    date: "6 hr. ago",
    postTitle: "Cinematic Marvels: Must-Watch Movies of the Decade!",
    imgUrl: "https://source.unsplash.com/random?cinema?282",
    postText: "",
    likes: "8.7K",
    commentsCount: 120,
  },
  {
    community: "FoodieFiesta",
    avatar: "https://source.unsplash.com/random?food?287",
    date: "2 hr. ago",
    postTitle: "Irresistible: Street Food Delights You Can't Miss!",
    imgUrl: "",
    postText:
      "Savor the flavors of street food from around the world. Click to embark on a culinary adventure!",
    likes: "10.3K",
    commentsCount: 156,
  },
  {
    community: "HomeDecorHaven",
    avatar: "https://source.unsplash.com/random?homedecor?17",
    date: "1 hr. ago",
    postTitle: "Elevate Your Space: Trendy Home Decor Ideas for 2024!",
    imgUrl: "https://source.unsplash.com/random?trendyhomedecor?276",
    postText: "",
    likes: "8.9K",
    commentsCount: 128,
  },
  {
    community: "NatureLovers",
    avatar: "https://source.unsplash.com/random?nature?137",
    date: "4 hr. ago",
    postTitle:
      "Breathtaking Landscapes: Explore the Beauty of Mother Nature!",
    imgUrl: "",
    postText:
      "Immerse yourself in the wonders of nature with these breathtaking landscapes. Click to reconnect with the Earth!",
    likes: "9.8K",
    commentsCount: 165,
  },
  {
    community: "TechWonders",
    avatar: "https://source.unsplash.com/random?tech?338",
    date: "3 hr. ago",
    postTitle:
      "Revolutionizing Robotics: AI-Powered Robots That Mimic Human Movements!",
    imgUrl: "https://source.unsplash.com/random?robotics?231",
    postText: "",
    likes: "11.2K",
    commentsCount: 188,
  },
  {
    community: "Fashionistas",
    avatar: "https://source.unsplash.com/random?fashion?217",
    date: "5 hr. ago",
    postTitle: "Fashion Extravaganza: Top Trends from Paris Fashion Week!",
    imgUrl: "",
    postText:
      "Dive into the world of high fashion with the latest trends from Paris Fashion Week. Click to stay chic!",
    likes: "7.5K",
    commentsCount: 132,
  },
  {
    community: "AdventureSeekers",
    avatar: "https://source.unsplash.com/random?adventure?258",
    date: "6 hr. ago",
    postTitle:
      "Journey to the Unknown: Extreme Adventure Expeditions You Won't Believe!",
    imgUrl: "https://source.unsplash.com/random?extremeadventure?287",
    postText: "",
    likes: "10.5K",
    commentsCount: 176,
  },

  {
    community: "MusicMasters",
    avatar: "https://source.unsplash.com/random?music?239",
    date: "2 hr. ago",
    postTitle:
      "Unveiling the Unheard: Indie Artists Making Waves in the Music Scene!",
    imgUrl: "",
    postText:
      "Explore the world of indie music and discover hidden gems that are reshaping the music scene. Click to support emerging talents!",
    likes: "8.6K",
    commentsCount: 124,
  },
  {
    community: "ScienceExplorers",
    avatar: "https://source.unsplash.com/random?science?276",
    date: "1 hr. ago",
    postTitle:
      "Space Oddities: Supernovas and Black Holes in a Cosmic Dance!",
    imgUrl: "https://source.unsplash.com/random?spaceoddities?241",
    postText: "",
    likes: "9.4K",
    commentsCount: 159,
  },
  {
    community: "TechInnovators",
    avatar: "https://source.unsplash.com/random?tech?445",
    date: "3 hr. ago",
    postTitle:
      "AI Marvels: How Artificial Intelligence is Reshaping Everyday Life!",
    imgUrl: "",
    postText:
      "Dive into the transformative impact of AI on various aspects of our daily lives. Click to explore the future!",
    likes: "10.2K",
    commentsCount: 142,
  },
  {
    community: "MovieMania",
    avatar: "https://source.unsplash.com/random?movies?228",
    date: "5 hr. ago",
    postTitle: "Hidden Gems: Must-Watch Movies That Flew Under the Radar!",
    imgUrl: "",
    postText:
      "Discover cinematic treasures that might have been overlooked. Click to explore a curated list of hidden gems!",
    likes: "8.9K",
    commentsCount: 138,
  },
  {
    community: "HealthHeroes",
    avatar: "https://source.unsplash.com/random?health?270",
    date: "4 hr. ago",
    postTitle: "Wellness Wonders: Natural Remedies for a Healthier You!",
    imgUrl: "https://source.unsplash.com/random?wellness?231",
    postText: "",
    likes: "9.7K",
    commentsCount: 166,
  },
  {
    community: "HomeDecorHaven",
    avatar: "https://source.unsplash.com/random?homedecor?29",
    date: "6 hr. ago",
    postTitle:
      "DIY Delights: Easy Home Decor Projects to Transform Your Space!",
    imgUrl: "",
    postText:
      "Spruce up your living space with these simple and creative DIY home decor projects. Click for inspiration!",
    likes: "7.8K",
    commentsCount: 119,
  },
  {
    community: "NatureLovers",
    avatar: "https://source.unsplash.com/random?nature?294",
    date: "2 hr. ago",
    postTitle:
      "Wildlife Wonders: Rare Animals Captured in Stunning Photographs!",
    imgUrl: "https://source.unsplash.com/random?wildlife?224",
    postText: "",
    likes: "10.8K",
    commentsCount: 154,
  },
  {
    community: "TechWonders",
    avatar: "https://source.unsplash.com/random?tech?584",
    date: "1 hr. ago",
    postTitle:
      "Futuristic Vehicles: Electric and Autonomous Cars Redefining Transportation!",
    imgUrl: "https://source.unsplash.com/random?futuristicvehicles?226",
    postText: "",
    likes: "11.3K",
    commentsCount: 198,
  },
  {
    community: "Fashionistas",
    avatar: "https://source.unsplash.com/random?fashion?358",
    date: "3 hr. ago",
    postTitle: "Fashion Icons: Legendary Designers Who Shaped the Industry!",
    imgUrl: "",
    postText:
      "Celebrate the visionaries who revolutionized the fashion world. Click to explore the legacy of iconic designers!",
    likes: "8.4K",
    commentsCount: 133,
  },
  {
    community: "AdventureSeekers",
    avatar: "https://source.unsplash.com/random?adventure?383",
    date: "5 hr. ago",
    postTitle:
      "Extreme Expeditions: Conquer the World's Toughest Challenges!",
    imgUrl: "https://source.unsplash.com/random?challenge?243",
    postText: "",
    likes: "10.1K",
    commentsCount: 176,
  },
];

export const communities = [
  {
    name: "Tech Enthusiasts",
    url: "https://source.unsplash.com/random/48x48?Tech?89",
  },
  {
    name: "Healthy Living",
    url: "https://source.unsplash.com/random/48x48?Healthy?91",
  },
  {
    name: "Cryptocurrency Wizards",
    url: "https://source.unsplash.com/random/48x48?Cryptocurrency?39",
  },
  {
    name: "Photography Masters",
    url: "https://source.unsplash.com/random/48x48?Photography?11",
  },
  {
    name: "Space Explorers",
    url: "https://source.unsplash.com/random/48x48?Space?51",
  },
  {
    name: "DIY Crafters",
    url: "https://source.unsplash.com/random/48x48?DIY?2",
  },
  {
    name: "Gaming Gurus",
    url: "https://source.unsplash.com/random/48x48?Gaming?74",
  },
  {
    name: "Nature Lovers",
    url: "https://source.unsplash.com/random/48x48?Nature?84",
  },
  {
    name: "Bookworms Club",
    url: "https://source.unsplash.com/random/48x48?Bookworms?97",
  },
  {
    name: "Artistic Minds",
    url: "https://source.unsplash.com/random/48x48?Artistic?96",
  },
  {
    name: "Foodie Haven",
    url: "https://source.unsplash.com/random/48x48?Foodie?61",
  },
  {
    name: "Fitness Fanatics",
    url: "https://source.unsplash.com/random/48x48?Fitness?34",
  },
  {
    name: "Programming Prodigies",
    url: "https://source.unsplash.com/random/48x48?Programming?5",
  },
  {
    name: "Travel Bug Community",
    url: "https://source.unsplash.com/random/48x48?Travel%20Bug?88",
  },
  {
    name: "Film Buffs Society",
    url: "https://source.unsplash.com/random/48x48?Film%20Buffs?35",
  },
  {
    name: "Pet Lovers Network",
    url: "https://source.unsplash.com/random/48x48?Pet%20Lovers?0",
  },
  {
    name: "Environmental Advocates",
    url: "https://source.unsplash.com/random/48x48?Environmental?73",
  },
  {
    name: "Fashionistas Hub",
    url: "https://source.unsplash.com/random/48x48?Fashionistas?3",
  },
  {
    name: "Anime Enclave",
    url: "https://source.unsplash.com/random/48x48?Anime?45",
  },
  {
    name: "Science Geeks Club",
    url: "https://source.unsplash.com/random/48x48?Science%20Geeks?40",
  },
  {
    name: "Motorsport Mania",
    url: "https://source.unsplash.com/random/48x48?Motorsport?79",
  },
  {
    name: "Craft Beer Connoisseurs",
    url: "https://source.unsplash.com/random/48x48?Craft%20Beer?16",
  },
  {
    name: "History Buffs Brigade",
    url: "https://source.unsplash.com/random/48x48?History%20Buffs?92",
  },
  {
    name: "Language Learners Lounge",
    url: "https://source.unsplash.com/random/48x48?Language%20Learners?53",
  },
  {
    name: "Home Decor Harmony",
    url: "https://source.unsplash.com/random/48x48?Home%20Decor?6",
  },
  {
    name: "Tech Startups Collective",
    url: "https://source.unsplash.com/random/48x48?Tech%20Startups?97",
  },
  {
    name: "Yoga Practitioners Union",
    url: "https://source.unsplash.com/random/48x48?Yoga%20Practitioners?67",
  },
  {
    name: "Board Game Buffs",
    url: "https://source.unsplash.com/random/48x48?Board%20Game?68",
  },
  {
    name: "Science Fiction Scholars",
    url: "https://source.unsplash.com/random/48x48?Science%20Fiction?72",
  },
];
