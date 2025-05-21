import React, { useState } from "react";
import styles from "./Navbar.module.css";



const Navbar = ({ searchQuery, setSearchQuery }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>MySite</div>

            <div className={styles.desktopMenu}>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
                <input
                    type="text"
                    className={styles.searchBox}
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            <div className={styles.mobileToggle} onClick={() => setIsOpen(!isOpen)}>
                ☰
            </div>

            {isOpen && (
                <div className={styles.mobileMenu}>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    <input
                        type="text"
                        placeholder="Search..."
                        className={styles.searchBox}
                    />
                </div>
            )}
        </nav>
    )
}


export default Navbar;
