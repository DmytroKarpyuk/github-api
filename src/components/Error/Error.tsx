import React from 'react';
import styles from './Error.module.css';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../store/store';

const Error: React.FC<PropsType> = ({error}) => {

    const isInfoMode = useSelector((state: AppStateType) => state.app.isInfoMode);

    return (
        <div className={isInfoMode ? styles.error_mode : styles.error}>
            <span><b>{error}</b></span>
        </div>
    );
};

export default Error;

type PropsType = {
    error: string
}