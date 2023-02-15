import { Link } from 'react-scroll';

const Navbar = () => {
    const menuItems = [
        {
            id: 1,
            title: "About"
        },
        {
            id: 2,
            title: "Experience"
        },
        {
            id: 3,
            title: "Work"
        },
        {
            id: 4,
            title: "Contact"
        },
    ]

    const refreshPage = () => {
        window.location.reload(false);
    }

    return (
        <header className='bg-[#0A192F]/10 backdrop-blur-lg py-4 px-8 w-full fixed top-0 z-50'>
            <nav className='
                flex
                justify-between
                items-center
            '>
                <div onClick={refreshPage}>
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
                    <ul className='flex font-semibold text-slate-300 font-mono text-lg'>
                        {menuItems.map( item => (
                            <li key={item.id}>
                                <Link to={item.title} smooth={true} offset={200} duration={500} className='mr-9  hover:text-slate-400 cursor-pointer transition-all ease hover:duration-300'>
                                    <span className='text-lime-400'>0{item.id}.</span> { item.title }
                                </Link>
                            </li>
                        ))}
                    </ul>
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