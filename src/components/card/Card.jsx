import React from "react";
import styles from "./card.module.css";

function Card({ image, text, handleClick, link, path }) {
  return (
    <div className={`${styles.card} align-center justify-center`} onClick={handleClick} style={{ backgroundColor: path == link ? "#d1c62a" : null }}>
      <img src={`/images/${image}`} alt="" />
      <h3>{text}</h3>
    </div>
  );
}

export default Card;
