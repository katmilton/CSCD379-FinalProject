import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
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
        imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
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
        imageUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80',
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
        imageUrl: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=1200&q=80',
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
        imageUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
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
        imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80',
        searchDocumentId: 'game-night-in-the-woods'
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