import { useState, useEffect } from 'react'

export const useFetchData = API => {

    const [ data, setData ] = useState(null)
    const [ loader, setLoader ] = useState(false)
    
    /*const handleFetchData = async e => {
        e.preventDefault()
        setData(null)
        setLoader(true)
        const response = await fetch(API)
        const result = await response.json()
        setData(result)
        setLoader(false)
    }*/

    useEffect(() => {


        const testx = async () => {
            setData(null)
            setLoader(true)
            //const API = `https://fakestoreapi.com/products`
            const response = await fetch(API)
            const result = await response.json()
            setData(result)
            setLoader(false)
        }

        testx()

    }, [API])

    //console.log(data)

    return { data, loader }

}