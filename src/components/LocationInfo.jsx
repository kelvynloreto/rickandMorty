import React from "react";

const LocationInfo = ({ location }) => {
  return (
    <article className="header_info">
      <h1>{location?.name}</h1>
      <section>
        <div className="header_info_text">
          <h2>Type: </h2>
          <span>{location?.type}</span>
        </div>
        <div className="header_info_text">
          <h2>Dimension: </h2>
          <span>{location?.dimension}</span>
        </div>
        <div className="header_info_text">
          <h2>Population: </h2>
          <span>{location?.residents.length}</span>
        </div>
      </section>
    </article>
  );
};

export default LocationInfo;
