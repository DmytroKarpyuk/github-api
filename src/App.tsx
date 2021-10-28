import React from 'react';
import MainPage from './pages/MainPage/MainPage';
import {Route, Switch} from 'react-router-dom';
import './global.css';
import ErrorPage from './pages/ErrorPage/ErrorPage';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path='/github-api' render={() => <MainPage/>}/>
                <Route path='*' render={() => <ErrorPage/>}/>
            </Switch>
        </div>
    );
}

export default App;
