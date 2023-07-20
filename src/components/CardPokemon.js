import { useContext, useEffect, useState } from "react";
import { Card, LinkDescriptionPokemon, MoreText, NomePokemon, PathImage, PokemonImg, PokemonMoldure, VectorImage } from "./HomeStyle";
import { ThemeContext } from "../contexts/ThemeContext";

export function CardPokemon({ quantityPokemons, searchTerm, selectedOption }) {
    const { theme } = useContext(ThemeContext)
    const [pokemon, setPokemon] = useState([])
    const [pokemonDetails, setPokemonDetails] = useState([])
    const [filteredPokemonsDetails, setFilteredPokemonsDetails] = useState([])

    useEffect(() => {
        const fetchPokedex = async () => {
            const pokedex =
                selectedOption === "" 
                    ? await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${quantityPokemons}&offset=0`)
                    : await fetch(`https://pokeapi.co/api/v2/type/${selectedOption}`)
            const pokedexResponse = await pokedex.json()
            const pokemons = selectedOption === ""
                ? pokedexResponse.results
                : pokedexResponse.pokemon
            const pokemonDetails = selectedOption === ""
                ? pokemons.map((item) => item.url)
                : pokemons.map((item) => item.pokemon.url)
            setPokemon(pokemonDetails)
        }
        fetchPokedex()
    }, [quantityPokemons, selectedOption])

    useEffect(() => {
        const fetchPokemonDetails = async () => {
            let responses
            if (selectedOption === "") {
                responses = await Promise.all(
                    pokemon.map(urlPokemon => fetch(urlPokemon).then(response => response.json()))
                )
            } else {
                const pokemonFilteredType = pokemon.slice(0, quantityPokemons)
                responses = await Promise.all(
                    pokemonFilteredType.map(urlPokemon => fetch(urlPokemon).then(response => response.json()))
                )
            }
            setPokemonDetails(responses)

        }
        fetchPokemonDetails()
    }, [pokemonDetails, selectedOption, pokemon, quantityPokemons])

    useEffect(() => {
            const filteredPokemons = pokemonDetails.filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()))
            searchTerm !== ''
            ? setFilteredPokemonsDetails(filteredPokemons)
            : setFilteredPokemonsDetails(pokemonDetails)
        
    }, [pokemonDetails, searchTerm])

    return (
        filteredPokemonsDetails.map((pokemon, index) => (

            <Card key={index} style={{ backgroundColor: theme.secondaryColor }}>
                <PokemonMoldure style={{ backgroundColor: theme.moldureColor }}>
                    <PokemonImg src={pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default ? pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default : pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} />
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