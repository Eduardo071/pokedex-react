import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import { Option, PokemonTypeSelect } from "./HomeStyle"

export function Select({handleSelectedOption, selectedOption}) {
    const { theme } = useContext(ThemeContext)
    const [types, setTypes] = useState()

    useEffect(() => {
        const fetchType = async () => {
            const fetchResponse = await fetch('https://pokeapi.co/api/v2/type')
            const data = await fetchResponse.json()
            const types = data.results
            types.splice(18, 1)
            setTypes(types)
        }
        fetchType()
    }, [])

    return (
        <PokemonTypeSelect value={selectedOption} onChange={handleSelectedOption} style={{ backgroundColor: theme.secondaryColor, color: theme.color }}>
            <Option value='' disabled hidden>SORT BY:</Option>
            <Option value=''>All</Option>
            {
                types ? types.map((type, index) => {
                    return (
                            <Option key={index}>{type.name}</Option>
                    )
                }) : null
            }
        </PokemonTypeSelect>
    )
}