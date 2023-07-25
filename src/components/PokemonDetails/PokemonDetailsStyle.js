import styled from 'styled-components'

export const Header = styled.header`
display: flex;
justify-content: space-between;
width: 100%;
margin-bottom: 2.5rem;
`

export const Content = styled.main`
display: flex;
width: 100vw;
flex-direction: column;
padding: 1.5rem;
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

export const Path = styled.path`
transition: fill 0.2s ease-in;
`

export const House = styled.svg`
width: 4rem;
height: 4rem;
`

export const ButtonHome = styled.div`

display: flex;
align-items: center;
gap: 1rem;
transition: 0.4s;

&:hover{
    cursor: pointer;
    opacity: 0.7;
    scale: 1.05;
}
`

export const ButtonHomeText = styled.h2`
font-size: 3rem;
color: ${props => props.color};
transition: 0.2s ease-in;
`

export const ContainerStatsPokemon = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 5rem;
`

export const SectionImgPokemon = styled.section`
background-color: ${props => props.backgroundcolor};
width: 50rem;
height: 50rem;
border-radius: 4rem;
display: flex;
justify-content: center;
align-items: center;
transition: 0.2s ease-in;

img{
    width: 40rem;
    height: 40rem;
}
`

export const SectionDescriptionPokemon = styled.section`
width: 90rem;
height: 50rem;
background-color: ${props => props.backgroundcolor};
border-radius: 4rem;
display: flex;
flex-direction: column;
padding: 4rem;
transition: 0.2s ease-in;
`

export const NamePokemon = styled.h1`
font-size: 5rem;
color: ${props => props.color};
margin-right: 8rem;
transition: 0.2s ease-in;
`

export const DivTypes = styled.div`
display: flex;
gap: 2rem;
margin-right: 1rem;
`

export const TypePokemon = styled.h2`
background-color: ${props => props.backgroundcolor};
padding: 0.8rem;
border-radius: 1rem;
font-size: 3rem;
color: ${props => props.color};
transition: 0.2s ease-in;
`

export const DivNamePokemon = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 70rem;
border-bottom: 0.6rem solid ${props => props.bordercolor};
border-radius: 0.4rem;
margin-bottom: 3rem;
transition: 0.2s ease-in;
`

export const DescriptionText = styled.p`
font-size: 4rem;
color: ${props => props.color};
transition: 0.2s ease-in;
`

export const SectionMoves = styled.section`
width: 100%;
border-radius: 4rem;
min-height: 30rem;
height: auto;
background-color: ${props => props.backgroundcolor};
display: flex;
flex-direction: column;
align-items: center;
padding: 2rem;
margin-bottom: 3rem;
transition: 0.2s ease-in;
`

export const TitleMoves = styled.h1`
font-size: 5rem;
width: 30%;
text-align: center;
border-bottom: 0.4rem solid ${props => props.bordercolor};
border-radius: 0.2rem;
margin-bottom: 3rem;
color: ${props => props.color};
transition: 0.2s ease-in;
`

export const MovesNames = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
width: 100%;
min-height: 7rem;
height: auto;
gap: 2rem;

`

export const MoveName = styled.h2`
font-size: 3rem;
background-color: ${props => props.backgroundcolor};
border-radius: 1rem;
padding: 0.8rem 1.8rem;
color: ${props => props.color};
transition: 0.2s ease-in;
`

export const SectionAbilities = styled.section`
width: 100%;
border-radius: 4rem;
min-height: 30rem;
height: auto;
background-color: ${props => props.backgroundcolor};
display: flex;
flex-direction: column;
align-items: center;
padding: 2rem;
margin-bottom: 3rem;
transition: 0.2s ease-in;
`

export const TitleAbilities = styled.h1`
font-size: 5rem;
width: 30%;
text-align: center;
border-bottom: 0.4rem solid;
border-radius: 0.2rem;
margin-bottom: 3rem;
color: ${props => props.color};
transition: 0.2s ease-in;
`

export const CardsAbilities = styled.div`
display: flex;
justify-content: space-evenly;
width: 100%;
height: auto;
`

export const CardAbilitie = styled.div`
width: 40rem;
display: flex;
flex-direction: column;
align-items: center;
background-color: ${props => props.backgroundcolor};
padding: 1rem 0;
border-radius: 2rem;
transition: 0.2s ease-in;
`

export const TitleAlibitie = styled.h1`
font-size: 4rem;
width: 100%;
text-align: center;
border-bottom: 0.4rem solid ${props => props.bordercolor};
border-radius: 0.2rem;
margin-bottom: 3rem;
color: ${props => props.color};
transition: 0.2s ease-in;
`

export const ContainerDescriptionAbilitie = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
min-height: 10rem;
height: auto;
padding: 0 1rem;
justify-content: center;
`

export const DescriptionAbilitie = styled.p`
font-size: 3rem;
max-width: 100%;
word-wrap: break-word;
color: ${props => props.color};
transition: 0.2s ease-in;
`

export const CopyrightSymbol = styled.svg`
width: 4rem;
height: 4rem;
`

export const CopyrightText = styled.p`
font-size: 3rem;
color: ${props => props.color};
transition: 0.2s ease-in;
`

export const FooterElements = styled.div`
display: flex;
gap: 1rem;
align-items: center;
justify-content: center;
`

export const Footer = styled.footer`
width: 100%;
display: flex;
justify-content: center;
`