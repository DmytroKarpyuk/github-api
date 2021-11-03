import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getLanguagesInfo, getRepoInfo} from '../../store/reducers/app-reducer';
import {AppStateType} from '../../store/store';
import styles from './RepoInfo.module.css';
import Languages from './Languages/Languages';

const RepoInfo: React.FC = () => {

    const appState = useSelector((state: AppStateType) => state.app);
    const dispatch = useDispatch();

    useEffect(() => {
        if (appState.selectedRepoItem) {
            dispatch(getRepoInfo(appState.selectedRepoItem.owner.login, appState.selectedRepoItem.name));
            dispatch(getLanguagesInfo(appState.selectedRepoItem.owner.login, appState.selectedRepoItem.name));
            document.title = appState.selectedRepoItem.name;
        }
    }, [appState.selectedRepoItem, dispatch]);

    return (
        <div>
            {appState.repoInfo ?
                <>
                    <h1 className={styles.title}>Repository Information</h1>
                    <div className={styles.wrp}>
                        <div>
                            <div className={styles.repo_name}><b>{appState.repoInfo?.name}</b></div>
                            <div>ID: <b>{appState.repoInfo?.id}</b></div>
                            {appState.repoInfo.description && <div>Description: {appState.repoInfo.description}</div>}
                            <Languages/>
                            <div>Size - {(appState.repoInfo.size / 1000).toFixed(2)} MB</div>
                        </div>
                    </div>
                </>
                :
                null
            }
        </div>
    )
}

export default RepoInfo;
