import { Section, Filter, Header } from "../components/HomeStyle"
import { useContext, useState } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import { PokemonsList } from "../components/PokemonsList"
import { Button } from "../components/Button"
import { Title } from "../components/Title"
import { Select } from "../components/Select"
import { Input } from "../components/Input"
import { Togglerbutton } from "../components/Toggler"
import { CardPokemon } from "../components/CardPokemon"


function Home() {

    const { theme } = useContext(ThemeContext)
    
    const [quantityPokemons, setQuantityPokemons] = useState(10)
    const [selectedOption, setSelectedOption] = useState('')
    const [searchTerm, setSearchTerm ] = useState('')

    const handleClick = () => setQuantityPokemons(quantityPokemons + 10)

    const handleSelectedOption = (event) => setSelectedOption(event.target.value)

    const handleSearch = (event) => setSearchTerm(event.target.value)


    return (
        <Filter backgroundcolor={theme.backgroundColor}>
            <Title />
            <Section style={{ backgroundColor: theme.primaryColor }}>
                <Header>
                    <Select selectedOption={selectedOption} handleSelectedOption={handleSelectedOption} />
                    <Input handleSearch={handleSearch} searchTerm={searchTerm} quantityPokemons={quantityPokemons} />
                    < Togglerbutton/>
                </Header>
                <PokemonsList>
                <CardPokemon searchTerm={searchTerm} selectedOption={selectedOption} quantityPokemons={quantityPokemons} />
                </PokemonsList>
            </Section>
            <Button handleClick={handleClick} />
        </Filter>
    )
}

export default Home