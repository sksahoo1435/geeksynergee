import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp, faDiamond } from '@fortawesome/free-solid-svg-icons';

function Home() {
    const [movieList, setMovieList] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchMovieList();
    }, []);

    const fetchMovieList = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://hoblist.com/api/movieList', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    category: "movies",
                    language: "kannada",
                    genre: "all",
                    sort: "voting"
                })
            });
            const data = await response.json();
            const sortedMovies = data.result.sort((a, b) => a.voting - b.voting);
            setMovieList(sortedMovies);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching movie list:', error);
            setLoading(false);
        }
    };

    return (
        <div className='home-container'>
            <Navbar />
            <div className='movie-container'>
                {loading ?
                    <div className='loader'>
                        <FontAwesomeIcon icon={faDiamond} spin fontSize="3em" color="#151dcf" />
                        <FontAwesomeIcon icon={faDiamond} spin fontSize="3em" color="red" />
                        <FontAwesomeIcon icon={faDiamond} spin fontSize="3em" color="blue" />
                    </div> :
                    <ul>
                        {movieList.map(movie => (
                            <>
                                <li key={movie._id} className="movie-item">
                                    <div style={{ display: "flex", gap: "50px" }}>
                                        <div className='vote'>
                                            <span className="voting">

                                                <FontAwesomeIcon icon={faCaretUp} className="up-arrow" fontSize="2em" />
                                                <p>{movie.voting}</p>
                                                <FontAwesomeIcon icon={faCaretDown} className="drop-arrow" fontSize="2em" />

                                            </span>
                                            <p style={{ position: "absolute" }}>Vote</p>
                                        </div>

                                        <img src={movie.poster} alt={movie.title} className="poster" />
                                    </div>

                                    <div className="details">
                                        <h3>{movie.title}</h3>
                                        <p><strong>Genre:</strong> {movie.genre}</p>
                                        <p><strong>Director:</strong> {movie.director.join(", ")}</p>
                                        <p><strong>Starring:</strong> {movie.stars.join(", ")}</p>
                                        <p><strong>Views:</strong> {movie.pageViews} views</p>
                                        <p><strong>Voted By:</strong> {movie.voted.length}</p>
                                    </div>
                                </li>

                                <button className="watch-trailer-button">Watch Trailer</button>
                                <div className="underline"></div>
                            </>
                        ))}
                    </ul>}
            </div>
        </div>
    );
}

export default Home;
