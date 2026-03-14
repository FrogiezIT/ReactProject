import axios from 'axios';
import React, { useState } from 'react'

const weather = () => {
    const[city, setCity] = useState();

    const handleCityChange = (e) =>{
        setCity(e.target.value)
    }

    const handleClick = () =>{
        setCity(e.target.value)
    }
    const createPost = async () => {
    const response = await axios.post('https://hamarashahar.com/nagda/wp-json/wp/v2/blood_donor');
    console.log(response.data);
    }

  return (
    <div className=''>
      <input type="text" value={city} onChange={handleCityChange} />
      <button onClick={createPost}>Get Weather</button>
      <h3>{city}</h3>
    </div>
  )
}

export default weather
