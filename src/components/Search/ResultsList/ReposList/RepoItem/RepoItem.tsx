import React from 'react';
import {RepoItemType} from '../../../../../http/api';
import {useDispatch} from 'react-redux';
import {actions} from '../../../../../store/reducers/app-reducer';
import styles from './RepoItem.module.css';
import folder_icon from '../../../../../assets/folder.svg';

const RepoItem: React.FC<PropsType> = ({repoItem}) => {

    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch(actions.setSelectedRepo(repoItem));
        dispatch(actions.setSelectedUser(null));
        dispatch(actions.setRepoItems(null));
        dispatch(actions.setUserItems(null));
        dispatch(actions.setIsInfoMode(true));
    };

    return (
        <div className={styles.wrp} onClick={clickHandler}>
            <div className={styles.card}>
                <img className={styles.folder_icon} alt={repoItem.name} src={folder_icon}/>
                <div>
                    <div className={styles.repo_name}><b>{repoItem.name}/{repoItem.owner.login}</b></div>
                    <div className={styles.repo_id}>id: {repoItem.id}</div>
                </div>
            </div>
        </div>
    );
};

export default RepoItem;

type PropsType = {
    repoItem: RepoItemType
}