import React from 'react';
import Logo from '../../components/Logo/Logo';
import Search from '../../components/Search/Search';
import UserInfo from '../../components/UserInfo/UserInfo';
import Footer from '../../components/Footer/Footer';
import Vectors from '../../components/Vectors/Vectors';
import styles from './MainPage.module.css';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../store/store';
import RepoInfo from '../../components/RepoInfo/RepoInfo';

const MainPage = () => {

    const appState = useSelector((state: AppStateType) => state.app);
    const screenHeight = window.innerHeight;

    return (
        <>
            <div className={styles.wrp} style={{minHeight: screenHeight + 'px'}}>
                <div className={appState.isInfoMode ? styles.logo_search_wrp_mode : styles.logo_search_wrp}>
                    <Logo/>
                    <Search/>
                </div>
                {appState.selectedUserItem && <UserInfo/>}
                {appState.selectedRepoItem && <RepoInfo/>}
                <Vectors/>
            </div>
            <Footer/>
        </>
    )
}

export default MainPage;