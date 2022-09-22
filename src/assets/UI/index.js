import styled from "styled-components";

export const Container = styled.div`
    margin: 1rem 1.5rem 1rem;

    h2 {
        color: #FFFFFF;
        font-size: 1.5rem;
        text-align: left;
        margin: 1rem 2.5rem 0.5rem;   
    }

`
export const ListArea = styled.div`
        overflow-x: auto;
        scroll-behavior: smooth;
        overflow-y: hidden;
        transition: height 0.5s linear;
        margin: 1rem;
        margin-top: 0;

    &::-webkit-scrollbar {
        height: 10px;
        border: 1px solid  grey;
        border-radius: 8px;
        background-color: grey;
        
    }

    &::-webkit-scrollbar-thumb {
        background-color: #FFFFFF;
        border-radius: 6px;
        width: 10px;
    }

`

export const MovieContainer = styled.div`
        display: flex;
`

export const Logo3035 = styled.img`
        width: 180px;
        padding: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;

`