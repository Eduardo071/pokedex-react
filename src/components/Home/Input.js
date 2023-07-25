import { useContext } from "react";
import { PokemonNameInput } from "./HomeStyle";
import { ThemeContext } from "../../contexts/ThemeContext";

export function Input({ handleSearch, searchTerm }) {
    const { theme } = useContext(ThemeContext)

    return (
        <PokemonNameInput value={searchTerm} onChange={handleSearch} onSubmit={handleSearch} lettercolor={theme.color} style={{ backgroundColor: theme.secondaryColor, color: theme.color }} placeholder="TYPE POKEMON NAME" type="text" />
    )
}