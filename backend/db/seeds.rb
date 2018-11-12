Location.create(
    name: "Orlando",
    description: "Home of the Magic Kingdom! And old people!"
)

Location.create(
    name: "Cleveland",
    description: "Why would you ever come here?"
)

Location.create(
    name: "London",
    description: "Tea! Crumpets! THE QUEEN!"
)

Location.create(
    name: "Tokyo",
    description: "If you're into some weird shit, this is your place!"
)

Hotel.create(
    name: "Magic Hotel",
    pool: true,
    meals: "Bread crust and gruel",
    rating: 2,
    address: "123 Magic St, Orlando, FL 12345"
)

Hotel.create(
    name: "LeBron Hotel",
    pool: false,
    meals: "Breakfast, Lunch, and Dinner",
    rating: 5,
    address: "123 Ohio St, Cleveland, OH 23456"
)

Hotel.create(
    name: "Royal Hotel",
    pool: true,
    meals: "Breakfast",
    rating: 4,
    address: "123 Imperialism St, London, UK SE1 7PB"
)

Hotel.create(
    name: "Waifu Hotel",
    pool: false,
    meals: "Breakfast and Lunch",
    rating: 3,
    address: "123 Bodypillow St, Tokyo, 160-0022"
)

Restaurant.create(
    name: "Mickey's Grill",
    foodTypes: "American",
    address: "321 Magic St, Orlando, FL 12345",
    hours: "9am - 11pm",
    popularFoods: "Hamburger"
)

Restaurant.create(
    name: "Boring Cafe",
    foodTypes: "Canadian-Bolivian Fusion",
    address: "321 Ohio St, Cleveland, OH 23456",
    hours: "9am - 11pm",
    popularFoods: "Ceviche Poutine"
)

Restaurant.create(
    name: "Ye Olde Her Majesty's God Save The Queen Pub",
    foodTypes: "Unamerican",
    address: "123 Imperialism St, London, UK SE1 7PB",
    hours: "9am - 11pm",
    popularFoods: "Fish and Chips"
)

Restaurant.create(
    name: "日本語の文章",
    foodTypes: "Japanese",
    address: "321 Bodypillow St, Tokyo, 160-0022",
    hours: "9am - 11pm",
    popularFoods: "Sushi"
)

Event.create(
    name: "2018 Epcot International Food & Wine Festival",
    description: "A Spectacular Celebration of Global Cuisines, Music & More"
)

Event.create(
    name: "Toddler Storytime",
    description: "Join us for rhymes, songs, fingerplays and stories. For caregivers and their children ages 19-35 months."
)

Event.create(
    name: "EFG London Jazz Festival",
    description: "Fix your ears on the festival’s usual mixture of jazz masters flexing their chops, cutting-edge young bands making a stir, international legends and a wealth of fresh new music from emerging British stars. Follow the music wherever it takes you – a late night hang is recommended – and wake up with the buzz of last night’s fun in your head."
)

Event.create(
    name: "Niku Fes Tachikawa",
    description: "Niku is the Japanese word for “meat”—and a lot of it is what you can expect at this festival. Meat dishes from Japan and abroad will be served up in every form imaginable: kebabs, hot dogs, steak, roast pork, xiaolongbao, and much more."
)

Site.create(
    name: "Disney World",
    description: "Take your stupid kids here."
)

Site.create(
    name: "Quicken Loans Arena",
    description: "LeBron used to play here! We were good! Honestly!"
)

Site.create(
    name: "Big Ben",
    description: "A big f***ing clock in case you need to know what time it is and your phone died."
)

Site.create(
    name: "Tokyo Tower",
    description: "Like the Eiffel Tower, but uglier."
)

User.create(
    firstname: "Graham",
    lastname: "Watson",
    groupsize: 5,
    address: "123 Fake St, Houston, TX 77001"
)

User.create(
    firstname: "John",
    lastname: "Grubbs",
    groupsize: 14,
    address: "345 Fake St, Houston, TX 77001"
)