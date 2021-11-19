import React from 'react';
import styles from './StatItem.module.css';

const StatItem: React.FC<PropsType> = ({statItemImg, statItemName, value}) => {
    return (
        <div className={styles.statistic_item}>
            <div className={styles.row}>
                <img src={statItemImg} alt={statItemImg}/>
                <div>
                    <div className={styles.stat_title}>{statItemName}:</div>
                    <div><b>{value}</b></div>
                </div>
            </div>
        </div>
    );
};

export default StatItem;

type PropsType = {
    statItemImg: string
    statItemName: string
    value: number | string | null
}