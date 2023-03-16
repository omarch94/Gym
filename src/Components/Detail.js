import React from 'react';
import { Typography,Stack,Button } from '@mui/material';
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';
import ExerciseDetail from '../Pages/ExerciseDetail';

const Detail = ({exerciseDetaille}) => {
    const{bodyPart,gifUrl,name,target,equipment}=exerciseDetaille;
    const extraDetail=[
        {
            icon:BodyPartImage,
            name:bodyPart
        },
        {
            icon:TargetImage,
            name:target
        },
        {
            icon:EquipmentImage,
            name:equipment
        }
    ]
    console.log(gifUrl);
  return (
    <Stack gap="60px" sx={{flexDirection:{lg:"row"},p:"20px",alignItems:"center"}}>
        <img src={gifUrl} alt={name} loading="lazy" className='detail-image'/>
        <Stack sx={{gap:{lg:"35px",xs:"20px"}}}>

            <Typography variant="h2">{name}</Typography>
                <Typography variant="h5"> the exercise of {name} {` `} keep you strong 
                       

                    One of the best exercices that target the {target}.It will help you boost your energy and mood.

                </Typography>

                {extraDetail.map((item)=>(
                    <Stack key={item.id} direction="row" gap="25px" alignItems="center">
                            <Button sx={{background:"#fff2db" ,borderRadius:"50%",width:"100px" ,heigth:"100px"}}>
                                <img src={item.icon} alt={bodyPart} style={{width:"50px" ,heigth:"50px"}}/>
                            </Button>
                            <Typography textTransform="capitalize" variant="h5">
                                {item.name}
                            </Typography>
                    </Stack>
                ))}
        </Stack>
    </Stack>
  )
}

export default Detail