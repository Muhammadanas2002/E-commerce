import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Card.module.css";

const Cards = ({ searchQuery }) => {
    const [products, setProducts] = useState([]);
    const [filtered, setFiltered] = useState([]);

    const fetchData = async () => {
        try {
            const res = await axios.get("https://fakestoreapi.com/products");
            setProducts(res.data);
        } catch (err) {
            console.error("Error fetching products:", err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const result = products.filter((item) =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFiltered(result);
    }, [searchQuery, products]);

    return (
        <div className={styles.cardContainer}>
            {filtered.length > 0 ? (
                filtered.map((item) => (
                    <div key={item.id} className={styles.card}>
                        <img src={item.image} alt={item.title} className={styles.cardImage} />
                        <h3>{item.title}</h3>
                        <p>{item.description.slice(0, 100)}...</p>
                        <p><strong>${item.price}</strong></p>
                    </div>
                ))
            ) : (
                <div className={styles.notFound}>Product not found</div>
            )}
        </div>
    );
};

export default Cards;
