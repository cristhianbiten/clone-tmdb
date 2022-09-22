import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../../components/moviecard/movieCard";
import { Container, ListArea, MovieContainer } from '../../assets/UI';

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
    const [searchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    
    const query = searchParams.get('q');

    const getSearchedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setMovies(data.results);
    };

    useEffect(() => {
        const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;

        getSearchedMovies(searchWithQueryURL);
    }, [query]);

    return (
        <Container>
            <h2>
                Veja titulos sobre: <span className="query-text">{query}</span>
            </h2>
            <ListArea>
                <MovieContainer>
                    {movies.length === 0 && <p>Buscando...</p>}
                    {movies.length > 0 && movies.map((movie) =>
                        movie.vote_average > 7 ? <MovieCard key={movie.id} movie={movie} /> : ''
                    )}
                </MovieContainer>
            </ListArea>
            <ListArea>
                <MovieContainer>
                    {movies.length === 0 && <p>Buscando...</p>}
                    {movies.length > 0 && movies.map((movie) =>
                        movie.vote_average > 5 && movie.vote_average <= 7 ? <MovieCard key={movie.id} movie={movie} /> : ''
                    )}
                </MovieContainer>
            </ListArea>
            <ListArea>
                <MovieContainer>
                    {movies.length === 0 && <p>Buscando...</p>}
                    {movies.length > 0 && movies.map((movie) =>
                        movie.vote_average < 5 ? <MovieCard key={movie.id} movie={movie} /> : ''
                    )}
                </MovieContainer>
            </ListArea>
        </Container>
    );
}

export default Search;
