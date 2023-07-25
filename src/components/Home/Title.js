import { useContext } from "react";
import { Texto } from "./HomeStyle";
import { ThemeContext } from "../../contexts/ThemeContext";

export function Title(){
    const {theme} = useContext(ThemeContext)
    return <Texto style={{color: theme.color}}>POKEDEX</Texto>
}