import React, {useState, useEffect} from 'react';
import axios from 'axios';

function SWMovies(){
  const [number, setNumber] = useState(1);
  const [movie, setMovie] = useState("");
  useEffect(() => {
    async function getData() {
      const response = await axios.get(`https://swapi.co/api/planets/${number}`);
      console.log(response);
      setMovie(response.data);
    }
    getData();
  }, [number]);
  return (
    <div>
      <h1>Pick a Movie</h1>
      <h2>You chose: {movie.name}</h2>
      <select value={number} onChange={e => setNumber(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
      </select>
    </div>
  )
}
export default SWMovies;