import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import styles from "./product-detail.module.css";

const ProductDetail = () => {
  const { id } = useParams();
  const products = useSelector(state => state.allProducts)
  const product = products[id - 1]


  if (!id) {
    return <p>Id not available</p>;
  }

  return (
    <div className={styles.detailContainer}>
      <div className={styles.card}>
        {product ? (
          <div className={styles.card}>
            <div className={styles.title}>
              <h2 className={styles.brand}>{product.Brand.name}</h2>
              <h2 className={styles.name}>{product.name}</h2>
            </div>
            <img
              className={styles.image_url}
              src={product.image_url}
              alt="Not found"
            />
            <p className={styles.description}>{product.description}</p>
            <div className={styles.brand}>
              <h2 className={styles.brand}>{product.Brand.name}</h2>
              <img
                className={styles.brandLogo}
                src={product.Brand.logo_url}
                alt="Not found"
              />
            </div>
            <p className={styles.price}>{product.price}</p>
          </div>
        ) : (
          <p className={styles.loading}>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;