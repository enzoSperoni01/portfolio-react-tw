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
                                alt="myGames Image" />
                            <p className='font-semibold mt-9 text-xl'>
                                This was my first project! I created it in 2021. It was an internship project I had to do
                                for the programming school where I studied: Coderhouse. It was the way I learned
                                programming languages and Web layout. For this project I got a 10 as a result and entered the Top 10 students of my study group.
                            </p>
                            <p className='font-semibold mt-5 text-xl'>
                                <span className='text-lime-400'>Technologies</span>: HTML5, CSS3, Bootstrap, Flex, Grid, Responsive Design
                            </p>
                            <p className='font-semibold mt-4 text-xl'>
                                Link: <a 
                                    href="https://enzosperoni01.github.io/myGames/"
                                    target="_blank"
                                    className='text-sky-500 hover:underline'
                                    >myGames Web Site</a>
                            </p>
                            <p className='font-semibold mt-5 text-xl'>
                                Repository: <a
                                    href="https://github.com/enzoSperoni01/myGames" 
                                    target="_blank"
                                    className='text-sky-500 hover:underline'
                                    >myGames</a>
                            </p>
                        </TabPanel>
                        <TabPanel>
                            <img 
                                className='w-9/12'
                                src='../../public/assets/calu.png'
                                alt='Calu Image' />
                            <p className='font-semibold mt-9 text-xl'>
                                In my second project I wanted to make another website
                                , but it was about the world of cryptocurrencies.<br/>This site was created days after finishing myGames. 
                            </p>
                            <p className='font-semibold mt-5 text-xl'>
                                <span className='text-lime-400'>Technologies</span>: HTML5, CSS3, Flex, Grid, Responsive Design, Bootstrap
                            </p>
                            <p className='font-semibold mt-4 text-xl'>
                                Link: <a 
                                    href="https://enzosperoni01.github.io/Calu/"
                                    target="_blank"
                                    className='text-sky-500 hover:underline'
                                    >Calu Web Site</a>
                            </p>
                            <p className='font-semibold mt-5 text-xl'>
                                Repository: <a
                                    href="https://github.com/enzoSperoni01/Calu" 
                                    target="_blank"
                                    className='text-sky-500 hover:underline'
                                    >Calu</a>
                            </p>
                        </TabPanel>
                        <TabPanel>
                            <img 
                                className='w-9/12'
                                src='../../public/assets/bookify.png'
                                alt='Calu Image' />
                            <p className='font-semibold mt-9 text-xl'>
                                Here is my third project where I applied Javascript for the first time! This project I 
                                also had to design and develop for a project of the school where I studied. I also got a 
                                10 in this project and it was the beginning for me to work with a client, and soon I 
                                will start studying ReactJS.
                            </p>
                            <p className='font-semibold mt-5 text-xl'>
                                <span className='text-lime-400'>Technologies</span>: 
                                HTML5, CSS3, JavaScript, EcmaScript6, jQuery, SweetAlert
                            </p>
                            <p className='font-semibold mt-4 text-xl'>
                                Link: <a 
                                    href="https://enzosperoni01.github.io/Bookify/"
                                    target="_blank"
                                    className='text-sky-500 hover:underline'
                                    >Bookify Web Site</a>
                            </p>
                            <p className='font-semibold mt-5 text-xl'>
                                Repository: <a
                                    href="https://github.com/enzoSperoni01/Bookify" 
                                    target="_blank"
                                    className='text-sky-500 hover:underline'
                                    >Bookify</a>
                            </p>
                        </TabPanel>
                        <TabPanel>
                            <p>Mica Ganzo!</p>
                        </TabPanel>
                        <TabPanel>
                            <p className='font-semibold mt-4 text-xl'>
                                Link: <a 
                                    href="https://linkedin-clone-9b792.firebaseapp.com/"
                                    target="_blank"
                                    className='text-sky-500 hover:underline'
                                    >Linkedin Clone Web Site</a>
                            </p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </GridItem>

            <GridItem />
        </Grid>
    )
}

export default Experience;