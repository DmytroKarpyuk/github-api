import React, {Dispatch, SetStateAction, useEffect, useRef} from 'react';
import UserItemsList from './UsersList/UserItemsList';
import RepoItemsList from './ReposList/RepoItemsList';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../../store/store';
import styles from './ResultsList.module.css';
import Preloader from '../../Preloader/Preloader';

const ResultsList: React.FC<PropsType> = ({isShowResults, setIsShowResults}) => {

    const usersState = useSelector((state: AppStateType) => state.app);
    const isInfoMode = useSelector((state: AppStateType) => state.app.isInfoMode);
    const isResultsFetching = useSelector((state: AppStateType) => state.app.isResultsFetching);
    const ref: any = useRef(null);

    const handleClickOutside = (event: { target: any }) => {
        if (!ref.current?.contains(event.target)) {
            setIsShowResults(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return (
        <>
            {isShowResults &&
            <div className={isInfoMode ? styles.wrp_mode : styles.wrp} ref={ref}>
                {isResultsFetching
                    ?
                    <Preloader/>
                    :
                    <>
                        {!!usersState.userResultItems?.length && <UserItemsList/>}
                        {!!usersState.repoResultItems?.length && <RepoItemsList/>}
                    </>
                }
            </div>
            }
        </>
    );
};

export default ResultsList;

type PropsType = {
    isShowResults: boolean
    setIsShowResults: Dispatch<SetStateAction<boolean>>
}