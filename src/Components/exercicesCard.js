import React from 'react'
import {Link} from "react-router-dom";
import {Button,Stack,Typography} from '@mui/material'
const ExercicesCard = ({exercise}) => {
  return (
        <Link  className="exercice-card" to={`exercise/${exercise.id}`} style={{textDecoration:"none"}}>
                <img src={exercise.gifUrl} alt={exercise.name} loading="Lazy"/>
                <Stack direction="row">
                        <Button sx={{ml:"21px",color:"#fff",background:"#ffa9a9",fontSize:"14px",borderRadius:"20px",textTransform:"capitalize" }}>
                            {exercise.bodyPart}
                        </Button>
                        <Button sx={{ml:"21px",color:"#fff",background:"#fcc757",fontSize:"14px",borderRadius:"20px",textTransform:"capitalize"}}>
                            {exercise.target}
                        </Button>
                    </Stack>
                <Typography ml="20px" color="#000" fontWeight="bold" mt="20px" pb="10px" textTransform="capitalize" fontSize="22px"> 
                    {exercise.name}
                    </Typography>

        </Link>
    )
}

export default ExercicesCard