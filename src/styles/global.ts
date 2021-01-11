import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: 'Roboto', sans-serif;
    }

    textarea:focus, input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
} 

    :root{
        --bg-color-1:#6E2FF0;
        --bg-color-2:#DF25F8;
        --bg-color-3:#9021D9;
        --bg-color-4:#2C21D9;
        --bg-color-white:white;
        --bg-color-green:green;
        --bg-color-red:red;
        --bg-color-yellow:yellow;

        --text-color-white:white;
        --text-color-gray:#ccc;
        --text-color-black:black;
    }
`;