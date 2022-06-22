import {useEffect, useState} from "react";
import HeadTitle from "../components/HeadTitle";

export default function Home() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        (async () => {
            const {results} = await(
                await fetch(`/api/movies`)
            ).json();
            console.log(results)
            setMovies(results)
        })();
    }, [])

    return (
        <div className="container">
            <HeadTitle title="Home"/> 
            {!movies && <h4>Loading...</h4>}
            {movies?.map((movie) => (
              <div className="movie" key={movie.id}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                <h4>{movie.original_title}</h4>
              </div>
            ))}
            <style jsx>{`
            .container {
              display: grid;
              grid-template-columns: 1fr 1fr;
              padding: 20px;
              gap: 20px;
            }
            .movie img {
              max-width: 100%;
              border-radius: 12px;
              transition: transform 0.2s ease-in-out;
            }
            .movie:hover img {
              transform: scale(1.05) translateY(-10px);
            }
            .movie h4  {
              font-size: 18px;
              text-align: center;
            }
            `}</style>
        </div>
    )
}

// 이 부분에 작성된 코드는 client에게 보여지지 않음. server에서만 실행됨.
export async function getServerSideProps() {
  
}

// jwt 인증 redux, toolkit