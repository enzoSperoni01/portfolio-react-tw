import { Grid, GridItem } from '@chakra-ui/react';

const Contact = () => {
    const sendEmail = e => {
        e.preventDefault();
        window.location.href = 'mailto:speronienzo20@gmail.com'
    }

    return (
            <Grid id='Contact' className='content-center h-[100vh]' templateColumns={"370px 1fr 370px"}>
                <GridItem />

                <GridItem>
                    <button
                        className="
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
                        "
                        onClick={sendEmail}>Say Hello!
                    </button>
                </GridItem>

                <GridItem />
            </Grid>
    )
}

export default Contact;