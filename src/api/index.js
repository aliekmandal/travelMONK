import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';


export const getPlacesData = async (sw ,ne) =>{
    try {
        const {data : {data}} = await axios.get(URL , {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: sw.lat,
          },
          headers: {
            'X-RapidAPI-Key': '410b82c9f4msh2fdeaf7dff34beep134ff3jsn77737396b353',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });
        return data;
    } catch (error) {
        console.log(error);
    }
}