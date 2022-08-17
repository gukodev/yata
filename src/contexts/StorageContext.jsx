import { createContext, useEffect, useState } from 'react'
import { filterByMostRecent } from '../util/format'

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
        getTodos: () => {
            return filterByMostRecent(todos, 'createdAt')
        },
        getTodosWithoutDueDate: () => {
            const items = todos.filter((todo) => !todo.dueDate)
            return filterByMostRecent(items, 'createdAt')
        },
        getTodosWithDueDate: () => {
            const items = todos.filter((item) => item.dueDate)
            return filterByMostRecent(items, 'dueDate').reverse()
        },
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
