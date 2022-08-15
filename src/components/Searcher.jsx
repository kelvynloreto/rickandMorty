import React from "react";
import { useState } from "react";

const Searcher = ({ setChangelocation }) => {
  const [search, setSearch] = useState("");

  const handdleInput = (e) => {
    setSearch(e.target.value);
  };
  const preventDefault = (e) => {
    e.preventDefault();
  };
  const handllerSubmit = () => {
    setChangelocation(search);
  };

  return (
    <form onSubmit={preventDefault}>
      <input type="text" value={search} onChange={handdleInput} placeholder="Type a location id" className="text_area"/>
     <div className="input_icon"> <box-icon name='search' animation='tada' color='#42b4ca'onClick={handllerSubmit}  ></box-icon></div>
     
        </form>
  );
};

export default Searcher;
