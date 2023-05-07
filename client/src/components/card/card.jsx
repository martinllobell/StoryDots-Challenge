import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./card.module.css";

const Card = ({ product }) => {
  const [showDescription, setShowDescription] = useState(false);

  const handleMouseEnter = () => {
    setShowDescription(true);
  };

  const handleMouseLeave = () => {
    setShowDescription(false);
  };

  return (
    <div className={styles.card}>
      <Link to={`/products/${product.id}`}>
        <div
          className={styles.imageContainer}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src={product.image_url} alt={product.name} />
          <div
            className={`${styles.description} ${showDescription ? styles.show : ""
              }`}
          >
            <p>{product.description}</p>
          </div>
        </div>
        <div className={styles.details}>
          <h3>{product.Brand.name} {product.name}</h3>
          <p className={styles.price}>${product.price}</p>
        </div>
      </Link >
    </div>
  );
};

export default Card;


