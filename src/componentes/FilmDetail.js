import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const FilmDetail = ({ peliculas }) => {
  const { id } = useParams();
  const [filmData, setFilmData] = useState(null);

  const pelicula = peliculas.find((film) => film.id === id);

  useEffect(() => {
    if (pelicula) {
      setFilmData(pelicula);
    }
  }, [pelicula]);

  if (!filmData) return <div>Cargando...</div>;

  return (
    <div className="film-detail">
      <h2>{filmData.title}</h2>
      <h3>({filmData.original_title})</h3>
      <p>{filmData.description}</p>
      
      <div className="film-links">
        <h4>Personajes:</h4>
        <ul>
          {filmData.people.map((personaje, index) => (
            <li key={index}>
              <Link to={personaje}>Personaje {index + 1}</Link>
            </li>
          ))}
        </ul>

        <h4>Especies:</h4>
        <ul>
          {filmData.species.map((especie, index) => (
            <li key={index}>
              <Link to={especie}>Especie {index + 1}</Link>
            </li>
          ))}
        </ul>

        <h4>Ubicaciones:</h4>
        <ul>
          {filmData.locations.map((ubicacion, index) => (
            <li key={index}>
              <Link to={ubicacion}>Ubicación {index + 1}</Link>
            </li>
          ))}
        </ul>

        <h4>Vehículos:</h4>
        <ul>
          {filmData.vehicles.map((vehiculo, index) => (
            <li key={index}>
              <Link to={vehiculo}>Vehículo {index + 1}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilmDetail;