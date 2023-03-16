import React from 'react'
import { Typography,Stack,Box } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loaders';
const SimilarExercise = ({targetMuscle,equipmentsExercise}) => {
  return (
    <Box sx={{mt:{lg:"100px",xs:"0"}}}>
            <Stack direction="row" sx={{p:"2",position:"relative"}}>
        {targetMuscle.length ? 
        <HorizontalScrollbar data={targetMuscle}/>
          : <Loader/>
        }
            </Stack>
    </Box>
    )
}

export default SimilarExercise