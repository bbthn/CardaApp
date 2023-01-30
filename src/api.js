import axios from 'axios';


const UNSPLASH_URL = 'https://api.unsplash.com/search/photos'

const searchImage = async(term) => {
    const response = await axios.get(UNSPLASH_URL,{
      headers:{
        Authorization:'Client-ID 9LG7chQDiku3y5cwBl6LfHHWq18t9rAWVBabaO37jzw'
      },
      params:{
        query:term
      }
    });
    return response.data.results;
    debugger;

  }


  export default searchImage;