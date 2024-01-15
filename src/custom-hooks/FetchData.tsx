import { useState, useEffect } from 'react'
import { server_calls } from '../api/server'
import { auth} from '../config/firebase'

export const useGetData = () => {
    const [ inventoryData, setData ] = useState<[]>([])

    async function handleDataFetch(){
        const result = await server_calls.get(auth.currentUser?.uid);
        setData(result)
        console.log(result)
    }

    useEffect( () => {
        handleDataFetch();
    }, [auth.currentUser])

    return { inventoryData, getData:handleDataFetch}
}