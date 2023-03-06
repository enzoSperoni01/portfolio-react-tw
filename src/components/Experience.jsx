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
                            <img 
                                className='w-9/12'
                                src="../../public/assets/myGames.jpg" 
                                alt="myGames" />
                            <p className='font-semibold mt-9 text-xl'>
                                This was my first project! I created it in 2021. It was an internship project I had to do
                                for the programming school where I studied: Coderhouse. It was the way I learned
                                programming languages and Web layout. For this project I got a 10 as a result and entered the Top 10 students of my study group.
                            </p>
                            <p className='font-semibold mt-5 text-xl'>
                                <span className='text-lime-400'>Technologies</span>: HTML5, CSS3, Bootstrap, Flex, Grid, Responsive Design
                            </p>
                            <p className='font-semibold mt-9 text-xl'>
                                Repository: <a
                                    href="https://github.com/enzoSperoni01/myGames" 
                                    target="_blank"
                                    className='text-sky-500 hover:underline'
                                    >myGames</a>
                            </p>
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