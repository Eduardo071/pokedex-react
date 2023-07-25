import { useContext, useEffect, useState } from 'react'
import * as S from './PokemonDetailsStyle'
import { ThemeContext } from '../../contexts/ThemeContext'

export function PokemonImage({ pokemon }) {
    const { theme } = useContext(ThemeContext)
    const [pokemonData, setPokemonData] = useState({})
    useEffect(() => {
        const FetchPokemonData = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            const dataPokemon = await response.json()
            setPokemonData(dataPokemon)

        }
        FetchPokemonData()


    }, [pokemon])

    return (
        <S.SectionImgPokemon backgroundcolor={theme.moldureColor}>
            <img src={
                pokemonData.sprites?.other?.["official-artwork"]?.front_default
            } alt={pokemon} />
        </S.SectionImgPokemon>
    )
}