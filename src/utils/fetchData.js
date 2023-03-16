export const exersiseOptions= {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key':process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
   export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'cbed184003mshbfa03f0967bd3acp15be29jsn4de9460922d1',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
export const fetchData=async(url,options)=>{
    const response= await fetch(url,options);
    const data=await response.json();
    return data;
}