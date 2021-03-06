import Link from "next/link";
import { useRouter } from "next/router";
import HeadTitle from "../components/Common/HeadTitle";

export default function Home({ results }: any) {
  const router = useRouter();
  const onClick = (id: string, title: string) => {
    router.push({
      pathname: `/movies/${title}/${id}`,
    });
  }
  
    return (
        <div className="container">
            <HeadTitle title="Home"/> 
            {results?.map((movie : object) => (          
                <div onClick={() => onClick(movie.id, movie.original_title)} className="movie" key={movie.id}>
                  <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                  <h4>
                  <Link href={`/movies/${movie.original_title}/${movie.id}`}>
                    <a>{movie.original_title}</a>
                  </Link>
                  </h4>              
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
  const { results } = await(
    // full 주소 적어줘야 함
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: {
      results,
    }
  }
     
}

// jwt 인증 redux, toolkit