import { Grid, GridItem } from '@chakra-ui/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import '../styles/index.css'

const About = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <Grid id='About' className='content-center h-[100vh]' templateColumns={"370px 1fr 370px"}>
            <GridItem />

            <GridItem>
                <h2 className="text-slate-100 font-sans font-semibold text-4xl mb-3"
                    data-aos="fade-up" data-aos-duration="1500"
                >
                    <span className="text-lime-400 font-mono">01.</span> About Me
                </h2>
                <div className='flex my-6'
                    data-aos="fade-up" data-aos-duration="2300"
                >
                    <div>
                        <p className='text-xl mr-28 mb-10 text-slate-300 font-semibold text-left'>
                            Hello! My name is <span className='text-lime-400 font-mono'>Enzo Speroni</span> and I really enjoy creating things with code that can live on the Internet. In the year 2021, I started to study in a self-taught way, then I had a training in the Coderhouse academy together with Platzi courses. I realized the creative and work possibilities that this world offers, and I decided to focus on it. I managed to expand my stack of knowledge and today my favorite tool in the world of Web Development is <span className='text-teal-300 font-mono'>React</span>!
                        </p>
                        <p className='text-xl mr-28 text-slate-300 font-semibold text-left'>
                            I worked on a few projects, worked for <span className='text-lime-400'>two clients</span> independently with partners, from whom I learned a lot. Today my <span className='font-mono font-semibold text-lime-400'>goal</span> is to get to work in the industry, not only to expand my knowledge in React and other tools, but also to apply the knowledge I gained all this time.
                        </p>
                    </div>

                    <img className='' src="https://s3.amazonaws.com/freecodecamp/running-cats.jpg" alt="Cats" />
                </div>
            </GridItem>

            <GridItem />
        </Grid>
    )
}

export default About