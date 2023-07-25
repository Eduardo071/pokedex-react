import { useContext, useEffect, useState } from 'react'
import * as S from './PokemonDetailsStyle'
import { ThemeContext } from '../../contexts/ThemeContext'

export function Moves({pokemon}) {
    const { theme } = useContext(ThemeContext)
    const [moves, setMoves] = useState([])
    useEffect(() => {
        const FetchPokemonMoves = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            const dataPokemon = await response.json()
            const pokemonMoves = dataPokemon.moves.map(moves => moves.move.name).slice(0, 80)
            setMoves(pokemonMoves)
        }
        FetchPokemonMoves()
    }, [pokemon, moves])
    
    return (
        <S.MovesNames>
            {
                moves.map((move, index) => (
                    <S.MoveName backgroundcolor={theme.secondaryColor} color={theme.color} key={index}>{move}</S.MoveName>
                ))
            }
            
        </S.MovesNames>
    )
}