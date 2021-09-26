import React from 'react';
import './Booking.css';
const Booking = (props) => {
    let total = 0;
    for (const added of props.counts) {
        total += added.film.ticketPrice;
    }
    return (
        <div>
            <h3>Watchlist</h3>
            <br/>
            <table className="table">
                <tbody>
                    <tr>
                        <td><h6><b>Items Added </b></h6></td>
                        <td><b>{props.counts.length}</b></td>
                    </tr>
                    <tr>
                        <td><h6><b>Total</b></h6></td>
                        <td><b>${total}</b></td>
                    </tr>
                </tbody>
            </table>
            <button className="btn btn-warning my-3 "><b><i className="fas fa-desktop"></i> Start Enjoying</b></button>
            {
                props.counts.map(added => <li className="added-film" key={added.film.id}><img style={{width : "50px"}} src={added.film.banner} alt="" /> {added.film.name}</li>)
            }

        </div>
    );
};

export default Booking;