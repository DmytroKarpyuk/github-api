import React from 'react';
import Logo from '../../components/Logo/Logo';
import Search from '../../components/Search/Search';
import UserInfo from '../../components/UserInfo/UserInfo';
import Footer from '../../components/Footer/Footer';
import styles from './MainPage.module.css';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../store/store';

const MainPage = () => {

    const isInfoMode = useSelector((state: AppStateType) => state.users.isInfoMode);

    return (
        <div className={isInfoMode ? styles.main_mode : styles.main}>
            <div className={isInfoMode ? styles.logo_search_wrp_mode : styles.logo_search_wrp}>
                <Logo/>
                <Search/>
            </div>
            <UserInfo/>
            {!isInfoMode && <Footer/>}
        </div>
    )
}

export default MainPage;