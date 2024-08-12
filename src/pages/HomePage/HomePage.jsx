
import { useEffect, useState } from 'react'
import {fetchMovies} from '../../movie'
import MovieList from '../../components/MovieList/MovieList';

export default function HomePage(){
    const[movieList, setMovieList] = useState([]);
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState(false);

    useEffect (()=> {
         async function getData() {
            try {
                setLoading(true)
                setError(false)
                const data =  await fetchMovies();
                setMovieList(data);
            } catch  {
                setError(true)
            }
            finally{
                setLoading(false)
            }
          
    }
    getData(); }
,[]);
return(
<div>
    <h1>Trending today</h1>
    <MovieList movieList={movieList}/>
</div>
)
}
   