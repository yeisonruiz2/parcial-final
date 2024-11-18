import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import FilmCard from "./componentes/FilmCard"; // Componente para la tarjeta de película
import FilmDetail from "./componentes/FilmDetail"; // Componente para detalles de la película
import "./App.css";

function App() {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.vercel.app/films")
      .then((response) => response.json())
      .then((data) => setPeliculas(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Películas de Studio Ghibli</h1>
        </header>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <div className="peliculas-grid">
                  {peliculas.map((pelicula) => (
                    <FilmCard key={pelicula.id} pelicula={pelicula} />
                  ))}
                </div>
              }
            />
            <Route path="/film/:id" element={<FilmDetail peliculas={peliculas} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;