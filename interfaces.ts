interface Game {
  id?: string | number
  title: string
  description: string
  readonly genre: string
  platform?: string[]
  getSimilars?: (title: string) => void
}

const csgo: Game = {
  id: 1,
  title: 'Counter-Strike: Global Offensive',
  description: 'The best game in the world',
  genre: 'FPS',
  platform: ['PC'],
  getSimilars: (title: string) => {
    console.log(`Similar games to ${title}: Valorant, Cross-Fire`)
  }
}

interface DLC extends Game {
  originalGame: Game
  newContent: string[]
}

const Source2: DLC = {
  id: 2,
  title: 'Counter-Strike: Global Offensive Source2',
  description: 'You play in the bests graphics in the world',
  genre: 'FPS',
  platform: ['PC'],
  originalGame: csgo,
  newContent: ['New graphics engine v2']
}

class CreateGame implements Game {
  title: string;
  description: string;
  genre: string;

  constructor(t: string, d: string, g: string;) {
    this.title = t;
    this.description = d;
    this.genre = g;
  }
}