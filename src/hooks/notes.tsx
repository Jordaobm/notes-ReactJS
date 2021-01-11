import React, { createContext, useCallback, useContext, useState } from 'react';

interface Note {
    title: string;
    body: string;
}

interface NoteEdit {
    id: number;
    title?: string;
    body?: string;
}

interface NoteContextData {
    showNote: boolean;
    setShowNote(value: boolean): void;
    edditNoteState: NoteEdit | null;
    setEdditNoteState(data: NoteEdit): void


    addNote(title: string, body: string): void;
    edditNote(id: number, title: string, body: string): void;
    deleteNote(id: number): void;
    listNote(): Note[]

}

const NoteContext = createContext<NoteContextData>({} as NoteContextData)

const NoteProvider: React.FC = ({ children }) => {

    const [notes, setNotes] = useState<Note[]>(() => {
        const localNotes = localStorage.getItem('@Notes:notes');

        if (localNotes) {
            return JSON.parse(localNotes);
        }

        return []
    });

    const addNote = useCallback((title: string, body: string) => {
        const note = {
            title,
            body
        }
        setShowNote(false)
        setNotes([...notes, note])
    }, [notes])

    const edditNote = useCallback((id: number, title: string, body: string) => {
        setShowNote(false)
        setEdditNoteState(null)
        notes[id] = {

            title,
            body
        }
    }, [notes])

    const deleteNote = useCallback((id: number) => {
        const deleteNotes = notes.filter((note, index) => index !== id)
        setNotes(deleteNotes)
    }, [notes])

    const listNote = useCallback(() => {
        return notes
    }, [notes])

    localStorage.setItem('@Notes:notes', JSON.stringify(notes))

    const [showNote, setShowNote] = useState(false);

    const [edditNoteState, setEdditNoteState] = useState<NoteEdit | null>(null);


    return (
        <NoteContext.Provider value={{ showNote, setShowNote, addNote, listNote, edditNoteState, setEdditNoteState, edditNote, deleteNote }}>{children}</NoteContext.Provider>
    )
}

function useNote() {
    const context = useContext(NoteContext);
    return context;
}

export { useNote, NoteProvider };