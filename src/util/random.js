const TODOS = [
    'Wash the dishes',
    'Feed the dog',
    'Make the bed',
    'Do the laundry',
    'Buy groceries',
    'Clean the house',
    'Take the garbage out',
    'Mow the lawn',
    'Write a TODO website',
    'Make a cool game',
    'Make a cool app',
]

export function randomTodo() {
    return TODOS[Math.floor(Math.random() * TODOS.length)]
}
