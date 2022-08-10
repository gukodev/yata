const TODOS = [
    'Wash the dishes',
    'Feed the dog',
    'Take the dog for a walk',
    'Pet the cat',
    'Make the bed',
    'Do the laundry',
    'Buy groceries',
    'Clean the house',
    'Take the garbage out',
    'Mow the lawn',
    'Write a TODO website',
    'Make a cool game',
    'Make a cool app',
    'Visit the doctor',
    'Go to the gym',
]

export function randomTodo() {
    return TODOS[Math.floor(Math.random() * TODOS.length)]
}
