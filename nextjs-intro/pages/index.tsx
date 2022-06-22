import {useEffect, useState} from "react";
import HeadTitle from "../components/HeadTitle";

const API_KEY = "10923b261ba94d897ac6b81148314a3f";

export default function Home() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        (async () => {
            const {results} = await(
                await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
            ).json();
            console.log(results)
            setMovies(results)
        })();
    }, [])

    return <div>
        <HeadTitle title="Home"/> 
        {!movies && <h4>Loading...</h4>}
        {
            movies?.map(
                (movie) => (<div key={movie.id}>
                    <h4>{movie.original_title}</h4>
                </div>)
            )
        }
    </div>
}

// jwt 인증 
// redux, toolkit