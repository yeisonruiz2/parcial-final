import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import Character from "./Characters";


const CharacterDetails = () => {
    const { id } = useParams();
    const [character, setcharacter] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`https://ghibliapi.vercel.app/films/api/character/${id}`)
            .then(response => response.json())
            .then(data => {
                setcharacter(data);
                setIsLoading(false);
            })
    }, [id])

    return (
        <>
            {isLoading ? <Loading /> : ''}
            {!isLoading && < Character
                key={character.id}
                id={character.id}
                title={character.title}
                image={character.image}
                description={character.description}
                director={character.director}
                releaseDate={character.release_date}
            />}
        </>
    );
};

export default CharacterDetails;
