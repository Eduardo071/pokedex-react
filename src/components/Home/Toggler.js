import { Toggler, Togglerimg } from "./HomeStyle";
import darkLightButton from '../../design/images/darkLightButton.png'
import { ThemeContext, themes } from "../../contexts/ThemeContext";
import { useContext, useEffect } from "react";


export function Togglerbutton(){
    const {theme, setTheme} = useContext(ThemeContext)

    useEffect(() => {
        if(theme === themes.light) {
            document.querySelector('.toggler').style.transform = 'rotate(0deg)'
            document.querySelector('.toggler').style.top = '0.6rem'
            document.querySelector('.toggler').style.right = '0.6rem'
        } else if(theme === themes.dark) {
            document.querySelector('.toggler').style.transform = 'rotate(-180deg)'
            document.querySelector('.toggler').style.top = '1rem'
            document.querySelector('.toggler').style.right = '1rem'
        }
    }, [theme])
    
    return (
        <Toggler style={{backgroundColor: theme.secondaryColor}} 
                    onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}>
                        <Togglerimg className="toggler" src={darkLightButton} />
                    </Toggler>
    )
}