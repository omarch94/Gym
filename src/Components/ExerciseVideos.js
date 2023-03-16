import React from 'react'
import { Typography,Stack,Box } from '@mui/material';
const ExerciseVideos = ({videoDesExercice,name}) => {
    console.log({ExerciseVideos})
    if(!ExerciseVideos.length) return "loading..."

  return (
    <Box sx={{marginTop:{lg:"200px",xs:"20px"}}} p="20px">
            <Typography variant="h4" mp="30px">
                Watch <span style={{color:"#ff2625",textTransform:"capitalize"}}>{name}</span> Exercice Videos !
            </Typography>

            <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center"
            sx={{flexDirection:{lg:"row"},gap:{lg:"110px",xs:"0"}}}
            >
                    {/* pour s'assurer est ce qu'il existe (la video) */}
                {videoDesExercice?.slice(0,4).map((item,index)=>(
                    <a key={index} className="exercise-video" href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                     target="_blank"
                     rel=" noreferrer"
                     >
                                <img src={item.video.thumbnails[0].url} alt={item.video.title} />
                                <Box>
                                    <Typography variant="h5" color="#000"> {item.video.title}</Typography>
                                    <Typography variant="h6" color="#000"> {item.video.channelName}</Typography>

                                </Box>
                    </a>
                ))}

            </Stack>
    </Box>
  )
}

export default ExerciseVideos