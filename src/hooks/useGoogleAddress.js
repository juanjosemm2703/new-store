import { useEffect, useState } from "react";
import axios from 'axios'

const useGoogleAddress = address => {
  const [map, setMap] = useState({})
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=calle%2018%2022%2048%20Jardin%20santa%20marta%20CO&key=AIzaSyBH-a_klNbGSxkJlotdwSRKcuiQF_wWImM`

  useEffect(async () => {
    const response = await axios(API)
    console.log(response)
    setMap(response.data.results[0].geometry.location)
  }, [])

  return map
};

export default useGoogleAddress;