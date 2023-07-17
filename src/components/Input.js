import { useContext } from "react";
import { PokemonNameInput } from "./HomeStyle";
import { ThemeContext } from "../contexts/ThemeContext";

export function Input(){
    const {theme} = useContext(ThemeContext)
    return (
        <PokemonNameInput lettercolor={theme.color} style={{backgroundColor: theme.secondaryColor, color: theme.color }} placeholder="TYPE POKEMON NAME" type="text" />
    )
}