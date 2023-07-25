import { useParams } from "react-router-dom"
import { useContext } from "react"
import * as S from "../components/PokemonDetails/PokemonDetailsStyle";
import { Togglerbutton } from "../components/Home/Toggler"
import { Cards } from "../components/PokemonDetails/Cards";
import { ButtonHome } from "../components/PokemonDetails/HomeButton";
import { PokemonImage } from "../components/PokemonDetails/PokemonImage";
import { ThemeContext } from "../contexts/ThemeContext";
import { Moves } from "../components/PokemonDetails/Moves";
import { PokemonDescription } from "../components/PokemonDetails/PokemonDescription";
import { Footer } from "../components/PokemonDetails/Footer";

function PokemonDetails() {
    const { name } = useParams()
    const { theme } = useContext(ThemeContext)

    return (
        <S.Filter backgroundcolor={theme.backgroundColor} >
            <S.Content>
                <S.Header>
                    <ButtonHome />
                    <Togglerbutton />
                </S.Header>
                <S.ContainerStatsPokemon>
                    <PokemonImage pokemon={name} />
                    <PokemonDescription pokemon={name} />
                </S.ContainerStatsPokemon>
                <S.SectionMoves backgroundcolor={theme.moldureColor}>
                    <S.TitleMoves color={theme.color} bordercolor={theme.color}>Moves</S.TitleMoves>
                    <Moves pokemon={name} />
                </S.SectionMoves>
                <S.SectionAbilities backgroundcolor={theme.moldureColor}>
                    <S.TitleAbilities color={theme.color}>Abilities</S.TitleAbilities>
                    <Cards pokemon={name} />
                </S.SectionAbilities>
                <Footer />
            </S.Content>

        </S.Filter>
    )
}

export default PokemonDetails