import axios from "axios";
import { useState, useEffect } from "react";
import ResidentInfo from "./components/ResidentInfo";
import LocationInfo from "./components/LocationInfo";
import Searcher from "./components/Searcher";
import imgLogo from "/src/imgs/logo.png/";
import Pagination from "./components/Pagination";

function App() {
  const [location, setLocation] = useState();
  const [changelocation, setChangelocation] = useState(``);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(9);
  const [aux, setAux] = useState();


  const lastPostIndex = currentPage * postPerPage;
  const fistPostIndex = lastPostIndex - postPerPage;
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
      .then((res) => {
        setLocation(res.data);
        setAux(res.data.residents);
      })
      .catch((error) => console.log(error.response));
  }, [changelocation]);

const currenPost= aux?.slice(fistPostIndex,lastPostIndex)

  return (
  
      <div className="App">
        <header>
          <img src={imgLogo} alt="" />
        </header>
        <Searcher setChangelocation={setChangelocation} setCurrentPage={setCurrentPage} />
        <LocationInfo location={location} />
        <div className="container_card">
          {currenPost?.map((url) => (
            <ResidentInfo key={url} url={url} />
          ))}
        </div>
        <Pagination totalPost={aux?.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage}/>
      </div>
 
  );
}

export default App;
