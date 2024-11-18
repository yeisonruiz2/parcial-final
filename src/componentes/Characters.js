import { Link } from "react-router-dom";

const Movie = ({ id, title, original_title, description, director, release_date, image }) => {
    let badgeColor = '';
    // Determinar color basado en la década de lanzamiento
    const year = parseInt(release_date);
    if (year >= 2010) {
        badgeColor = 'bg-green';
    } else if (year >= 2000) {
        badgeColor = 'bg-blue';
    } else {
        badgeColor = 'bg-purple';
    }

    return (
        <div className="col">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={image} className="img-fluid rounded-start" alt={title} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">

                            <h5 className="card-title">
                                <Link to={`characters/${id}`}>{title}</Link>
                            </h5>
                            <h6><span className={`status-dot ${badgeColor}`}></span> {original_title} - {description}</h6>
                            <p>
                                Last known location:
                                <br></br>
                                <strong>{director}</strong>

                            </p>

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Movie;