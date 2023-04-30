import React from "react";
import "./Card.css";
import logo from "../assets/logo.png";
import heartfill from "../assets/heart-fill.png";
import heartoutline from "../assets/heart-outline.png";

function Card({
  author,
  name,
  date,
  foodImage,
  desc,
  liked,
  setLiked,
  likeCount,
  setLikeCount,
}) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="card-heading">
          <h3>{name}</h3>
          <p>{date}</p>
        </div>
      </div>
      <div className="card-image">
        <img src={foodImage} alt={name} />
      </div>
      <div className="card-desc">
        <p>{desc}</p>
      </div>
      <div className="card-footer">
        <span className="card-footer" onClick={() => setLiked(!liked)}>
          {liked ? (
            <img
              src={heartfill}
              alt="Liked"
              onClick={() => setLikeCount(likeCount - 1)}
            />
          ) : (
            <img
              src={heartoutline}
              alt="Unliked"
              onClick={() => setLikeCount(likeCount + 1)}
            />
          )}
        </span>
        <p>
          <span>{likeCount}</span> kişi bu tarifi beğendi.
        </p>
      </div>
    </div>
  );
}

export default Card;
