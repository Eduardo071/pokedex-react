import { useContext, useEffect, useState } from "react";
import { Card, LinkDescriptionPokemon, MoreText, NomePokemon, PathImage, PokemonImg, PokemonMoldure, VectorImage } from "./HomeStyle";
import { ThemeContext } from "../contexts/ThemeContext";

export function CardPokemon({quantityPokemons}) {
    const { theme } = useContext(ThemeContext)
    const [pokemon, setPokemon] = useState([])
    const [pokemonDetails, setPokemonDetails] = useState([])
    
    useEffect(() => {
        const fetchPokedex = async () => {
            const pokedex = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${quantityPokemons}&offset=0`)
            const pokedexResponse = await pokedex.json()
            const pokemons = pokedexResponse.results
            const pokemonDetails = pokemons.map((item) => item.url)
            setPokemon(pokemonDetails)
        }
        fetchPokedex()

        const fetchPokemonDetails = async () => {
            if (pokemon.length === 0) return
            const responses = await Promise.all(
                pokemon.map(urlPokemon => fetch(urlPokemon).then(response => response.json()))
            )
            setPokemonDetails(responses)
        }
        fetchPokemonDetails()
    }, [quantityPokemons, pokemon])

    return (
        pokemonDetails.map((pokemon, index) => (
            
            <Card key={index} style={{ backgroundColor: theme.secondaryColor }}>
                <PokemonMoldure style={{ backgroundColor: theme.moldureColor }}>
                    <PokemonImg src={pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default} alt={pokemon.name}/>
                </PokemonMoldure>
                <NomePokemon style={{ color: theme.color }}>{pokemon.name}</NomePokemon>
                <LinkDescriptionPokemon >
                    <MoreText style={{ color: theme.color }}>MORE</MoreText>
                    <VectorImage width="20" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <PathImage d="M2 2L13 15.5L23.5 2" stroke={theme.color} strokeWidth="5" />
                    </VectorImage>
                </LinkDescriptionPokemon>

            </Card>
        ))
    )
}