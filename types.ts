throw new Error('error')
// Boolean (true, false)
let isOpen: boolean
isOpen = true

// String ('foo', "foo", `foo`)
let message: string
message = `foo ${isOpen}`

// Number (int, float, hex, binary) 
let total: number
total = 0xff0

// Array (type[], Array<type>)
let items: string[]
items = ['foo', 'bar']

let values: Array<number>
values = [1, 2, 3]

// Tuple
let title: [number, string]
title = [1, "foo"]

// Enum
enum Colors {
  white = '#fff',
  black = '#000'
}

// Any (everything) IS NOT COOL
let thing: any
thing = true

// Void
const logger = (): void => {
  console.log('foo')
}

// null | undefined
type Foo = string | undefined

// Never
const error = (): never => {
  throw new Error('error')
}

// Object
let cart: object
cart = {
  key: 'foo'
}