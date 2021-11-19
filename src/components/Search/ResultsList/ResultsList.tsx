import React from 'react';
import UserItemsList from './UsersList/UserItemsList';
import RepoItemsList from './ReposList/RepoItemsList';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../../store/store';
import styles from './ResultsList.module.css';

const ResultsList = () => {

    const usersState = useSelector((state: AppStateType) => state.app);
    const isInfoMode = useSelector((state: AppStateType) => state.app.isInfoMode);

    return (
        <div className={isInfoMode ? styles.wrp_mode : styles.wrp}>
            {!!usersState.userResultItems?.length && <UserItemsList/>}
            {!!usersState.repoResultItems?.length && <RepoItemsList/>}
        </div>
    );
};

export default ResultsList;