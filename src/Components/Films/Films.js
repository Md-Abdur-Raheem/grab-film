import React from 'react';
import { useEffect, useState } from 'react';
import Booking from '../Booking/Booking';
import Film from '../Film/Film';

const Films = () => {
     // state for fetching data
    const [films, setFilms] = useState([]);

    //state for watchlist
    const [counts, setCounts] = useState([]);
    
     // effect for fetching data
     useEffect(() => {
         fetch('./films.json')
             .then(res => res.json())
             .then(data => setFilms(data))
     }, [])
    
    // onCLick function for add to watchlist button
    const handleCounts = (films) => {
        //to prevent adding same items in watchlist several items
        for (const count of counts) {
            if (count.film.id === films.film.id) {
                alert('Already added')
                return;
            }
        }
        const newCount = [...counts, films];
        setCounts(newCount);
    }
    
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

export default Films;