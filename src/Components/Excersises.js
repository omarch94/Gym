import React, { useEffect } from 'react'
import {useState} from "react"
import { Pagination } from '@mui/material'
import {Stack,Box,Typography} from '@mui/material'
import { exersiseOptions,fetchData } from '../utils/fetchData'
import ExercicesCard from './exercicesCard'
const Excersises = ({setExercises,bodyPart,exercices}) => {
  console.log(exercices)
  //exercices  => props 

  const [currentPage, setCurrentPage] = useState(1);
  const exercicesParpage=9;

  const indexOfLastExercise=currentPage*exercicesParpage;
  const indexOfFirstExercise=indexOfLastExercise-exercicesParpage
  // currentExercices => pour afficher que 9 exercices par page
  const currentExercises=exercices.slice(indexOfFirstExercise,indexOfLastExercise)
  const paginate=(e,value)=>{
    setCurrentPage(value);
    window.scrollTo({top:1800,behavior:"smooth"})
  }
  useEffect(()=>{
      const fetchExercisesData=async()=>{
        let exercicesData=[];
           if(bodyPart ==='all'){
            exercicesData=await fetchData("https://exercisedb.p.rapidapi.com/exercises/",exersiseOptions)
           }else{
            exercicesData=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exersiseOptions)
           }
           setExercises(exercicesData)
      }
      fetchExercisesData()
  },[bodyPart])
  return (
    <Box id="exercises"
    sx={{mt:{lg:"110px"}}}
    mt="50px"
    p="20px"
    >
      <Typography variant="h3" mb="46px"> Showing results</Typography>
      <Stack direction="row" 
      sx={{gap:{lg:"110px",xs:"50px"}}}
      flexWrap="wrap" 
      justifyContent="center" >
        {currentExercises.map((item,index)=>
        (
          <ExercicesCard key={index} exercise={item}/>
        )
        )}

      </Stack>

      <Stack mt="20px" alignItems="center">
         {exercices.length>9&&(
          <Pagination 
          color="standard" 
          shape="rounded"
           defaultPage={1}
           count={Math.ceil(exercices.length/exercicesParpage)}
          page={currentPage}  // currentPage => state
          onChange={paginate}
          // paginate => fonction
          size="large"
          ></Pagination>
         )}
      </Stack>

    </Box>
  )
}

export default Excersises