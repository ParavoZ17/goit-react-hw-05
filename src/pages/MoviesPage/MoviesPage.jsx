    import { useState } from "react";
    import { useSearchParams } from "react-router-dom";
    import { useEffect } from "react";
    import {getFilerMovies} from "../../movie.js";
    import MovieList from "../../components/MovieList/MovieList";

    const MoviesPage = () => {
    const [params, setParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(false);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        const query = params.get("query") ?? "";
        if (!query) {
        return;
        }
        async function  fetchFilterMovie  () {
        try {
            setError(false);
            setLoad(true);
            const data = await getFilerMovies(query);
            setMovies(data);
            if (data.length === 0) {
            setError(true);
            }
        } catch {
            setError(true);
        } finally {
            setLoad(false);
        }
        };
        fetchFilterMovie();
    }, [params]);

    const handleSearch = (e) => {
        const query = e.target.elements.query.value.trim().toLowerCase();
        
        setMovies([]);
        setError(false);
        e.preventDefault();
        setParams({ query: query });
        
    };
    return (
        <div>
        <form onSubmit={handleSearch}>
            <input
            name="query"
            placeholder="Search film or author"
            type="text"
            />
            <button>Search</button>
        </form>
        {load && <div>Loading...</div>}
        {error ? (
            <div>Not Found</div>
        ) : (
            movies.length > 0 && <MovieList movieList={movies} />
        )}
        </div>
    );
    };

    export default MoviesPage;