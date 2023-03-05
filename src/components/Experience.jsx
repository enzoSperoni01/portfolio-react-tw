import { Grid, GridItem } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

const Experience = () => {
    return (
        <Grid id='Experience' className='content-center h-[80vh]' templateColumns={"370px 1fr 370px"}>
            <GridItem />

            <GridItem>
                <h2 className="text-slate-100 font-sans font-semibold text-4xl mb-3">
                    <span className="text-lime-400 font-mono">02.</span> Experience
                </h2>
                
                <Tabs 
                    className='text-white'>
                    <TabList 
                        my='2em'
                        className='text-2xl font-bold'
                    >
                        <Tab _selected={{backgroundColor:'rgb(132 204 22)'}} 
                            className="p-5 hover:bg-lime-500 rounded-3xl hover:duration-500">myGames</Tab>

                        <Tab _selected={{backgroundColor:'rgb(132 204 22)'}}
                            className="p-5 hover:bg-lime-500 rounded-3xl hover:duration-500 ml-24">Calu</Tab>

                        <Tab _selected={{backgroundColor:'rgb(132 204 22)'}}
                            className="p-5 hover:bg-lime-500 rounded-3xl hover:duration-500 ml-24">Bookify</Tab>

                        <Tab _selected={{backgroundColor:'rgb(132 204 22)'}}
                            className="p-5 hover:bg-lime-500 rounded-3xl hover:duration-500 ml-24">Mica Ganzo</Tab>

                        <Tab _selected={{backgroundColor:'rgb(132 204 22)'}}
                            className="p-5 hover:bg-lime-500 rounded-3xl hover:duration-500 ml-24">Linkedin Clone</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <p>myGames!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>Calu!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>Bookify!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>Mica Ganzo!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>Linkedin Clone!</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </GridItem>

            <GridItem />
        </Grid>
    )
}

export default Experience;