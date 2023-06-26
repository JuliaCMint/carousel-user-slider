import React, { useEffect, useState } from "react";
import { list } from "./data";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const Carousel = () => {
  const [items, setItems] = useState(list);
  const [currentItem, setCurrentItem] = useState(0);
  const slideLeft = () => {
    return setCurrentItem((currentItem - 1 + items.length) % items.length);
  };
  const slideRight = () => {
    return setCurrentItem((currentItem + 1) % items.length);
  };

  useEffect(() => {
    let sliderId = setInterval(() => {
      slideRight();
    }, 2500);
    return () => {
      clearInterval(sliderId);
    };
  }, [currentItem]);
  return (
    <section className="slider-container">
      {items.map((item, index) => {
        const { id, image, name, title, quote } = item;
        return (
          <article
            className="slide"
            style={{
              transform: `translateX(${100 * (index - currentItem)}%)`,
              opacity: index === currentItem ? 1 : 0.2,
            }}
            key={id}
          >
            <img src={image} className="person-img" />
            <h4 className="name">{name}</h4>
            <h6 className="title">{title}</h6>
            <p className="text">{quote}</p>
          </article>
        );
      })}
      <button type="button" className="prev" onClick={slideLeft}>
        <HiArrowLeft />
      </button>
      <button type="button" className="next" onClick={slideRight}>
        <HiArrowRight />
      </button>
    </section>
  );
};

export default Carousel;
