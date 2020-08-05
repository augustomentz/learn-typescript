// @Component
// @Selector
// @useState('teste')

// Class decorator
const Logger = (prefix: string) => {
  return (target: any) => {
    console.log(`${prefix} - ${target}`)
  }
}

@Logger('awesome')
class Decorator {

}

const ApiVersion = (version: string) => {
  return (constructor: any) => {
    return class extends constructor {
      version = version;
    }
  }
}

@ApiVersion('1.0.0')
class API {

}

console.log(new API())

// Property decorator
const MinLength = (length: number) => {
  return (target: any, key: string) => {
    let val = target[key];

    const getter = () => val;
    const setter = (value: string) => {
      if (value.length < length) {
        console.log(`Error: You don't can't create ${key} with length small than ${length}`)
      } else {
        val = value
      }
    }

    Object.defineProperty(target, key, {
      get: getter,
      set: setter
    })
  }
}

class Movie {
  @MinLength(5)
  title: string;
  
  constructor(t: string) {
    this.title = t;
  }
}

const movie = new Movie('Interstellar')
console.log(movie.title);

// Method decorator
const Delay = (delayInMs: number) => {
  return (
    target: any,
    key: string,
    descriptor: PropertyDescriptor
  ) => {
    const originalMethod = descriptor.value;
    
    descriptor.value = (...args: any) => {
      console.log(`Waiting for ${delayInMs}ms...`)
      setTimeout(() => {
        originalMethod.apply(args)
      }, delayInMs)
    }

    return descriptor;
  }
}

class Greeter {
  greeting: string;

  constructor(g: string) {
    this.greeting = g;
  }

  @Delay(1000)
  greet() {
    console.log(`Hello! ${this.greeting}`)
  }
}

const people = new Greeter('Augusto!');
people.greet();