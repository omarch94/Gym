import React,{useState} from 'react'
import {Box} from'@mui/material'
import HeroBanner from '../Components/HeroBanner'
import SearchExercises from '../Components/SearchExercises'
import Excersises from '../Components/Excersises'
const Home = () => {
  const[bodyPart,setBodyPart]=useState('all')
  const[exercices,setExercises]=useState([]);
console.log(bodyPart)
  return (
<Box>
    <HeroBanner/>
    <SearchExercises 
    setExercises={setExercises} 
    bodyPart={bodyPart} 
    setBodyPart={setBodyPart}/>
    <Excersises 
    setExercises={setExercises} 
    bodyPart={bodyPart} 
    exercices={exercices}
    />

</Box>  
)
}

export default Home

