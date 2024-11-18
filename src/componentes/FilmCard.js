import { Link } from "react-router-dom";

const FilmCard = ({ pelicula }) => {
  return (
    <div className="pelicula-card">
      <h2>{pelicula.title}</h2>
      <h3>({pelicula.original_title})</h3>
      <p>{pelicula.description}</p>
      <Link to={`/film/${pelicula.id}`}>Ver detalles</Link>
    </div>
  );
};

export default FilmCard;