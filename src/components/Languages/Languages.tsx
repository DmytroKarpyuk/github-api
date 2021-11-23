import React from 'react';
import {LanguagesType} from '../../http/api';
import * as colorsCollection from '../../assets/colors.json';
import styles from './Languages.module.css';
import ProgressBar from './ProgressBar/ProgressBar';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../store/store';
import Preloader from '../Preloader/Preloader';

const Languages: React.FC<PropsType> = ({languagesInfo}) => {

        const isLanguagesFetching = useSelector((state: AppStateType) => state.app.isLanguagesFetching);
        const colors = JSON.parse(JSON.stringify(colorsCollection));
        const languagesColors = Object.keys(colors.default).map(key => ({
            language: key,
            color: colors.default[key].color
        }));

        const languageSizeToPercent = (languages: LanguagesType, languageSize: number) => {
            const languagesSum = Object.keys(languages)
                .map((key) => languages[key])
                .reduce((a, b) => a + b, 0);
            return (languageSize * 100 / languagesSum).toFixed(2);
        };

        const assignLanguageColor = (languageName: string) => {
            const filtered = languagesColors.filter(object => object.language === languageName);
            return filtered[0]?.color;
        };

        return (
            <div className={styles.wrp}>
                {isLanguagesFetching
                    ?
                    <Preloader/>
                    :
                    <>
                        {Object.keys(languagesInfo).map((language, i) =>
                            i < 3 &&
                            <div key={i} className={styles.language_wrp}>
                                <div className={styles.point} style={{background: assignLanguageColor(language)}}/>
                                <b className={styles.language_name}>{language}</b>
                                <ProgressBar value={languageSizeToPercent(languagesInfo, languagesInfo[language])} color={assignLanguageColor(language)}/>
                            </div>
                        )}
                    </>
                }
            </div>
        );
    }
;

export default Languages;

type PropsType = {
    languagesInfo: LanguagesType
}