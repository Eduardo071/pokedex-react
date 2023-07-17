import { Toggler, Togglerimg } from "./HomeStyle";
import darkLightButton from '../design/images/darkLightButton.png'
import { ThemeContext, themes } from "../contexts/ThemeContext";
import { useContext, useEffect } from "react";


export function Togglerbutton(){
    const {theme, setTheme} = useContext(ThemeContext)

    useEffect(() => {
        if(theme === themes.light) {
            document.querySelector('.teste').style.transform = 'rotate(0deg)'
            document.querySelector('.teste').style.top = '0.6rem'
            document.querySelector('.teste').style.right = '0.6rem'
        } else if(theme === themes.dark) {
            document.querySelector('.teste').style.transform = 'rotate(-180deg)'
            document.querySelector('.teste').style.top = '1rem'
            document.querySelector('.teste').style.right = '1rem'
        }
    }, [theme])
    return (
        <Toggler style={{backgroundColor: theme.secondaryColor}} 
                    onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}>
                        <Togglerimg className="teste" src={darkLightButton} />
                    </Toggler>
    )
}