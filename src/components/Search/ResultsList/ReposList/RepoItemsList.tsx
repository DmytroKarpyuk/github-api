import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../../store/store';
import RepoItem from './RepoItem/RepoItem';
import styles from './RepoItemsList.module.css';
import {actions} from '../../../../store/reducers/app-reducer';
import Preloader from '../../../Preloader/Preloader';

const RepoItemsList = () => {

    const isFetching = useSelector((state: AppStateType) => state.app.isFetching);
    const repoItems = useSelector((state: AppStateType) => state.app.repoResultItems);
    const showRepoItems = useSelector((state: AppStateType) => state.app.showRepoItems);
    const repoItemsTotalCount = useSelector((state: AppStateType) => state.app.repoItemsTotalCount);
    const dispatch = useDispatch();

    const showItemsHandler = () => {
        dispatch(actions.setShowRepoItems(10));
    };

    return (
        <div className={styles.wrp}>
            <div className={styles.repos_result_title}>
                <b>List of GitHub repositories:</b>
            </div>
            {isFetching
                ?
                <div className={styles.preloader}><Preloader/></div>
                :
                <>
                    {repoItems?.map((r, index) => index < showRepoItems &&
                        <div key={r.id}>
                            <RepoItem repoItem={r}/>
                        </div>
                    )}
                    {repoItemsTotalCount > 3 &&
                    <div className={styles.repos_show_more} onClick={showItemsHandler}>
                        <b>Show more ({repoItemsTotalCount} results)</b>
                    </div>
                    }
                </>
            }
        </div>
    );
};

export default RepoItemsList;