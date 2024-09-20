import React, { useContext, useEffect, useRef, useState } from 'react'
import ruLang from "../../assets/ru.svg"
import uzLang from "../../assets/uz.svg"
import { IoMdSearch, IoIosArrowDropleft, IoIosCloseCircle } from "react-icons/io";
import Card from '../../ui/Card/Card';
import Button from '../../ui/Button/Button';
import { Context } from '../../context/NoteContext';
import { VscColorMode } from "react-icons/vsc";

const Nav = () => {
    const {lang, icon, changeLang, darkMode , toggleTheme, search, searchText, setSearch} = useContext(Context)
    const [active, setActive] = useState(false)
    const ref = useRef(null)
    

    const backHome = () => {
        setActive(!active)
        setSearch("")
    }

    


    useEffect(() => {
        if (active) {
            ref.current.focus()
        }
    }, [active])




    return (
        <>
            <Card classes={`nav ${darkMode ? 'bg-[#F3EDF7]' : "bg-slate-800" } shadow-xl w-[100%] p-3 transition duration-700`}>
                <div className="container mx-auto head-languages flex justify-between items-center">
                    <button onClick={() => changeLang()} className="flex items-center active:animate-pulseSlow transition-all delay-300">
                        {!icon ? <img src={ruLang} className="mr-2" alt="ru" /> : <img src={uzLang} className="mr-2" alt="uz" />}
                        {!icon ? <p className={`${darkMode ? 'text-black' : "text-white"}`}>RU</p> : <p className={`${darkMode ? 'text-black' : "text-white"}`}>UZ</p>}
                    </button>
                    <h2 className={`text-2xl font-normal ${darkMode ? 'text-black' : "text-white"} font-roboto`}>{lang.navTitle}</h2>
                    <Button>
                        <IoMdSearch className={`text-3xl ${darkMode ? 'text-black' : "text-white"}`} onClick={() => backHome()} />
                    </Button>
                    
                </div>
            </Card>
            
            {active &&
                <Card classes={`search ${darkMode ? 'bg-[#F3EDF7]' : "bg-slate-800" } shadow-xl p-4 ${active ? `transform-y-[-100%]` : `transform-y-0`} transition delay-700 duration-700 fixed top-0 left-0 w-full`}>
                    <div className="container mx-auto flex justify-between items-center">
                        <Button>
                            <IoIosArrowDropleft className={`text-3xl ${darkMode ? 'text-black' : "text-white"}`} onClick={() => setActive(!active)} />
                        </Button>
                        <input ref={ref}
                            type="text"
                            value={search}
                            onChange={(e) => searchText(e)}
                            className={`focus:outline-none flex items-center h-4 bg-inherit ${darkMode ? 'text-black' : "text-white"}`}
                            placeholder={lang.search} />
                        <Button>
                            <IoIosCloseCircle className={`text-3xl ${darkMode ? 'text-black' : "text-white"}`} onClick={() => setSearch("")} />
                        </Button>
                    </div>
                </Card>
            }


            {/* <Card classes={`search bg-[#F3EDF7] shadow-xl p-4 fixed top-0 left-0 w-full`}>
        <div className="container mx-auto flex justify-between">
        <Button>
        <IoIosArrowDropleft className='text-3xl'/>
        </Button>
            <input type="text" className='focus:outline-none input bg-inherit' placeholder={lang.search} />
        <Button>
        <IoIosCloseCircle className='text-3xl'/>
        </Button>
        </div>
    </Card> */}
        </>
    )
}

export default Nav