import React from 'react';
import {LanguagesType} from '../../../http/api';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../../store/store';
import * as colorsCollection from '../../../assets/colors.json';

const colors = JSON.parse(JSON.stringify(colorsCollection));

const Languages = () => {

    const appState = useSelector((state: AppStateType) => state.app);

    const languageSizeToPercent = (languages: LanguagesType, languageSize: number) => {
        const languagesSum = Object.keys(languages)
            .map((key) => languages[key])
            .reduce((a, b) => a + b, 0);
        return (languageSize * 100 / languagesSum).toFixed(2);
    };

    return (
        <div>
            Languages: {Object.keys(appState.languagesInfo).map((language, i) =>
            <div key={i}>
                <b style={{color: `${colors.default[language].color}`}}>{language}</b> {languageSizeToPercent(appState.languagesInfo, appState.languagesInfo[language])}%
            </div>
        )}
        </div>
    );
};

export default Languages;