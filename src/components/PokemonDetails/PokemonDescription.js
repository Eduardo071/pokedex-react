import { useContext, useEffect, useState } from 'react'
import * as S from './PokemonDetailsStyle'
import { ThemeContext } from '../../contexts/ThemeContext'

export function PokemonDescription({pokemon}) {
    const [pokemonDescription, setPokemonDescription] = useState('')
    const [type, setType] = useState([])
    const { theme } = useContext(ThemeContext)

    useEffect(() => {
        const FetchPokemonAbilities = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            const dataPokemon = await response.json()
            const typePokemon = dataPokemon.types.map(types => types.type.name)
            const descriptionPokemonResponse = await fetch(dataPokemon.species.url)
            const descriptionPokemonData = await descriptionPokemonResponse.json()
            const descriptionPokemonText = 
            descriptionPokemonData.flavor_text_entries.find(propertyes => propertyes.language.name === 'en').flavor_text.replace(/\f/g, ' ')
            setType(typePokemon)
            setPokemonDescription(descriptionPokemonText)

        }
        FetchPokemonAbilities()

        
    }, [pokemon, pokemonDescription])
    return (
        <S.SectionDescriptionPokemon backgroundcolor={theme.moldureColor}>
            <S.DivNamePokemon bordercolor={theme.color}>
                <S.NamePokemon color={theme.color}>{pokemon}</S.NamePokemon>
                <S.DivTypes>
                    {type.map((type, index) => (
                        <S.TypePokemon backgroundcolor={theme.secondaryColor} color={theme.color} key={index}>{type}</S.TypePokemon>
                    ))}
                    
                </S.DivTypes>
            </S.DivNamePokemon>
            <S.DescriptionText color={theme.color}>
                {pokemonDescription}
            </S.DescriptionText>
        </S.SectionDescriptionPokemon>
    )
}