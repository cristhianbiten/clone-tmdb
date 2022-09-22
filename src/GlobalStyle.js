import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #101010;
    }

    a,
    li,
    h2,
    p,
    h3,
    h4,
    div {
        text-decoration: none;
        transition: .5s;
        color: #FFFFFF;
    }

    a:hover {
        color: #D3D3D3;
    }
`
