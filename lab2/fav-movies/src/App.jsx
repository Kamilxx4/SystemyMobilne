import { useState } from 'react';
import './App.css'
import { FilmDetails } from "./FilmDetails.jsx";

function App()
{
  const titles = ["Harry Potter", "Venom", "Joker"];
  const chosenFilmState = useState(undefined);
  const chosenFilm = chosenFilmState[0];
  const setChosenFilm = chosenFilmState[1];
  return (
    <div>
      <h1>Spis Twoich ulubionych filmów</h1>
      <p className="description">
        W tej aplikacji zobaczysz TOP 3 filmy Twojego życia
      </p>
      <ol>
        {titles.map((title, index) => {
          return (
            <li>
              <button onClick={() => setChosenFilm(index)}>{title}</button>
            </li>
          );
        })}
      </ol>
      <FilmDetails
        title={titles[chosenFilm]}
        description="To film o chłopcu, który..."
        link="https://pl.wikipedia.org/wiki/Harry_Potter"
      />
    </div>
  );
}

export default App;