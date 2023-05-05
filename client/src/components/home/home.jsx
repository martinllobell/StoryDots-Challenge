import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrands, getAllProducts } from "../../redux/actions";
import Card from "../card/card";
import styles from "./home.module.css";

const Home = () => {
    const dispatch = useDispatch();
    const allProducts = useSelector(store => store.products);

    const [currentPage, setCurrentPage] = useState(1)
    const [productsPerPage, setProductsPerPage] = useState(12)

    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    const currentProducts = allProducts.slice(indexOfFirstProduct, indexOfLastProduct)

    useEffect(() => {
        dispatch(getAllProducts())
        dispatch(getAllBrands())
    }, [dispatch])

    return (
        <div className={styles.home}>
            <div className={styles.cardContainer}>
                {
                    currentProducts.length
                        ? currentProducts.map((e) => {
                            return (
                                <div key={e.id} className={styles.card}>
                                    <Card name={e.name} description={e.description} image_url={e.image_url} price={e.price} />
                                </div>
                            )
                        })
                        : <h1 className={styles.loading}>Loading...</h1>
                }
            </div>
        </div>
    )
}

export default Home;