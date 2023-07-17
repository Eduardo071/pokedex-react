import { useContext } from "react";
import { ButtonShowMore, DivButtonShowMore, PathImage, VectorImage } from "./HomeStyle";
import { ThemeContext } from "../contexts/ThemeContext";

export function Button({handleClick}){

    const {theme} = useContext(ThemeContext)
        
    return(
        <DivButtonShowMore>
                <ButtonShowMore onClick={handleClick} style={{backgroundColor: theme.primaryColor, color: theme.color}}>SHOW MORE
                    <VectorImage width="24" height="24" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <PathImage d="M2 2L13 15.5L23.5 2" stroke={theme.color} strokeWidth="5" />
                    </VectorImage>
                </ButtonShowMore>
            </DivButtonShowMore>
    )
}