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

    const handleClick = () => setQuantityPokemons(quantityPokemons + 10)

    return (
        <Filter backgroundcolor={theme.backgroundColor}>
            <Title />
            <Section style={{ backgroundColor: theme.primaryColor }}>
                <Header>
                    <Select />
                    <Input />
                    < Togglerbutton/>
                </Header>
                <PokemonsList>
                <CardPokemon quantityPokemons={quantityPokemons} />
                </PokemonsList>
            </Section>
            <Button handleClick={handleClick} />
        </Filter>
    )
}

export default Home