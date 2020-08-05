// AccountInfo
type AccountInfo = {
  id: number
  name: string
  email?: string
}

const account: AccountInfo = {
  id: 1,
  name: 'Augusto Mentz',
}

// CharInfo
type CharInfo = {
  nickname: string
  level: number
}

const char: CharInfo = {
  nickname: 'augustomentz',
  level: 100
}

// Intersection
type PlayerInfo = AccountInfo & CharInfo

const player: PlayerInfo = {
  id: 1,
  name: 'Augusto Mentz',
  nickname: 'augustomentz',
  level: 100
}
