// Type Aliases and Union
type Uid = number | string

const loggerDetails = (uid: Uid, item: string) => {
  console.log(`A product with ${uid} has a title as ${item}`)
}

const loggerInfo = (uid: Uid, user: string) => {
  console.log(`A user with ${uid} has a name as ${user}`)
}

type Platform = 'Windows' | 'Linux' | 'MacOS' | 'ios'

const renderPlatform = (platform: Platform) => {
  return platform
}

renderPlatform('ios')

loggerDetails(123, 'sapato')
loggerDetails('123', 'sapato')

loggerInfo(123, 'sapato')
loggerInfo('123', 'sapato')
