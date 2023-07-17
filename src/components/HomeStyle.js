import { styled } from "styled-components"


export const Section = styled.section`
display: flex;
flex-direction: column;
align-items: center;
width: 85vw;
min-height: 80vh;
border-radius: 5rem;
transition: 0.2s ease-in;
`

export const Header = styled.header`
width: 100%;
padding: 2rem 4rem;
display: flex;
justify-content: space-between;
align-items: center;
transition: 0.2s ease-in;
`

export const PokemonTypeSelect = styled.select`
width: 10%;
height: 4rem;
font-size: 2.8rem;
border-radius: 1rem;
border-style: none;
padding-left: 1rem;
transition: 0.2s ease-in;
`

export const Option = styled.option`
font-size: 1.8rem;
transition: 0.2s ease-in;
`

export const PokemonNameInput = styled.input`
width: 50%;
height: 4rem;
font-size: 2.8rem;
border-radius: 1rem;
border-style: none;
padding-left: 1rem;
transition: 0.2s ease-in;

&::placeholder{
    color: ${props => props.lettercolor}
}
`

export const Toggler = styled.div`
position: relative;
width: 6rem;
height: 6rem;
border-radius: 50%;
overflow: hidden;
transition: 0.2s ease-in;
`

export const Togglerimg = styled.img`
position: absolute;
transition: transform 0.4s;
width: 11rem;
transition: 0.2s ease-in;
`

export const Main = styled.main`
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 1.4rem;
width: 90%;
min-height: 20rem;
height: auto;
margin-bottom: 1rem;
transition: 0.2s ease-in;
`

export const DivButtonShowMore = styled.div`
display: flex;
justify-content: center;
margin-top: 1rem;
transition: 0.2s ease-in;
`

export const ButtonShowMore = styled.button`
display: flex;
gap: 1rem;
justify-content: center;
align-items: center;
width: 25rem;
height: 4rem;
border-radius: 1.3rem;
border-style: none;
background-color: red;
font-size: 3rem;
transition: 0.2s ease-in;
`

export const VectorImage = styled.svg`
display: flex;
`

export const PathImage = styled.path`
transition: stroke 0.2s ease-in;
`

export const Card = styled.section`
display: flex;
flex-direction: column;
align-items: center;
width: 18rem;
height: 23rem;
border-radius: 2rem;
background: grey;
transition: 0.2s ease-in;
`

export const PokemonMoldure = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 15rem;
height: 15rem;
margin-top: 1rem;
border-radius: 1rem;
transition: 0.2s ease-in;
`

export const PokemonImg = styled.img`
width: 10rem;
`

export const NomePokemon = styled.h2`
font-size: 3rem;
margin-top: 0.4rem;
transition: 0.2s ease-in;
`

export const LinkDescriptionPokemon = styled.div`
display: flex;
transition: 0.2s ease-in;
`

export const MoreText = styled.h2`
font-size: 2rem;
margin-right: 1rem;
transition: 0.2s ease-in;
`

export const Texto = styled.h1`
text-align: center;
padding-bottom: 1rem;
font-size: 6rem;
transition: 0.2s ease-in;
`

export const Filter = styled.div`
background-color: ${props => props.backgroundcolor};
width: 100vw;
min-height: 100vh;
height: auto;
display: flex;
flex-direction: column;
align-items: center;
transition: 0.2s ease-in;
`