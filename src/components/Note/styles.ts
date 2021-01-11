import styled from 'styled-components';

export const Content = styled.div`
    margin:20px 0;
    width:500px;
    min-height:300px;
    background-color:var(--bg-color-white);
    border:2px solid var(--bg-color-white);
    border-radius:5px;
`;

export const NoteContent = styled.div`
    padding:20px;
    width:100%;
    height:100%;

    display:flex;
    flex-direction:column;
`;
export const Header = styled.div`
    width:100%;

    input {
        margin:20px 0;
        border:0;
        width:100%;
        height:35px;

        font-size:30px;
        font-weight:700;
        line-height:30px;
    }

`;

export const Body = styled.div`
    width:100%;
    
    textarea {
        margin:10px 0;
        border:0;
        width:100%;
        height:200px;
        resize:none;

        font-size:18px;
        font-weight:100;
        line-height:18px;
    }

`;

export const Footer = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;

`;

export const ButtonSaveNote = styled.div`
    width:150px;
    height:50px;

    cursor: pointer;
    background-color:var(--bg-color-green);
    display:flex;
    align-items:center;
    padding:10px 20px;
    border:2px solid var(--bg-color-green);
    border-radius:10px;
    transition:0.2s;

    p {
        margin:0px 10px;
        font-size:18px;
        font-weight:400;
        line-height:18px;
        color:var(--text-color-white);
    }

    svg {
        color:var(--text-color-white);
    }

    :hover{
        border:2px solid black;

    }

`;

export const ButtonCancelNote = styled.div`
    width:150px;
    height:50px;

    cursor: pointer;
    background-color:var(--bg-color-red);
    display:flex;
    align-items:center;
    padding:10px 20px;
    border:2px solid var(--bg-color-red);
    border-radius:10px;
    transition:0.2s;

    p {
        margin:0px 10px;
        font-size:18px;
        font-weight:400;
        line-height:18px;
        color:var(--text-color-white);
    }

    svg {
        color:var(--text-color-white);
    }

    :hover{
        border:2px solid black;

    }

`;