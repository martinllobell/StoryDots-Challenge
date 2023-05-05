import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { getAllBrands, getAllProducts } from "../../redux/actions";
import Card from "../card/card";
import styles from "./home.module.css";

const Home = () => {
    const dispatch = useDispatch();
    const allProducts = useSelector(store => store.allProducts);
    console.log(allProducts)

    const [currentPage, setCurrentPage] = useState(1)
    const [productsPerPage, setProductsPerPage] = useState(12)
    const [loading, setLoading] = useState(true);


    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    const currentProducts = allProducts.slice(indexOfFirstProduct, indexOfLastProduct)


    useEffect(() => {
        dispatch(getAllProducts());
        dispatch(getAllBrands()).then(() => {
            setLoading(false);
        });
    }, [dispatch]);


    return (
        <div className={styles.home}>
            {loading ? (
                <h1 className={styles.loading}>Loading...</h1>
            ) : (
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    navigation
                    pagination={{ clickable: true }}
                >
                    {allProducts.map((product) => (
                        <SwiperSlide key={product.id}>
                            <Card product={product} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );

}

export default Home;