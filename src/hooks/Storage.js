import { useContext } from 'react'
import { StorageContext } from './../contexts/StorageContext'

export function useStorageAPI() {
    return useContext(StorageContext)
}
