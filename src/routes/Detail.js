import { useParams } from "react-router-dom"; // get방식으로 호출된 url의 parameter를 return
import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState([]);


    const { id } = useParams();
    console.log(id);

    // getMovies()에 해당 id를 가진 영화의 Detail정보를 불러오는 API 정의
    const getMovie = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        console.log(json);
        setDetail(json.data.movie); // 영화 detail 정보를 detail객체에 저장
        setLoading(prev => !prev);
    };

    // 영화 정보의 대한 API는 첫 render때만 실행되어야 하므로 빈 useEffect()호출
    useEffect(() => { getMovie(); }, []);


    // .map()은 추출해온 json이 배열일때만 사용, 배열이 아니면 바로 state value사용
    return (
        <div>
            {loading ? "Loading..." :
                <div>
                    <h1>Detail Page</h1>
                    <div>
                        <img src={detail.medium_cover_image}></img>
                        <h2>{detail.title}</h2>
                        <h3>평점 : {detail.rating}</h3>
                        <h3>{detail.runtime}분 | {detail.year}</h3>
                        <p>{detail.description_full}</p>
                        <ul>
                            {detail.genres.map((genre) => (
                                <li key={genre}>{genre}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            }
        </div>
    );
}
export default Detail;