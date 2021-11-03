import React from 'react';
import img_cat from '../../assets/background_cat.svg';
import img_cat2 from '../../assets/background_cat2.svg';
import img_eye from '../../assets/background_eye.svg';
import img_loupe from '../../assets/background_loupe.svg';
import img_loupe2 from '../../assets/background_loupe2.svg';
import img_avatar from '../../assets/background_avatar.svg';
import styles from './Vectors.module.css';

const Vectors = () => {
    return (
        <div className={styles.wrp}>
            <img className={styles.cat} src={img_cat} alt='img_cat'/>
            <img className={styles.cat2} src={img_cat2} alt='img_cat2'/>
            <img className={styles.eye} src={img_eye} alt='img_eye'/>
            <img className={styles.loupe} src={img_loupe} alt='img_loupe'/>
            <img className={styles.loupe2} src={img_loupe2} alt='img_loupe2'/>
            <img className={styles.avatar} src={img_avatar} alt='img_avatar'/>
        </div>
    );
};

export default Vectors;