import './App.css';

function App() {
  return (
    <div className="app">
      <div className="section-main">
        <h1>PURRFECTION</h1>
        <img className="background-img" src={require('./images/cover.jpg')} />
      </div>
      <h2>RELEASES</h2>
      <div className="section-releases">
        <a
          href="https://open.spotify.com/track/69kK1B7K5S5cnQZANjxJwN?si=72708b96b63e43f5"
          target="_blank"
        >
          <div className="description-container">
            <p className="text">It's Alright</p>
          </div>
        </a>
        <a
          href="https://open.spotify.com/track/69kK1B7K5S5cnQZANjxJwN?si=72708b96b63e43f5"
          target="_blank"
        >
          <div className="image-container">
            <img
              className="release-img"
              src={require('./images/itsAlright.png')}
            />
          </div>
        </a>
      </div>
      <h2>SOCIALS</h2>
      <div className="section-footer">
        <div className="social-container">
          <a
            href="https://open.spotify.com/artist/25kA7PpCncWzjXu8eUH1YM?si=zPvR_h9KR_e6UHGKfgGcfw"
            target="_blank"
          >
            <img
              className="social-link"
              src={require('./images/spotify.png')}
            />
          </a>
        </div>
        <div className="social-container">
          <a
            href="https://www.youtube.com/channel/UCoILuJsgXlw8xKLViNAtkpg"
            target="_blank"
          >
            <img
              className="social-link"
              src={require('./images/youtube.png')}
            />
          </a>
        </div>

        <div className="social-container">
          <a
            href="https://www.instagram.com/purrfection.artist/"
            target="_blank"
          >
            <img
              className="social-link"
              src={require('./images/instagram.png')}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
