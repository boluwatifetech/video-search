import React from 'react'
import './main.css'
function Allmovies({movie}){
    return(
        <div className='movie-content'>
             <p>{movie.Year}</p>
             <div className='image-container'>
        <img src={movie.Poster!=='N/A'?movie.Poster:'https://via.placeholder.com/400'}/>
        </div>
        <div className='text-area'>
        <h2>{movie.Type}</h2>
        <h4>{movie.Title}</h4>
        </div>
        </div>
    )
}
export default Allmovies