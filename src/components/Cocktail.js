import React from "react";
import { Link } from "react-router-dom";
export const Cocktail = ({ image, id, name, info, glass }) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} alt="image" />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${name}`} className="btn btn-primary">
          Details
        </Link>
      </div>
    </article>
  );
};
export default Cocktail;
