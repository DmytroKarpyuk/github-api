import React from 'react';
import MainPage from './pages/MainPage/MainPage';
import {Route, Switch} from 'react-router-dom';
import './global.css';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path='/github-api' render={() => <MainPage/>}/>
            </Switch>
        </div>
    );
}

export default App;
