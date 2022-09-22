import styled from "styled-components";

export const BotaoRoxo = styled.button`
        background-color: #4C1691;
        color: #FFFFFF;
        cursor: pointer;
        width: 6rem;
        height: 2.5rem;
        border-radius: 8px;
        margin-top: 1rem;
        margin-bottom: 1rem;
        border-style: solid;
        border-color: #4C1691;
        font-weight: bold;
`
export const SairModal = styled.button`
        background-color: #101010;
        font-size: 22px;
        color: #FFFFFF;
        cursor: pointer;
        width: 22px;
        margin-right: 10px;
        border: none;
`

export const Info = styled.div`
        font-weight: bold;
        margin-bottom: 0.8rem;
        font-size: 12px;
`

export const Overview = styled.p`
        font-style: italic;
        font-weight: bold;
`

export const ImagemPoster = styled.img`
        margin: auto;
        border-radius: 12px;
        height: 60%;
`

export const Card = styled.div`
        display: inline-block;
        width: 227px;
        cursor: pointer;
        transform: scale(0.9);
    &:hover {
        transform: scale(1);
        transition: all ease 0.2s;
    }
`

export const Imagem = styled.div`
        display: flex;
        align-items: flex-start;
        justify-content: flex-end;

    img {
        width: 227px;
        border-radius: 5px;
    }
`
export const ImagemNota = styled.div`
        position: absolute;
        border-color: green;
        border: 2rem;
        border-radius: 0.3rem;
        background-color: ${props =>
                props.average > 7 ? 'green' : props.average <= 5 ? 'red' : '#ffd700'};
        text-align: center;
        width: 30px;
        font-weight: bold;
        font-size: 15px;
        padding: 0.2rem
  `
