import React from 'react'
import {useState} from 'react'
import { Stack,Typography } from '@mui/material'
import Icon from "../assets/icons/gym.png"
const BodyParts = ({item,bodyPart,setBodyPart}) => {
    //props d HorizontalScrollBar 
  return (
<Stack
type="button"
alignItems="center"
className="bodyPart-card"
sx={{
    borderTop: bodyPart === item ?'4px solid #ff2625':'',
        backgroundColor:"#fff",
        borderBottomLeftRadius:'20px' ,
        width:"270px",
        height:"270px",
        cursor:'pointer',
        gap:"47px"
    }}
onClick={()=> {
  setBodyPart(item);
  window.scrollTo({top:1800,left:100,behavior:"smooth"})

}}
>

<img src={Icon} alt="dumbel" style={{width:"50px", height:"50px" ,marginTop:"50px"}}/>
<Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item}</Typography>
</Stack>
  )
}

export default BodyParts