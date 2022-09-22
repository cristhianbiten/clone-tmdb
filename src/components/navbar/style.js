import styled from "styled-components";

export const StylesNavbar = styled.nav`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem 2rem;
        background-color: #101010;
        height: 6rem;

    ul {
        align-items: center;
        display: flex;
    }

    li {
        list-style-type: none;
        padding: 0 20px;
        font-size: 16pt;
        text-align: center;
        font-weight: bold;
    }

    form {
        display: flex;
        gap: .5rem;  
    }

    input {
        padding: 0.2rem 0.8rem;
        border-radius: 4px;
        border: none;
    }

    form button {
        background-color: #101010;
        border: none;
        color: tr;
        padding: .3rem;
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        cursor: pointer;
        transition: .3s;
    }
`

export const BarraDeBusca = styled.div`
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;

    form {
        padding: .2rem;
    }

    button {
        background-color: #101010;
        border: none;
        color: #FFFFFF;
        padding: .4rem;
        font-size: 1.4rem;
        cursor: pointer;
        transition: .3s;
    }
`

export const ModalOpen = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    button {
        font-size: 25px;
        background-color: #101010;
        font-weight: bold;
        color: red;
    }
`

export const CustomStyles = styled.div`
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 10rem;
        height: 4rem;
        background-color: #101010;
        overflow: hidden;
        top: 85%;
        right: -10%;
        font-size: 14px;
`
