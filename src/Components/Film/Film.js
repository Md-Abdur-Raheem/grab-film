import './Film.css'
const Film = (props) => {
    console.log(props);
    const {name, directors, year, country, rating, ticketPrice, banner } = props;
    return (
        <div className="col film-card rounded-3">
        <div className="card h-100 film">
          <img src= {banner} className="card-img-top" alt="..."/>
          <div className="card-body">
                    <h4 style = {{color:"#fca311"}} className="card-title">{name}</h4>
                    <h6><b style = {{color:"#e5e5e5"}}>Country:</b> {country}</h6>
                <h6><b style = {{color:"#e5e5e5"}}>Directors:</b>
                    {
                        directors.map(director => <li style = {{listStyleType:"none"}} >{director}</li>)
                    }
                    </h6>
                    <h6><b style = {{color:"#e5e5e5"}}>Releasing year:</b> {year}</h6>
                    <h6><b style = {{color:"#e5e5e5"}}>IMDB Rating:</b> {rating}</h6>
                    <h6 style = {{fontSize:'25px'}}><b style = {{color:"#e5e5e5"}}>Price:</b> ${ticketPrice}</h6>
                    
                    <button className="btn btn-warning mt-3 add-btn"><b>Add To Watchlist</b></button>
                   
            </div>
        </div>
      </div>
    );
};

export default Film;