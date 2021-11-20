import React from 'react';
import styles from './RepoDetails.module.css';
import {RepoType} from '../../../http/api';
import repoAvatar from '../../../assets/Repo_Avatar.svg';
import idImg from '../../../assets/Id.svg';
import accImg from '../../../assets/Account_small.svg';

const RepoDetails: React.FC<PropsType> = ({repoInfo}) => {
    return (
        <div className={styles.wrp}>
            <div className={styles.owner_wrp}>
                <img src={repoInfo.owner.avatar_url} alt={repoInfo.owner.avatar_url}/>
                <div className={styles.owner_info}>
                    <span><b>{repoInfo.owner.login}</b></span>
                    <span style={{opacity: .5}}>Owner</span>
                </div>
            </div>
            <div className={styles.details_wrp}>
                <div className={styles.img_wrp}>
                    <img src={repoAvatar} className={styles.img} alt='...'/>
                </div>

                <div className={styles.repo_name_wrp}>
                    <div className={styles.repo_name}><b>{repoInfo.name}</b></div>
                    <a href={repoInfo.html_url} className={styles.repo_link} target='_blank' rel='noreferrer'>
                        <button>View Repository</button>
                    </a>
                </div>


                <div className={styles.details}>
                    <div className={styles.details_title}>DETAILS:</div>
                    <div className={styles.details_row}>
                        <div className={styles.details_col}>
                            <div><img src={idImg} alt='id img'/>ID: <b>{repoInfo.id}</b></div>
                            <div><img src={accImg} alt='acc img'/>Repository created: <b>{repoInfo.created_at.substr(0, 10)}</b></div>
                        </div>
                        <div className={styles.details_col}>
                            {repoInfo.clone_url && <div><img src={idImg} alt='clone url'/>Clone url: <b>{repoInfo.clone_url}</b></div>}
                            {repoInfo.homepage &&
                            <div>
                                <img src={idImg} alt='homepage'/>
                                Homepage: <b><a href={repoInfo.homepage} target='_blank' rel='noreferrer'>{repoInfo.homepage}</a></b>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RepoDetails;

type PropsType = {
    repoInfo: RepoType
}