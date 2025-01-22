import React from 'react';
import MainPage from './pages/MainPage/MainPage';
import {Route, Routes} from 'react-router-dom';
import './global.css';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/github-search' element={<MainPage />}/>
            </Routes>
        </div>
    );
}

export default App;
