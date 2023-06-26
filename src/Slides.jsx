import React from "react";

const Slide = ({ image, name, title, quote }) => {
  return (
    <div className="slide">
      <img src={image} className="person-img" />
      <h4 className="name">{name}</h4>
      <h6 className="title">{title}</h6>
      <p className="text">{quote}</p>
    </div>
  );
};

export default Slide;
