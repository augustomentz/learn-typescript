abstract class UserAccount {
  public name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  
  logger(): void {
    console.log(
      `The player ${this.name} is 
      ${this.age} years old`
    )
  }
}

class CharAccount extends UserAccount {
  private nickname: string;
  level: number;

  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age)

    this.nickname = nickname;
    this.level = level;
  }

  get getLevel() {
    return this.level
  }

  set setLevel(level: number) {
    this.level = level
  }

  loggerCharDetails(): void {
    console.log(
      `The player ${this.name}
      is ${this.age} years old, has the char ${this.nickname} at level
      ${this.level}`
    )
  }
}

// Abstract class
// const Augusto = new UserAccount('Augusto', 21)
// Augusto.logger();

const Jhon = new CharAccount('Jhon', 30, 'jhonmaster', 88)
Jhon.logger();
Jhon.loggerCharDetails();
Jhon.setLevel = 499
console.log(Jhon.getLevel)