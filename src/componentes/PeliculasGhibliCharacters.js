import { useEffect, useState } from "react"
import Character from "./Character";
import Paginator from "./Paginator";
import image from './../assets/images/Peliuculas-ghibli.gif';

const PeliculasGhibliCharacters = () => {
    const [characters, setCharacters] = useState([]);
    const [info, setInfo] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetch(`https://ghibliapi.vercel.app/films/api/character/?page=${page}`)
            .then(response => response.json())
            .then(data => {
                setCharacters(data.results);
                setInfo(data.info);
                setIsLoading(false);
            })
    }, [page]);

    return (
        <div className="container">
            <div className="m-5 text-center">
                <h1 className="fs-1">PeliculasGhibli</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-2 g-2">
                {isLoading ? <div className="d-flex justify-content-center text-center"><img id="img-loading" src={image} alt="loading" /></div> : ''}
                {!isLoading && characters.map(character => (
                        <Character
                            id={character.id}
                            title={character.title}
                            image="https://via.placeholder.com/150" // La API de Ghibli no proporciona imágenes
                            original_title={character.original_title}
                            description={character.description}
                            director={character.director}
                            release_date={character.release_date}
                        />
                    ))}
                    </div>
                    <Paginator page={page} info={info} setPage={setPage} />
                </div>
            )
        }

export default PeliculasGhibliCharacters ;