import { createContext, useEffect, useState } from 'react'

export const StorageContext = createContext()

export function StorageContextProvider({ children }) {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const todos = localStorage.getItem('todos')
        if (todos) setTodos(JSON.parse(todos))
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const StorageAPI = {
        getTodos: () => todos,
        addTodo: (todo) => {
            setTodos([...todos, todo])
        },
        getTodo: (id) => {
            return todos.find((todo) => todo.id === id)
        },
        removeTodo: (id) => {
            setTodos(todos.filter((todo) => todo.id !== id))
        },
        setTodoComplete: (id, complete) => {
            setTodos(
                todos.map((todo) => {
                    if (todo.id === id) todo.complete = complete
                    return todo
                })
            )
        },
    }

    return <StorageContext.Provider value={StorageAPI}>{children}</StorageContext.Provider>
}
