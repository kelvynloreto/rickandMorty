import React from "react";
import useFetch from "../hooks/useFetch";

const ResidentInfo = ({ url }) => {
  const color = "#86845"
  const resident = useFetch(url);
  const status= resident?.status === "Alive"?"alive":resident?.status === "unknown"?"unknown":"dead";
  return (  
    <article className="card_resident">
      <section className="status">
      <div className={`circulo ${status}`}></div> 
      <p>{resident?.status}</p>
      </section>
      <img src={resident?.image} alt="" />
      <section className="info_card">
      <p className="card_name">{resident?.name}</p> <hr color={color} />
      <p className="card_text_gray">Species</p>
      <p className="card_text_white">{resident?.species}</p>
      <hr color={color}  />
      <p className="card_text_gray">Origin</p>
      <p className="card_text_white">{resident?.origin.name}</p> <hr color={color}  />
      <p className="card_text_gray">Appearance in episodes</p>
      <p className="card_text_white">{resident?.episode.length}</p></section>
    </article>
  );
};

export default ResidentInfo;
