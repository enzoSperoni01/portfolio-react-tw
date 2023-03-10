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
                    <h2 className="text-slate-100 font-sans text-left font-semibold text-4xl mb-3">
                        <span className="text-lime-400 font-mono">03.</span> Contact
                    </h2>
                    <p className='text-slate-300 font-mono text-2xl my-10'>
                        Although I’m not currently looking for any new opportunities, my inbox is always open. Whether 
                        you have a question or just want to say hi, I’ll try my best to get back to you!
                    </p>
                    <button
                        className="
                            border-2
                            border-solid
                            border-lime-400
                            font-semibold
                            px-12
                            py-3
                            rounded-md
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