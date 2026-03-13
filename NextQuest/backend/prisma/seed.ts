import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    await prisma.savedGame.deleteMany()
  await prisma.recommendationHistory.deleteMany()
  await prisma.game.deleteMany()

  await prisma.game.createMany({
    data: [
      {
        title: 'Spiritfarer',
        description: 'A cozy management adventure with emotional storytelling and beautiful art.',
        genres: 'Adventure,Simulation',
        tags: 'cozy,story rich,management,emotional',
        platforms: 'PC,Switch,Xbox,PlayStation',
        estimatedHours: 15,
        releaseYear: 2020,
        imageUrl: 'https://res.cloudinary.com/da1bsh2xl/image/upload/v1773370353/spiritfarer_wq0eom.jpg',
        searchDocumentId: 'game-spiritfarer'
      },
      {
        title: 'Hades',
        description: 'A fast-paced roguelike with sharp combat, strong characters, and replayable runs.',
        genres: 'Action,Roguelike',
        tags: 'roguelike,action,story rich,challenging',
        platforms: 'PC,Switch,PlayStation,Xbox',
        estimatedHours: 25,
        releaseYear: 2020,
        imageUrl: 'https://res.cloudinary.com/da1bsh2xl/image/upload/v1773370746/hades_odk7at.png',
        searchDocumentId: 'game-hades'
      },
      {
        title: 'Celeste',
        description: 'A challenging platformer with emotional storytelling and a memorable soundtrack.',
        genres: 'Platformer,Indie',
        tags: 'platformer,emotional,indie,challenging',
        platforms: 'PC,Switch,PlayStation,Xbox',
        estimatedHours: 10,
        releaseYear: 2018,
        imageUrl: 'https://res.cloudinary.com/da1bsh2xl/image/upload/v1773370967/thumb-1920-901149_uj5o7n.png',
        searchDocumentId: 'game-celeste'
      },
      {
        title: 'A Short Hike',
        description: 'A tiny, charming exploration game with a light tone and relaxing traversal.',
        genres: 'Adventure,Exploration',
        tags: 'short game,cozy,exploration,indie',
        platforms: 'PC,Switch,PlayStation,Xbox',
        estimatedHours: 4,
        releaseYear: 2019,
        imageUrl: 'https://res.cloudinary.com/da1bsh2xl/image/upload/v1773370966/ashorthike_ajesbk.jpg',
        searchDocumentId: 'game-a-short-hike'
      },
      {
        title: 'Night in the Woods',
        description: 'A narrative-focused adventure with memorable characters and emotional themes.',
        genres: 'Adventure,Narrative',
        tags: 'narrative,story rich,emotional,indie',
        platforms: 'PC,Switch,PlayStation,Xbox',
        estimatedHours: 9,
        releaseYear: 2017,
        imageUrl: 'https://res.cloudinary.com/da1bsh2xl/image/upload/v1773371108/nightinthewoods_axdwoz.jpg',
        searchDocumentId: 'game-night-in-the-woods'
      },
      {
  title: "Unpacking",
  description: "A meditative puzzle game about unpacking boxes and discovering a life through objects.",
  genres: "Puzzle, Indie",
  tags: "Cozy, Relaxing, Narrative",
  platforms: "PC, Switch, Xbox",
  estimatedHours: 5,
  releaseYear: 2021,
  imageUrl: "https://res.cloudinary.com/da1bsh2xl/image/upload/v1773371123/unpacking_jx3itu.jpg",
  searchDocumentId: "game-unpacking"
},
{
  title: "Lake",
  description: "Deliver mail in a peaceful lakeside town while reconnecting with old relationships.",
  genres: "Adventure, Indie",
  tags: "Cozy, Story Rich, Relaxing",
  platforms: "PC, Xbox",
  estimatedHours: 6,
  releaseYear: 2021,
  imageUrl: "https://res.cloudinary.com/da1bsh2xl/image/upload/v1773371122/lake_slxxyj.jpg",
  searchDocumentId: "game-lake"
},
{
  title: "Coffee Talk",
  description: "Serve drinks and listen to heartfelt stories in a cozy late-night coffee shop.",
  genres: "Visual Novel, Indie",
  tags: "Cozy, Story Rich, Relaxing",
  platforms: "PC, Switch, PS5",
  estimatedHours: 5,
  releaseYear: 2020,
  imageUrl: "https://res.cloudinary.com/da1bsh2xl/image/upload/v1773371294/coffee-talk-box-art_o9afqe.jpg",
  searchDocumentId: "game-coffee-talk"
},
{
  title: "TOEM",
  description: "Explore a charming hand-drawn world by photographing curious moments.",
  genres: "Adventure, Indie",
  tags: "Cozy, Exploration, Relaxing",
  platforms: "PC, PS5, Switch",
  estimatedHours: 4,
  releaseYear: 2021,
  imageUrl: "https://res.cloudinary.com/da1bsh2xl/image/upload/v1773371294/toem_i1jx18.jpg",
  searchDocumentId: "game-toem"
},
{
  title: "Dordogne",
  description: "Relive childhood memories through watercolor landscapes and emotional storytelling.",
  genres: "Adventure, Indie",
  tags: "Cozy, Narrative, Exploration",
  platforms: "PC, Switch, Xbox",
  estimatedHours: 6,
  releaseYear: 2023,
  imageUrl: "https://res.cloudinary.com/da1bsh2xl/image/upload/v1773371293/dordogne_zh5lol.jpg",
  searchDocumentId: "game-dordogne"
},
{
  title: "Outer Wilds",
  description: "Explore a handcrafted solar system trapped in a mysterious time loop.",
  genres: "Adventure, Indie",
  tags: "Exploration, Sci-Fi, Narrative",
  platforms: "PC, PS5, Xbox",
  estimatedHours: 15,
  releaseYear: 2019,
  imageUrl: "https://res.cloudinary.com/da1bsh2xl/image/upload/v1773371457/outerwilds_f9m7vt.jpg",
  searchDocumentId: "game-outer-wilds"
},
{
  title: "Journey",
  description: "A breathtaking emotional adventure across a vast desert.",
  genres: "Adventure, Indie",
  tags: "Exploration, Emotional, Atmospheric",
  platforms: "PC, PS5",
  estimatedHours: 2,
  releaseYear: 2012,
  imageUrl: "https://res.cloudinary.com/da1bsh2xl/image/upload/v1773371454/journey_pbog21.jpg",
  searchDocumentId: "game-journey"
},
{
  title: "Firewatch",
  description: "A narrative-driven mystery set in the Wyoming wilderness.",
  genres: "Adventure, Indie",
  tags: "Story Rich, Mystery, Exploration",
  platforms: "PC, PS5, Xbox",
  estimatedHours: 5,
  releaseYear: 2016,
  imageUrl: "https://res.cloudinary.com/da1bsh2xl/image/upload/v1773371453/firewatch_bm5mv0.jpg",
  searchDocumentId: "game-firewatch"
},
{
  title: "Gris",
  description: "A visually stunning platformer exploring grief and healing.",
  genres: "Platformer, Indie",
  tags: "Emotional, Atmospheric, Artful",
  platforms: "PC, Switch, PS5",
  estimatedHours: 4,
  releaseYear: 2018,
  imageUrl: "https://res.cloudinary.com/da1bsh2xl/image/upload/v1773371594/gris_tjteg8.jpg",
  searchDocumentId: "game-gris"
},
{
  title: "Dead Cells",
  description: "A fast-paced roguelike action platformer with fluid combat.",
  genres: "Action, Roguelike",
  tags: "Challenging, Fast-Paced, Replayable",
  platforms: "PC, Switch, PS5, Xbox",
  estimatedHours: 30,
  releaseYear: 2018,
  imageUrl: "https://res.cloudinary.com/da1bsh2xl/image/upload/v1773371593/deadcells_db6wru.jpg",
  searchDocumentId: "game-dead-cells"
},
{
  title: "Hollow Knight",
  description: "A hauntingly beautiful metroidvania with deep exploration and tough combat.",
  genres: "Action, Indie",
  tags: "Exploration, Challenging, Atmospheric",
  platforms: "PC, Switch, PS5, Xbox",
  estimatedHours: 25,
  releaseYear: 2017,
  imageUrl: "https://res.cloudinary.com/da1bsh2xl/image/upload/v1773371592/hollowknight_iyessb.jpg",
  searchDocumentId: "game-hollow-knight"
},
{
  title: "Hyper Light Drifter",
  description: "A stylish action RPG inspired by classic 16-bit adventures.",
  genres: "Action, Indie",
  tags: "Fast-Paced, Atmospheric, Combat",
  platforms: "PC, Switch, PS5",
  estimatedHours: 12,
  releaseYear: 2016,
  imageUrl: "https://res.cloudinary.com/da1bsh2xl/image/upload/v1773371732/hyperlight_veb6dw.jpg",
  searchDocumentId: "game-hld"
},
{
  title: "What Remains of Edith Finch",
  description: "A deeply emotional collection of short interactive stories.",
  genres: "Adventure, Narrative",
  tags: "Story Rich, Emotional, Short",
  platforms: "PC, PS5, Xbox",
  estimatedHours: 3,
  releaseYear: 2017,
  imageUrl: "https://res.cloudinary.com/da1bsh2xl/image/upload/v1773371730/edithfinch_wgcox2.jpg",
  searchDocumentId: "game-edith-finch"
},
{
  title: "Life is Strange",
  description: "A coming-of-age story about friendship, time travel, and consequences.",
  genres: "Adventure, Narrative",
  tags: "Story Rich, Choice-Based, Emotional",
  platforms: "PC, PS5, Xbox",
  estimatedHours: 15,
  releaseYear: 2015,
  imageUrl: "https://res.cloudinary.com/da1bsh2xl/image/upload/v1773371729/lifeisstrange_mknstt.jpg",
  searchDocumentId: "game-life-is-strange"
},
{
  title: "The Forgotten City",
  description: "A narrative mystery set in an ancient Roman time loop.",
  genres: "Adventure, RPG",
  tags: "Mystery, Narrative, Exploration",
  platforms: "PC, PS5, Xbox",
  estimatedHours: 10,
  releaseYear: 2021,
  imageUrl: "https://res.cloudinary.com/da1bsh2xl/image/upload/v1773371893/forgottencity_sm0nkl.jpg",
  searchDocumentId: "game-forgotten-city"
},
{
  title: "The Witcher 3",
  description: "An epic open-world RPG with rich storytelling and meaningful choices.",
  genres: "RPG, Adventure",
  tags: "Story Rich, Open World, Fantasy",
  platforms: "PC, PS5, Xbox",
  estimatedHours: 60,
  releaseYear: 2015,
  imageUrl: "https://res.cloudinary.com/da1bsh2xl/image/upload/v1773371891/witcher3_uernjg.png",
  searchDocumentId: "game-witcher-3"
},
{
  title: "Skyrim",
  description: "A massive open-world fantasy RPG full of exploration and player freedom.",
  genres: "RPG, Adventure",
  tags: "Open World, Exploration, Fantasy",
  platforms: "PC, PS5, Xbox",
  estimatedHours: 80,
  releaseYear: 2011,
  imageUrl: "https://res.cloudinary.com/da1bsh2xl/image/upload/v1773371889/skyrim_wet1ce.jpg",
  searchDocumentId: "game-skyrim"
}






    ]
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })