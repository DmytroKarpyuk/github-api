import React from 'react';
import styles from '../RepoInfo.module.css';
import Preloader from '../../Preloader/Preloader';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../../store/store';

const Contributors = () => {

    const isContributorsFetching = useSelector((state: AppStateType) => state.app.isContributorsFetching);
    const repoInfo = useSelector((state: AppStateType) => state.app.repoInfo);
    const contributors = useSelector((state: AppStateType) => state.app.contributors);

    return (
        <>
            {repoInfo &&
            <div className={styles.about_contributors_wrp}>
                <h3 className={styles.title}>Contributors:</h3>
                <div className={styles.about_contributors_block}>
                    {isContributorsFetching
                        ?
                        <Preloader/>
                        :
                        <>
                            <div className={styles.inner_row}>
                                {contributors?.map((contributor, i) =>
                                    i < 3 &&
                                    <div key={contributor.id} className={styles.contributor_item}>
                                        <img src={contributor.avatar_url} alt='contributor'/>
                                        <div className={styles.contributor_info}>
                                            <span><b>{contributor.login}</b></span>
                                            <span style={{opacity: .5}}>Id: {contributor.id}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div>
                                <a href={`https://github.com/${repoInfo.owner.login}/${repoInfo.name}/graphs/contributors`}
                                   className={styles.view_all_contributors} target='_blank' rel='noreferrer'>
                                    View all
                                </a>
                            </div>
                        </>
                    }
                </div>
            </div>
            }
        </>
    );
};

export default Contributors;