import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

export default async function fetchFotos  (){
    const response = await axios.get("",
        {
            headers: {
              Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGMzMGQxYzcyYmE1MGE1YTg0NWI4MWQ2YzZjYmZjOCIsIm5iZiI6MTcyMjUzMTczOS45NDc4NDksInN1YiI6IjY2YWJiZDdhYjI0YjNhZGE5NzVhMDY3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vmjcsUcd7mmLoBR70UYgWsx2rruIa2B6e6iNC2DUeLU",
            },
          });
    
    return response.data.results;
}
