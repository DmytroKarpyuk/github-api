import React from 'react';
import styles from './ErrorPage.module.css';
import {NavLink} from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className={styles.error}>
            <h2>404 NOT FOUND</h2>
            <p>Go to <NavLink to='/github-api'>Main page</NavLink></p>
        </div>
    );
};

export default ErrorPage;