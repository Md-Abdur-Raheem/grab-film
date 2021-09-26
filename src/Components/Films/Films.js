import React from 'react';
import { useEffect, useState } from 'react';
import Booking from '../Booking/Booking';
import Film from '../Film/Film';

const Films = () => {
     // state for fetching data
    const [films, setFilms] = useState([]);
    //state for order summary
    const [counts, setCounts] = useState([]);
    
     // effect for fetching data
     useEffect(() => {
         fetch('./films.json')
             .then(res => res.json())
             .then(data => setFilms(data))
     }, [])
    // console.log(films);
    const handleCounts = (films) => {
        // console.log(films);
        const newCount = [...counts, films];
        setCounts(newCount);
    }
    // console.log(counts);
    
    return (
        <div className = "row mx-0">
            <div className="col-2 my-5  ">
            <Booking counts = {counts}></Booking>   
            </div>
            <div className="col-9 my-5 ">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                        films.map(film => <Film
                            key = {film.id}
                            film = {film}
                            handleCounts = {handleCounts}
                        ></Film>)
                }
            </div>

            
            </div>
            
        </div>
    );
};

export default Films;<h1>I am from films</h1>