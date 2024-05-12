import React, { useEffect } from 'react'
import Cards from "../Components/MainDashboardComponents/Cards";
import Pie from "../Components/MainDashboardComponents/Pie";
// import ImageBox from "../Components/MainDashboardComponents/ImageBox";
// import orangewave from "./orangewave.jpg"
import greenwaves from "./greenwaves.jpg"
import './MainDashboard.css';
import { Typography, Box } from '@mui/material';
import Footer from '../Components/Footer';
import FAQ from '../Components/FAQ';
import Divider from '@mui/material/Divider';
import Highlights from '../Components/MainDashboardComponents/Highlights';

const MainDashboard = () => {
    return (
        <div className="main-container">

            <Box className="centered-text  "  >

                <Typography className="big-text animated-header" fontSize={110} mt={8} >
                    <span className="wide-text">    UNLOCK SENTIMENTAL</span>
                </Typography>

                <Typography className="big-text animated-header2" fontSize={110} mt={-5} >
                    <span className="wide-text">POWER OF TEXT</span>
                </Typography>
            </Box>

            <Box className='textImageWrapper'>
                {/* flex div hai */}
                <Box className="text">
                    <Typography variant="h4" fontFamily="'Montserrat', sans-serif" sx={{ color: 'white' }}>Sentiment Analysis</Typography>
                    <Typography variant="body1" fontFamily="'Nunito', sans-serif" sx={{ color: 'white' }}>
                        Sentiment analysis, also known as opinion mining, is a natural
                    </Typography>
                    <Typography variant="body1" fontFamily="'Nunito', sans-serif" sx={{ color: 'white' }}>
                        language processing technique that determines the sentiment or emotional tone of text, such as positive, negative, or neutral.
                    </Typography>
                    <Typography variant="body1" fontFamily="'Nunito', sans-serif" sx={{ color: 'white' }}>
                        It is widely used to gain insights from user reviews, social media posts, and customer feedback.
                    </Typography>
                    <Typography variant="body1" fontFamily="'Nunito', sans-serif" sx={{ color: 'white' }}>
                        Sentiment analysis has applications in various fields, including marketing, customer service, and market research.
                    </Typography>
                </Box>
                <Box className="image-container" ml={2} >
                    {/* <img src={orangewave} alt="Image" width={400} height={250} /> */}
                    <img src={greenwaves} className="animated-slide-in" alt="Image" width={400} height={250} />
                </Box>


            </Box>
            <Box>

                <Highlights />
                <FAQ />
                <Divider />
            </Box>
            <Box
                sx={{

                    // background: "#1976d2",

                }}>

                <Footer />
            </Box>
        </div >
    )
}

export default MainDashboard
