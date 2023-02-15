import { Grid, GridItem } from '@chakra-ui/react';

const Experience = () => {
    return (
        <Grid id='Experience' className='content-center h-[80vh]' templateColumns={"370px 1fr 370px"}>
            <GridItem />

            <GridItem>
                <h2 className="text-slate-100 font-sans font-semibold text-3xl mb-3">
                        <span className="text-lime-400 font-mono">02.</span> Experience
                </h2>
                {/* Content */}
            </GridItem>

            <GridItem />
        </Grid>
    )
}

export default Experience;