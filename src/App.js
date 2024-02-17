import './App.css';

function App() {
  return (
    <div className="app">
      <h1>PURRFECTION</h1>
      <img className="background-img" src={require('./images/cover.jpg')} />
      <div className="socials-container">
        <a
          href="https://open.spotify.com/artist/25kA7PpCncWzjXu8eUH1YM?si=zPvR_h9KR_e6UHGKfgGcfw"
          className="social-link"
          target="_blank"
        >
          <img src={require('./images/spotify.png')} />
        </a>
        <a
          href="https://www.youtube.com/channel/UCoILuJsgXlw8xKLViNAtkpg"
          className="social-link"
          target="_blank"
        >
          <img src={require('./images/youtube.png')} />
        </a>
      </div>
    </div>
  );
}

export default App;
