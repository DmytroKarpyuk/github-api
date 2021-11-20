import React from 'react';
import styles from './ProgressBar.module.css';

const ProgressBar: React.FC<PropsType> = ({value, color}) => {

    return (
        <div className={styles.circular}>
            <div className={styles.inner}/>
            <div className={styles.number}><b>{value}%</b></div>
            <div className={styles.circle}>
                <div className={styles.bar_left}>
                    <div className={styles.progress} style={{background: color}}/>
                </div>
                <div className={styles.bar_right}>
                    <div className={styles.progress} style={{background: color}}/>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;

type PropsType = {
    value: string
    color: string
}