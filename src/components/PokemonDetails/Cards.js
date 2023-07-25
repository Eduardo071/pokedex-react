import { useContext, useEffect, useState } from "react";
import * as S from "./PokemonDetailsStyle.js";
import { ThemeContext } from "../../contexts/ThemeContext.js";


export function Cards({ pokemon }) {
    const {theme} = useContext(ThemeContext)
    const [pokemonAbilities, setPokemonAbilities] = useState([])
    useEffect(() => {
        const FetchPokemonAbilities = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            const dataPokemon = await response.json()
            const abilities = dataPokemon.abilities.map(abilities => abilities.ability)
            const abilitiesDetails = await Promise.all(
                abilities.map(abilitie => fetch(abilitie.url).then(response => response.json())))

            setPokemonAbilities(abilitiesDetails)

        }
        FetchPokemonAbilities()

        
    }, [pokemonAbilities, pokemon])

    return (
        <S.CardsAbilities>
            {pokemonAbilities.map((abilitie, index) => (
                    <S.CardAbilitie backgroundcolor={theme.secondaryColor} key={index}>
                        <S.TitleAlibitie color={theme.color} bordercolor={theme.color}>{abilitie.name}</S.TitleAlibitie>
                        <S.ContainerDescriptionAbilitie>
                            <S.DescriptionAbilitie color={theme.color}>
                                {abilitie.flavor_text_entries.find(propertyes => propertyes.language.name === 'en').flavor_text}
                            </S.DescriptionAbilitie>
                        </S.ContainerDescriptionAbilitie>
                    </S.CardAbilitie>
                )

            )}
        </S.CardsAbilities>
    )

}