import React, { useEffect } from 'react'
import Cards from "../Components/MainDashboardComponents/Cards";
import Pie from "../Components/MainDashboardComponents/Pie";
// import ImageBox from "../Components/MainDashboardComponents/ImageBox";
import orangewave from "./orangewave.jpg"
import './MainDashboard.css';
import { Typography, Box } from '@mui/material';

const MainDashboard = () => {
    return (
        <div className="main-container">
            {/* <div className="first-section">
                <Cards />
            </div>
            <div className="second-section">
                Leave this section blank
                <Pie />
            </div> */}
            <Box className="centered-text"  >

                <Typography className="big-text" fontSize={110} mt={8} >
                    <span className="wide-text">    UNLOCK SENTIMENTAL</span>
                </Typography>

                <Typography className="big-text" fontSize={110} mt={-5} >
                    <span className="wide-text">POWER OF TEXT</span>
                </Typography>
            </Box>

            <Box className='textImageWrapper'>
                {/* flex div hai */}
                <Box className="text">
                    <Typography variant="h4" sx={{ color: 'white' }}>Sentiment Analysis</Typography>
                    <Typography variant="body1" sx={{ color: 'white' }}>
                        Sentiment analysis, also known as opinion mining, is a natural
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'white' }}>
                        language processing technique that determines the sentiment or emotional tone of text, such as positive, negative, or neutral.
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'white' }}>
                        It is widely used to gain insights from user reviews, social media posts, and customer feedback.
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'white' }}>
                        Sentiment analysis has applications in various fields, including marketing, customer service, and market research.
                    </Typography>
                </Box>
                <Box className="image" ml={2} >
                    <img src={orangewave} alt="Image" width={400} height={250} />
                </Box>

            </Box>
        </div >
    )
}

export default MainDashboard
