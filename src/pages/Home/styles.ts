import styled from 'styled-components';

export const Container = styled.div`
`;

export const NotionFlexDiv = styled.div`
    width:1120px;
    margin:0 auto;
    height:100vh;

    display:flex;
    justify-content:space-between;
    align-items:center;
`;

export const NotionText = styled.div`
    h1 {
        font-size:40px;
        font-weight:700;
        line-height:40px;

    }
`;

export const NotionImage = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;

    a {
        text-decoration:none;
        color:var(--text-color-gray);
        font-size:12px;
        font-weight:100;
        line-height:10px;
    }

    img {
        width:500px;
    }
`;

export const ButtonNavigateBottom = styled.div`
    margin:10px 0;
    cursor: pointer;
    background-color:var(--bg-color-1);
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:10px 20px;
    border:2px solid var(--bg-color-1);
    border-radius:10px;
    transition:0.2s;

    p {
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

export const ContentContainer = styled.div`
    background-color:var(--bg-color-1);
`;

export const Content = styled.div`
    padding:20px 0;
    width:1120px;
    margin:0 auto;

    display:flex;
`;

export const ButtonAddNote = styled.div`
    width:150px;
    height:50px;

    cursor: pointer;
    background-color:var(--bg-color-white);
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:10px 20px;
    border:2px solid var(--bg-color-white);
    border-radius:10px;
    transition:0.2s;

    p {
        font-size:18px;
        font-weight:400;
        line-height:18px;
        color:var(--bg-color-1);
    }

    svg {
        color:var(--bg-color-1);
    }

    :hover{
        border:2px solid black;

    }

`;

export const NewNote = styled.div`

`;

export const ListNotes = styled.div`
    flex:1;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`;

export const CardNote = styled.div`
    margin:20px 0;
    width:400px;
    background-color:var(--bg-color-white);
    border-radius:5px;
    padding:20px;
`;

export const HeaderNote = styled.div`
        width:100%;
        height:35px;

        font-size:20px;
        font-weight:700;
        line-height:20px;
`;


export const BodyNote = styled.div`
    font-size:18px;
    font-weight:100;
    line-height:18px;
    margin:30px 0;
`;


export const FooterNote = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
`;

export const EdditButton = styled.div`
    width:150px;
    height:50px;

    cursor: pointer;
    background-color:var(--bg-color-yellow);
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:10px 20px;
    border:2px solid var(--bg-color-yellow);
    border-radius:10px;
    transition:0.2s;

    p {
        font-size:18px;
        font-weight:400;
        line-height:18px;
        color:var(--text-color-white);
    }

    svg {
        color:var(--bg-color-white);
    }

    :hover{
        border:2px solid black;

    }

`;

export const DeleteButton = styled.div`
    width:150px;
    height:50px;

    cursor: pointer;
    background-color:var(--bg-color-red);
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:10px 20px;
    border:2px solid var(--bg-color-red);
    border-radius:10px;
    transition:0.2s;

    p {
        font-size:18px;
        font-weight:400;
        line-height:18px;
        color:var(--text-color-white);
    }

    svg {
        color:var(--bg-color-white);
    }

    :hover{
        border:2px solid black;

    }

`;

