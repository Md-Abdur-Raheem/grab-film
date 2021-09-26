import React from 'react';
import { useEffect, useState } from 'react';
import Film from '../Film/Film';

const Films = () => {
     // state for fetching data
     const [films, setFilms] = useState([]);
     // effect for fetching data
     useEffect(() => {
         fetch('./films.json')
             .then(res => res.json())
             .then(data => setFilms(data))
     }, [])
    console.log(films);
    
    return (
        <div className = "row mx-0">
            <div className="col-2">
                <h1>Booking Summary</h1>
            </div>
            <div className="col-9 my-5 ">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                        films.map(film => <Film
                            key={film.id}
                            name={film.name}
                            directors={film.directors}
                            year={film.year}
                            country={film.country}
                            rating={film.rating}
                            ticketPrice={film.ticketPrice}
                            banner={film.banner}
                        ></Film>)
                }
            </div>

            
            </div>
            
        </div>
    );
};

export default Films;<h1>I am from films</h1>