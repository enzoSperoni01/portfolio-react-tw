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
                        hover:text-gray-200
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
                    '>
                        <a href="#About" className='mr-9'>About</a>
                        <a href="#Experience" className='mr-9'>Experience</a>
                        <a href="#Work" className='mr-9'>Work</a>
                        <a href="#Contact" className='mr-9'>Contact</a>
                    </div>

                    <button className='
                        border-[1px]
                        border-solid
                        border-green-400
                        px-5
                        py-2
                        rounded-md
                        mr-10
                        ml-14
                        transition-all
                        ease
                        hover:duration-700
                        text-green-400
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