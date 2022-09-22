import styled from "styled-components"
import fundo from "../../assets/fundo/fundo.png"

export const Container = styled.div`
    background-image: url(${fundo});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    background-position: center;
`

export const PagLogin = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 72vh;
    width: 100vw;
`

export const Input = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    width: 100%;
    height: 75%;
`

export const TituloLogin = styled.h2`
    margin-top: 1.5rem;
    margin-bottom: 2rem;
    margin-left: 3rem;
    padding: 0.5rem;
    border-bottom: 5px solid #4C1691;
`

export const BotaoEntrar = styled.button`
    margin: 0.8rem;
    background-color: #4C1691;
    margin-top: 1.2rem;
    border-radius: 10px;
    color: #FFFFFF;
    font-size: 17px;
    text-align: center;
    font-weight: bold;
    width: 80%;
    height: 3.2rem;
    cursor: pointer;
    `

export const ContainerLogin = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    background-color: #000000;
    height: 24rem;
    width: 27rem;
    border-radius: 15px;

`

export const Logo = styled.img`
    width: 300px;
    padding-left: 60px;
    padding-top: 70px;
    display: flex;
    align-items: center;
    justify-content: center;

`

export const InputLogin = styled.input`
    margin: 1rem;
    background-color: #000000;
    border: solid;
    border-color: #FFFFFF;
    border-radius: 10px;
    color: #FFFFFF;
    font-size: 17px;
    text-align: center;
    font-weight: bold;
    width: 80%;
    height: 3.3rem;

    ::placeholder {
       color: #FFFFFF;
   }
`
