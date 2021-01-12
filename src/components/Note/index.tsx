import React, { useCallback, useState } from 'react';
import { Content, Header, NoteContent, Body, Footer, ButtonSaveNote, ButtonCancelNote } from './styles';
import { BiSave } from 'react-icons/bi';
import { GiCancel } from 'react-icons/gi';
import { useNote } from '../../hooks/notes';

interface NoteProps {
    showNote: boolean
}

const Note: React.FC<NoteProps> = () => {

    const { setShowNote, showNote, addNote, edditNoteState, edditNote } = useNote();

    const [title, setTitle] = useState('');

    const [body, setBody] = useState('');

    if (edditNoteState) {
        return (
            <Content show={showNote}>
                <NoteContent>
                    <Header>
                        <input defaultValue={edditNoteState.title} name="title" type="text" placeholder="Um título legal" onBlur={(e) => setTitle(e.target.value)} />
                    </Header>
                    <Body>
                        <textarea defaultValue={edditNoteState.body} name="body" placeholder="Uma anotação incrível" onBlur={(e) => setBody(e.target.value)} />
                    </Body>
                    <Footer>
                        <ButtonSaveNote onClick={() => edditNote(edditNoteState.id, title, body)}>
                            <BiSave />
                            <p>Salvar</p>
                        </ButtonSaveNote>
                        <ButtonCancelNote onClick={() => setShowNote(false)}>
                            <GiCancel />
                            <p>Cancelar</p>
                        </ButtonCancelNote>
                    </Footer>
                </NoteContent>
            </Content>
        )
    }

    return (
        <Content show={showNote}>
            <NoteContent>
                <Header>
                    <input name="title" type="text" placeholder="Um título legal" onBlur={(e) => setTitle(e.target.value)} />
                </Header>
                <Body>
                    <textarea name="body" placeholder="Uma anotação incrível" onBlur={(e) => setBody(e.target.value)} />
                </Body>
                <Footer>
                    <ButtonSaveNote onClick={() => addNote(title, body)}>
                        <BiSave />
                        <p>Salvar</p>
                    </ButtonSaveNote>
                    <ButtonCancelNote onClick={() => setShowNote(false)}>
                        <GiCancel />
                        <p>Cancelar</p>
                    </ButtonCancelNote>
                </Footer>

            </NoteContent>
        </Content>

    )

    return <p></p>


}

export default Note;