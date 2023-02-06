import React from 'react'

function Home() {
    return (
        <div className='grid grid-cols-[400px_minmax(900px,_1fr)_400px] content-center'>
            <div></div>
            <div className='
                flex
                flex-col
                justify-center
                items-left
                content-center
                h-[85vh]
            '>
                <p className='
                    text-lime-400
                    font-mono
                    font-semibold
                    text-3xl
                '>Hi, my name is</p>
                <h1 className='
                    text-8xl
                    text-slate-100
                    font-bold
                '>Enzo Speroni.</h1>
                <h2 className='
                    text-6xl
                    text-slate-400
                    font-bold
                    mt-5
                '>I love building  things for the web.</h2>
                <p className='
                    text-2xl
                    mt-7
                    font-medium
                    text-slate-400
                '>
                    I am a <span className='text-lime-400'>FrontEnd Developer</span>, who is in specializing in <span className='text-teal-300'>React</span> and its
                    environment. I love User Interface design. Currently, I am focused on looking 
                    for opportunities that will make me grow within the stack of technologies that
                    I manage.
                </p>
            </div>
            <div></div>
        </div>
    )
}

export default Home;