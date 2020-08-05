type Todo = {
  title: string;
  description: string;
  completed: boolean;
}

// Readonly
const todo: Readonly<Todo> = {
  title: "Assistir Dark de novo",
  description: "Relembrar os detalhes",
  completed: false
}

const updateTodo = (todo: Todo, fields: Partial<Todo>) => {
  return {
    ...todo,
    ...fields
  }
}

console.log(updateTodo(todo, { completed: true }))

// Pick
type TodoPreview = Pick<Todo, 'title' | 'completed'>

const todo2: TodoPreview = {
  title: 'League Of Legends',
  completed: true
}

// Omit
type TodoPreview2 = Omit<Todo, 'description'>
const todo3: TodoPreview = {
  title: 'League Of Legends',
  completed: true
}