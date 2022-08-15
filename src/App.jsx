import axios from "axios";
import { useState, useEffect } from "react";
import ResidentInfo from "./components/ResidentInfo";
import LocationInfo from "./components/LocationInfo";
import Searcher from "./components/Searcher";
import imgLogo from '/src/imgs/logo.png/'

function App() {
  const [location, setLocation] = useState();
  const [changelocation, setChangelocation] = useState(``);

  useEffect(() => {
    let ramdonLocation;
    if (changelocation === "") {
      ramdonLocation = Math.ceil(Math.random() * 126);
    } else {
      ramdonLocation = changelocation;
    }
    let url = `https://rickandmortyapi.com/api/location/${ramdonLocation}`;
    axios
      .get(url)
      .then((res) => setLocation(res.data))
      .catch((error) => console.log(error.response));
  }, [changelocation]);


  return (
    <div className='main'>
            <div className="App">
      <header>
        <img src={imgLogo} alt=""/>
      </header>
      <Searcher setChangelocation={setChangelocation} />
      <LocationInfo location={location} />
          <div className="container_card">
          {location?.residents.map((url) => (
        <ResidentInfo key={url} url={url} />
    
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
