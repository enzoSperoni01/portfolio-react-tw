import React from 'react';

function Navbar() {
    return (
        <header>
            <nav className='
                flex
                justify-between
                items-center
                mt-4
            '>
                <div>
                    <h1 className='
                        text-white
                        font-bold
                        text-4xl
                        cursor-pointer
                        ml-[50px]
                        hover:text-gray-300
                    '>
                        ES.
                    </h1>
                    {/* Logo */}
                </div>

                <div className='
                    flex
                    justify-around
                    items-center
                    text-lg
                '>
                    <div className='
                        font-semibold
                        text-slate-300
                        font-mono
                        text-lg
                    '>
                        <a href="#About" className='
                            mr-9 
                            hover:text-slate-400
                            transition-all
                            ease
                            hover:duration-300
                        '>About</a>
                        <a href="#Experience" className='
                            mr-9 
                            hover:text-slate-400
                            transition-all
                            ease
                            hover:duration-300
                        '>Experience</a>
                        <a href="#Work" className='
                            mr-9 
                            hover:text-slate-400
                            transition-all
                            ease
                            hover:duration-300
                        '>Work</a>
                        <a href="#Contact" className='
                            mr-9 
                            hover:text-slate-400
                            transition-all
                            ease
                            hover:duration-300
                        '>Contact</a>
                    </div>

                    <button className='
                        border-2
                        border-solid
                        border-lime-400
                        font-semibold
                        px-6
                        py-2
                        rounded-md
                        mr-10
                        ml-14
                        transition-all
                        ease
                        hover:duration-500
                        text-lime-400
                        hover:bg-green-200/20
                    '>
                        Resume
                    </button>
                </div>
            </nav>
        </header>
    )
};

export default Navbar;