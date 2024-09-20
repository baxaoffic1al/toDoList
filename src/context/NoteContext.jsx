import React, { createContext, useEffect, useState } from "react";
import { ru, uz } from "../../src/language"
const Context = createContext()
const NoteProvider = ({ children }) => {

    const getLocalStorage = () => {
        let notes = localStorage.getItem("notes")
        if (notes) {
            return notes = JSON.parse(localStorage.getItem("notes"))
        } else {
            return []
        }
    }

    const [active, setActive] = useState(false)
    const [lang, setLang] = useState(ru)
    const [icon, setIcon] = useState(true)
    const [darkMode, setDarkMode] = useState(true);
    const [search, setSearch] = useState("")
    const [noteEdit, setNoteEdit] = useState({ item: {}, edit: false })
    const [notes, setNotes] = useState(getLocalStorage);
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")




    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
    }, [notes])



    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };


    const changeLang = () => {
        setLang(icon ? uz : ru)
        setIcon(!icon)
    }

    const searchText = (e) => {
        setSearch(e.target.value)
    }

    const editNote = (note) => {
        setNoteEdit({
            item: note,
            edit: true
        }),
        setActive(!active)
        setTitle(note.title)
        setText(note.text)

    }
    const delNote = (id) => {
        setNotes(notes.filter((note) => note.id !== id))
    }

    const addNote = (newNote) => {
        setNotes([newNote, ...notes])
    }

    const updateNote = (id, update) => {
        setNotes(notes.map((item) => (item.id === id ? update : item)))
        setNoteEdit({
            item: {},
            edit: false
        })
    }

    return (
        <Context.Provider value={{
            notes,
            lang,
            icon,
            changeLang,
            ru,
            uz, 
            darkMode, 
            toggleTheme, 
            search, 
            searchText, 
            editNote, 
            setSearch, 
            noteEdit, 
            delNote, 
            updateNote,
            addNote, 
            active, 
            setActive, 
            title, 
            setTitle, 
            text, 
            setText
        }}>
            {children}
        </Context.Provider>
    )
}

export { Context, NoteProvider }
