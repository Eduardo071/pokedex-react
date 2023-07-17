

async function getPokemon(urlPokemon) {
    const response = await fetch(`${urlPokemon}`)
    return response.json()
}


export default getPokemon