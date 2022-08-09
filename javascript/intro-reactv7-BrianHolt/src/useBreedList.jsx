import { useState, useDebugValue, useEffect } from "react";

const localCache = {};

export default function useBreedList(animal) {      // Custom Hook
    const [breedList, setBreedList] = useState([])
    const [status, setStatus] = useState("unloaded")

    useDebugValue(`Hi from the Code: ${Object.keys(localCache).length}`)

    useEffect(() => {
        if (!animal) {
            setBreedList([])
        } else if (localCache[animal]) {
            setBreedList(localCache[animal])
        } else {
            requestBreedList()
        }

        async function requestBreedList() {
            setBreedList([])
            setStatus("loading");

            const res = await fetch(
                `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
            );

            const json = await res.json()
            localCache[animal] = json.breeds || []
            setBreedList(localCache[animal])
            setStatus("loaded")
        }
    }, [animal])

    return [breedList, status]
}