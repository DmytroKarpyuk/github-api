import React, {useEffect} from 'react';
import lottie from 'lottie-web';
import preloader from '../../assets/Preloader.json';
import styles from './Preloader.module.css';
import {nanoid} from 'nanoid';

const Preloader = () => {

    const id = nanoid();

    useEffect(() => {
        lottie.loadAnimation({
            container: document.getElementById(id) as HTMLElement,
            animationData: preloader
        })
    }, []);

    return (
        <div className={styles.preloader_wrp}>
            <div id={id} className={styles.preloader}/>
        </div>

    );
};

export default Preloader;