import { useState, useEffect } from 'react';
import MovieCard from '../../components/moviecard/movieCard';
import { Container, ListArea, MovieContainer } from '../../assets/UI';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
    const [popularMovies, setPopularMovies] = useState([]);

    const getPopularMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setPopularMovies(data.results);
    };

    useEffect(() => {
        const popularUrl = `${moviesURL}popular?${apiKey}`;

        getPopularMovies(popularUrl);
    }, []);

    return (
        <Container>
            <h2 >Mais populares no momento</h2>
            <ListArea>
                <MovieContainer>
                    {popularMovies.length === 0 && <p>Buscando...</p>}
                    {popularMovies.length > 0 && popularMovies.map((movie) =>
                        movie.vote_average > 7 ? <MovieCard key={movie.id} movie={movie} /> : ''
                    )}
                </MovieContainer>
            </ListArea>
            <ListArea>
                <MovieContainer>
                    {popularMovies.length === 0 && <p>Buscando...</p>}
                    {popularMovies.length > 0 && popularMovies.map((movie) =>
                        movie.vote_average > 5 && movie.vote_average <= 7 ? <MovieCard key={movie.id} movie={movie} /> : ''
                    )}
                </MovieContainer>
            </ListArea>
            <ListArea>
                <MovieContainer>
                    {popularMovies.length === 0 && <p>Buscando...</p>}
                    {popularMovies.length > 0 && popularMovies.map((movie) =>
                        movie.vote_average <= 5 ? <MovieCard key={movie.id} movie={movie} /> : ''
                    )}
                </MovieContainer>
            </ListArea>
        </Container>
    )
}

export default Home;
