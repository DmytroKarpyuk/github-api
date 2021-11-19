import React from 'react';
import styles from './Footer.module.css';

const link = 'https://www.linkedin.com/in/roman-karpiuk-2701b21b5/';

const Footer = () => {
    return (
        <footer className={styles.wrp}>
            <div>
                Design by <a href={link} className={styles.link}><b>Roman Karpiuk</b></a>
            </div>
        </footer>
    );
};

export default Footer;