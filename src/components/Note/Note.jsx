import React, { useContext } from 'react'
import Card from '../../ui/Card/Card'
import { FaPencil } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import { Context } from '../../context/NoteContext';


function Note({note}) {
    const { lang, darkMode, editNote , delNote } = useContext(Context)
  return (
    <Card classes={`card w-[100%] ${darkMode ? 'bg-[#F3EDF7] text-black' : 'bg-slate-800 text-white'} grid transition duration-700 p-3 rounded-2xl mt-5 mb-5`}>
        <div className="note-info flex  justify-between mb-5">
            <h3 className='note-title font-semibold'>{note.title}</h3>
            <span className='note-time text-[14px] text-gray-500'>{note.time}</span>
        </div>
        <p className='note-text text-[14px] font-normal mb-4'>{note.text}</p>
        <div className="note-buttons flex items-end justify-end mt-auto gap-3 max-lg:flex-col max-lg:flex-wrap">
            <button onClick={() => editNote(note)} className={`max-[350px]:text-[12px] delate flex items-center justify-center ${darkMode ? 'bg-[#F3EDF7] text-red-500' : 'hover:bg-violet-300 text-violet-500'}  hover:bg-violet-300 hover:text-violet-500 p-2 rounded-lg `}>
            <FaPencil  className={`${darkMode ? 'text-violet-500' : 'hover:bg-violet-300 text-violet-500'} hover:bg-violet-300 hover:text-violet-500 mr-2`}/>
            <p className={`${darkMode ? 'text-violet-500' : 'hover:bg-violet-300 text-violet-500'}`}>{lang.edit}</p>
            </button>
            <button onClick={() => delNote(note.id)} className={`max-[350px]:text-[12px] delate flex items-center justify-center ${darkMode ? 'bg-[#F3EDF7] text-red-500' : 'hover:bg-red-300 text-red-500'} hover:bg-red-300 hover:text-red-500 p-2 rounded-lg `}>
                <FaTrashAlt  className={`${darkMode ? 'text-red-500' : 'hover:bg-red-300 text-red-500'} mr-2`} />
                <p className={`${darkMode ? 'text-red-500' : 'hover:bg-red-300 text-red-500'}`}>{lang.delate}</p>
            </button>
        </div>
    </Card>
  )
}

export default Note