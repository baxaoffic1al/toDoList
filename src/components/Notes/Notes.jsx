import React, { useContext, useState } from 'react'
import { ru, uz } from "../../language"
import { FaTableCells, FaListUl } from "react-icons/fa6";
import { Context } from '../../context/NoteContext';
import Note from '../Note/Note';

const Notes = () => {
    const { lang, darkMode, toggleTheme , search, notes } = useContext(Context)
    const [notesType, setNotesType] = useState(true)
    
    
    return (
        <div className='container mx-auto'>
            <div className="container all-notes flex items-center justify-around mt-10">
                <h2 className="title text-xl">
                    {lang.notesTitle}
                </h2>
                <button className={`${darkMode ? 'bg-[#F3EDF7] text-violet-600' : 'bg-slate-800 text-white'} transition duration-700 shadow-[0px_1px_3px_0px_#0000004D] flex items-center justify-center gap-3 py-2 px-3 rounded-xl`} onClick={() => setNotesType(!notesType)}>
                    {notesType ? <><FaTableCells /> {lang.notesType1}  </> : <><FaListUl /> {lang.notesType2}</>}
                </button>
            </div>
            {notesType ? <div className="notes grid grid-cols-1 gap-5 max-md:px-5">
                {notes.filter((note) => {
                    if (search === "" || search === null || search === undefined) {
                        return note
                    }else if(note.title.toString().toLowerCase().includes(search.toLowerCase())){
                        return note
                    }
                }).map((note) => (
                    <Note key={note.id} note={note} className={`last:mb-5`}/>
                ))
                }
            </div>
            :
            <div className={`notes grid grid-cols-3 gap-5 max-md:grid-cols-2 max-md:px-5 max-[435px]:grid-cols-1 max-[435px]:px-20`}>
                {notes.filter((note) => {
                    if (search === "" || search === null || search === undefined) {
                        return note
                    }else if(note.title.toString().toLowerCase().includes(search.toLowerCase())){
                        return note
                    }
                }).map((note) => (
                    <Note key={note.id} note={note} className={`last:mb-20`}/>
                ))
                }
            </div>}
        </div>
    )
}

export default Notes



