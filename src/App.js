import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner.js";
import Nav from "./Nav";
function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />

      <Row
        title="Netflix Originals"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />

      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
    </div>
  );
}

export default App;
