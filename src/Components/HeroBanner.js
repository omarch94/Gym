import React from 'react'
import "../App.css"
import {Box,Stack,Typography,Button} from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";
const HeroBanner = () => {
  return (
    <Box sx={{
        mt:{lg:'212px',xs:"70px"},
        ml:{sm:"50px"}
    }} position="relative" p="20px">
        <Typography color="#FF2625" fontWeight="600" fontSize="26px">
            Fitness Club
        </Typography>
        <Typography fontWeight={700}
        sx={{fontSize:{lg:"44px",xs:"40px"}}}
        mb="20px" 
        >
            EAT...SLEEP...TRAIN...SWEAT <br/>
            REPEAT
        </Typography>
        <Typography fontSize="22px" lineHeight="35px" mb={3}>
            Check out the most effective sport program 
        </Typography>
        <Button variant="contained" color="error" href="#exercises"
        sx={{backgroundColor:"#ff2625",paddig:"10px"}}
        >Explore Exercises</Button>
        <img src={HeroBannerImage} alt="Herobanner" className='hero-banner-img'/>
        <Typography 
        fontWeight={600}
        color="#ff2625"
        sx={{
            opacity:0.1,
            display:{lg:'block',xs:"none"}
        }}
        fontSize={200}
        >
            Exercises
        </Typography>
    </Box>
  )
}

export default HeroBanner