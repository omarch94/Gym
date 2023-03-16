import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom'; // pour determiner id de l'exercice pour le fetcher
import { Box } from '@mui/material';
import {fetchData,exersiseOptions,youtubeOptions} from '../utils/fetchData'
import SimilarExercise from '../Components/SimilarExercise';
import Detail from '../Components/Detail'
import ExerciseVideos from '../Components/ExerciseVideos';
const ExerciseDetail = () => {
  const [exerciseStateDetail, setexerciseStateDetail] = useState({});
  const {id}=useParams();
  const [youtubeExerciceData, setYoutubeExerciceData] = useState([]);
  const [targetMuscleExerciseData, setTargetMuscleExerciseData] = useState([]);
  const [equipmentExercise, setEquipmentExercise] = useState([]);

  useEffect(() => {
    const fetchExercisesData=async()=>{
      const exerciceDbUrl="https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl="https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData=await fetchData(`${exerciceDbUrl}/exercises/exercise/${id}`,exersiseOptions)
      console.log({exerciseDetailData})
      setexerciseStateDetail(exerciseDetailData)

      const youtubeExerciceData=await fetchData(`${youtubeSearchUrl }/search?query=${exerciseDetailData.name}`,youtubeOptions)
      setYoutubeExerciceData(youtubeExerciceData.contents)
      const targetMuscleExerciseData=await fetchData(`${exerciceDbUrl}/exercises/target/${exerciseDetailData.target}`,exersiseOptions)
      setTargetMuscleExerciseData(targetMuscleExerciseData)
      const equipmentExercise=await fetchData(`${exerciceDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,exersiseOptions)
      setEquipmentExercise(equipmentExercise)
    }
    fetchExercisesData();
  }, [id])
  
  return (
    <Box>
      <Detail exerciseDetaille={exerciseStateDetail}/>
      <ExerciseVideos videoDesExercice={youtubeExerciceData} name={exerciseStateDetail.name}/>
      <SimilarExercise targetMuscle={targetMuscleExerciseData} equipmentsExercise={equipmentExercise}/>

    </Box>
  )
}

export default ExerciseDetail