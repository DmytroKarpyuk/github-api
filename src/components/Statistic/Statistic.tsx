import React from 'react';
import styles from './Statistic.module.css';
import storageImg from '../../assets/Storage_small.svg';
import folderGreenImg from '../../assets/Folder_green_small.svg';
import followersImg from '../../assets/Followers.svg';
import followingImg from '../../assets/Following.svg';
import {RepoType, UserType} from '../../http/api';
import StatItem from './StatItem/StatItem';

const Statistic: React.FC<PropsType> = ({statInfo}) => {
    return (
        <div className={styles.statistic_row}>
            <StatItem statItemImg={storageImg} statItemName='PUBLIC REPOSITORIES' value={'public_repos' in statInfo ? statInfo.public_repos : 0}/>
            <StatItem statItemImg={folderGreenImg} statItemName='PUBLIC GISTS' value={'public_gists' in statInfo ? statInfo.public_gists : 0}/>
            <StatItem statItemImg={followersImg} statItemName='FOLLOWERS' value={'followers' in statInfo ? statInfo.followers : 0}/>
            <StatItem statItemImg={followingImg} statItemName='FOLLOWING' value={'following' in statInfo ? statInfo.following : 0}/>
        </div>
    );
};

export default Statistic;

type PropsType = {
    statInfo: UserType | RepoType
}