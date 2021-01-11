import React, { useCallback } from 'react';
import notion from '../../assets/notion.jpg';
import { FiArrowDownCircle, FiDelete } from 'react-icons/fi';
import { MdAdd } from 'react-icons/md';
import { FiEdit2 } from 'react-icons/fi';


import { BodyNote, ButtonAddNote, ButtonNavigateBottom, CardNote, Container, Content, ContentContainer, DeleteButton, EdditButton, FooterNote, HeaderNote, ListNotes, NewNote, NotionFlexDiv, NotionImage, NotionText } from './styles';
import Note from '../../components/Note';
import { useNote } from '../../hooks/notes';

const Home: React.FC = () => {

    const { setShowNote, showNote, listNote, setEdditNoteState, deleteNote } = useNote();

    const notes = listNote();

    const handleEdditShow = useCallback((index: number, title: string, body: string) => {
        setShowNote(true)
        setEdditNoteState({
            id: index,
            title,
            body,
        })

    }, [showNote])

    return (

        <>
            <Container>
                <NotionFlexDiv>
                    <NotionText>
                        <h1>Your Notes</h1>
                        <ButtonNavigateBottom>
                            <FiArrowDownCircle size={20} />
                            <p>Start rigth now</p>
                        </ButtonNavigateBottom>
                    </NotionText>
                    <NotionImage>
                        <img src={notion} alt="vector notes" />
                        <a href='https://www.freepik.com/vectors/business'>Business vector created by jcomp - www.freepik.com</a>
                    </NotionImage>
                </NotionFlexDiv>
            </Container>

            <ContentContainer>
                <Content>
                    <NewNote>
                        <ButtonAddNote onClick={() => setShowNote(true)}>
                            <MdAdd size={20} />
                            <p>Add Note</p>
                        </ButtonAddNote>
                        <Note showNote={showNote} />
                    </NewNote>
                    <ListNotes>
                        {notes.map((note, index) => (
                            <CardNote>
                                <HeaderNote>
                                    {note.title}
                                </HeaderNote>
                                <BodyNote>
                                    {note.body}
                                </BodyNote>
                                <FooterNote>
                                    <EdditButton onClick={() => handleEdditShow(index, note.title, note.body)}>
                                        <FiEdit2 size={20} />
                                        <p>Editar</p>
                                    </EdditButton>
                                    <DeleteButton onClick={() => deleteNote(index)}>
                                        <FiDelete size={20} />
                                        <p>Deletar</p>
                                    </DeleteButton>
                                </FooterNote>
                            </CardNote>
                        ))}
                    </ListNotes>
                </Content>
            </ContentContainer>
        </>



    )
}
export default Home;