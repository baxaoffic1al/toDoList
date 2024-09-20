import React, { useCallback, useContext, useEffect, useState } from 'react'
import Card from '../../ui/Card/Card'
import { FaPenToSquare } from "react-icons/fa6";
import Button from '../../ui/Button/Button';
import { Context } from '../../context/NoteContext';

function AddNote() {
    const { lang, darkMode, updateNote, addNote, noteEdit, editNote, active, setActive, title, setTitle , text, setText } = useContext(Context)
    

    const toggleActive = useCallback(() => {
        setActive(!active)
        setTitle("")
        setText("")
    }, [active])


    const onSubmit = (e) => {
        e.preventDefault()
        if (title.trim().length > 0 || text.trim().length > 0) {
            const newNote = {
                id: new Date().getTime().toString(),
                title,
                text,
                time: new Date().toLocaleTimeString()
            }
            if (noteEdit.edit) {
                updateNote(noteEdit.item.id, newNote)
            } else {
                addNote(newNote)
            }
            setActive(!active)
            setText("")
            setTitle("")

        }

    }

    return (
        <>
            <Card classes={`flex items-center justify-center add-note fixed bg-black/50 transition duration-500  left-0 bottom-[-100%] w-full h-full ${active ? 'top-0 opacity-1 z-[1]' : 'opacity-0 z-[-1]'}`}>
                <Card classes={`card ${darkMode ? 'bg-[#F3EDF7]' : 'bg-slate-700 text-white'} w-[320px] p-4 rounded-xl`}>
                    <form onSubmit={onSubmit} className={`flex flex-col`}>
                        <h2 className='title text-2xl text-center'>{lang.addTitle}</h2>
                        <label className={`add-label text-sm flex ${darkMode ? 'bg-[#E7E0EC]' : 'bg-slate-800 text-white'} flex-col py-2 px-4 text-violet-500  rounded-t-xl mt-4`}>
                            {lang.inputTitle}
                            <input type="text" className={`text-black focus:outline-none ${darkMode ? 'bg-[#E7E0EC]' : 'bg-slate-800 text-white'}  text-base `} placeholder={lang.inputTitle} value={title}  onChange={(e) => setTitle(e.target.value)} />
                        </label>
                        <label className={`add-label text-sm flex ${darkMode ? 'bg-[#E7E0EC]' : 'bg-slate-800 text-white'} flex-col py-2 px-4  text-violet-500 rounded-t-xl mt-4`}>
                            {lang.inputContent}
                            <input type="text" className={`text-black focus:outline-none ${darkMode ? 'bg-[#E7E0EC]' : 'bg-slate-800 text-white'} text-base `} placeholder={lang.inputContent} value={text}  onChange={(e) => setText(e.target.value)} />
                        </label>
                        <div type="button" className='mt-5 flex items-center justify-end gap-3'>
                            <button type='button' onClick={toggleActive} className={`p-3 text-red-600 rounded-xl hover:bg-red-300 hover:text-red-500`}>{lang.cancel}</button>
                            <button type='submit' className={`text-violet-600  p-3 rounded-xl hover:bg-violet-300 hover:text-violet-500`}>{noteEdit.edit ? lang.editBtn : lang.addBtn}</button>
                        </div>
                    </form>
                </Card>
            </Card>
            <Button click={toggleActive} classes={`add-btn w-14 h-14  fixed bottom-2 right-3 flex items-center justify-center gap-3 py-2 px-3 rounded-xl ${darkMode ? 'bg-[#F3EDF7]' : "bg-slate-800"} ${darkMode ? 'text-violet-500' : "text-white"}`}>
                <FaPenToSquare className='text-2xl'/>
            </Button>
        </>
    )
}

export default AddNote




