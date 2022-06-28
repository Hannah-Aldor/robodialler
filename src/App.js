import React, { useState } from 'react';
import ListManager from './ListManager.jsx';
import HomePage from './HomePage.jsx';
import logo from './8x8-transparent-logo.png';
import './App.css';
export default function App() {
    let [displayingListManager, setDisplayingListManager] = useState(false);
    return (
    <div className= {displayingListManager ? "App2" : "App1"}>
        {displayingListManager ? <ListManager/> : <HomePage changePage={setDisplayingListManager}/>}
        <div><img src={logo}></img></div>
    </div>
    )
}
