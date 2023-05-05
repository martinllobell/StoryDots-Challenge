import { Link } from "react-router-dom"
import styles from "./card.module.css"

const Card = ({ id, name, description, image_url, price, BrandId }) => {
    return (
        <div className={styles.card}>
            <Link to={`/products/${id}`} className={styles.link}>
                <h2 className={styles.name}>{name}</h2>
                <h3 className={styles.brand}>{BrandId}</h3>
                <img src={image_url} className={styles.img} alt="Img not found" />
                <h5 className={styles.price}>{price}</h5>
            </Link>
        </div>
    )
}

export default Card