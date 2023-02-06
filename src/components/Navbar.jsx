import React from 'react';

function Navbar() {
    return (
        <header>
            <nav className='
                flex
                justify-between
                items-center
                mt-5
            '>
                <div>
                    <h1 className='
                        text-slate-100
                        font-bold
                        text-4xl
                        cursor-pointer
                        ml-[50px]
                        hover:text-slate-300
                    '>
                        ES<span className='text-lime-400'>.</span></h1>
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
                        '><span className='
                            text-lime-400
                        '>01.</span> About</a>
                        <a href="#Experience" className='
                            mr-9 
                            hover:text-slate-400
                            transition-all
                            ease
                            hover:duration-300
                        '><span className='
                            text-lime-400
                        '>02.</span> Experience</a>
                        <a href="#Work" className='
                            mr-9 
                            hover:text-slate-400
                            transition-all
                            ease
                            hover:duration-300
                        '><span className='
                            text-lime-400
                        '>03.</span> Work</a>
                        <a href="#Contact" className='
                            mr-9 
                            hover:text-slate-400
                            transition-all
                            ease
                            hover:duration-300
                        '><span className='
                            text-lime-400
                        '>04.</span> Contact</a>
                    </div>

                    <a href="#">
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
                    </a>
                </div>
            </nav>
        </header>
    )
};

export default Navbar;