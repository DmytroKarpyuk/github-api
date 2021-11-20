import React from 'react';
import styles from './UserDetails.module.css';
import idImg from '../../../assets/Id.svg';
import accImg from '../../../assets/Account_small.svg';
import locationImg from '../../../assets/Location.svg';
import buildingImg from '../../../assets/Building.svg';
import {UserType} from '../../../http/api';

const UserDetails: React.FC<PropsType> = ({userInfo}) => {
    return (
        <div className={styles.details_wrp}>
            <img src={userInfo.avatar_url ? userInfo.avatar_url : undefined}
                 className={styles.img}
                 alt='...'
            />

            <div className={styles.user_name_wrp}>
                <div className={styles.user_name}><b>{userInfo.name || userInfo.login}</b></div>
                <div className={styles.user_login}>{userInfo.login}</div>
                <a className={styles.profile_link} href={userInfo.html_url} target='_blank' rel="noreferrer">
                    <button>View Profile</button>
                </a>
            </div>

            <div className={styles.details}>
                <div className={styles.details_title}>DETAILS:</div>
                <div className={styles.details_row}>
                    <div className={styles.details_col}>
                        <div><img src={idImg} alt='id img'/>ID: <b>{userInfo.id}</b></div>
                        <div><img src={accImg} alt='acc img'/>Type: <b>{userInfo.type}</b></div>
                    </div>
                    <div className={styles.details_col}>
                        <div><img src={accImg} alt='acc img'/>Account created: <b>{userInfo.created_at.substr(0, 10)}</b></div>
                        {userInfo.location && <div><img src={locationImg} alt='location img'/>Location: <b>{userInfo.location}</b></div>}

                    </div>
                    <div className={styles.details_col}>
                        {userInfo.company && <div><img src={buildingImg} alt='building img'/>Company: <b>{userInfo.company}</b></div>}
                        {userInfo.email && <div><img src={idImg} alt='email img'/>Email: <b>{userInfo.email}</b></div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;

type PropsType = {
    userInfo: UserType
}