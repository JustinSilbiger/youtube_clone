import axios from 'axios';

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  method: 'GET',
  url: BASE_URL,
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': '2fa947830amsh44d96c32bd4df42p1c9ee6jsn9a41ead7e6f4',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

const fetchFromApi = async (url) => {

    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  
    return data;
  
  };
  
   
  
  export default fetchFromApi;

