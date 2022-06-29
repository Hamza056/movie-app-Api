import React from 'react'
import { useGlobalContext } from './context';
import { NavLink } from 'react-router-dom';
const Movies = () => {
  const {movies, isLoading}=useGlobalContext();
  if(isLoading){
    return <div >
      <div className="loading">Loading...</div>
    </div>
  }
  return (
    <>
    <section className='movie-page'>
      <div className="container grid grid-4-col">

     
    {movies.map((curMovie)=>{
       const {Title,Year,imdbID,Type,Poster}=curMovie;
       const movename=Title.substring(0,15);
      return (
        <NavLink to={`movies/${imdbID}`} key={imdbID}>
          <div className="card">
            <div className="card-info">
              <h2>{movename.length>=15? `${movename}...`:movename}</h2>
              <img src={Poster} alt="" />
            </div>
          </div>
        </NavLink>
      );
    })}
    </div>
    </section>
    </>
  );
};

export default Movies