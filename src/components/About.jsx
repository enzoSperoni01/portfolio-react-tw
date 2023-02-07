import { Grid, GridItem } from '@chakra-ui/react';

const About = () => {
    return (
        <Grid className='content-center' templateColumns={"370px 1fr 370px"}>
            <GridItem />

            <GridItem>
                <h2 className="text-slate-100 font-sans font-semibold text-3xl">
                    <span className="text-lime-400 font-mono">01.</span> About Me
                </h2>

                <div className='flex my-6'>
                    <p className='text-xl mr-28 text-slate-300 font-semibold text-left'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis dicta nihil, earum animi incidunt quo nemo vel aliquid asperiores ab necessitatibus eligendi eum omnis, veritatis explicabo, modi cum ea. Quibusdam! el aliquid asperiores ab necessitatibus eligendi eum omnis, veritatis explicabo, modi cum ea. Quibusdam! el aliquid asperiores ab necessitatibus eligendi eum omnis, veritatis explicabo, modi cum ea. Quibusdam! el aliquid asperiores ab necessitatibus eligendi eum omnis, veritatis explicabo, modi cum ea. Quibusdam!
                    </p>

                    <img className='' src="https://s3.amazonaws.com/freecodecamp/running-cats.jpg" alt="Cats" />
                </div>
            </GridItem>

            <GridItem />
        </Grid>
    )
}

export default About