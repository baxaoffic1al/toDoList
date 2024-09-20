import { useContext, useState } from 'react';
import Nav from './components/Nav/Nav';
import Notes from './components/Notes/Notes';
import { Context, NoteProvider } from './context/NoteContext';
import { VscColorMode } from "react-icons/vsc";
import AddNote from './components/AddNote/AddNote';

function App() {
  return (
    <NoteProvider>
        <AppContent />
    </NoteProvider>
  );
}

export default App;

function AppContent() {
  const {darkMode , toggleTheme } = useContext(Context)
  
  return (
    <div className={`min-h-screen transition duration-700 ${darkMode ? 'bg-white text-black' : 'bg-slate-700 text-white'}`}>
      <Nav />
      

      <button onClick={toggleTheme} className={`w-14 h-14 ${darkMode ? 'bg-slate-800' : "bg-[#F3EDF7]"} ${darkMode ? 'text-white' : "text-black"} fixed bottom-2 left-2 flex items-center justify-center gap-3 py-2 px-3 rounded-xl`}>
        <VscColorMode className='text-2xl'/>
      </button>

      <Notes />
      <AddNote />
    </div>
  );
}
