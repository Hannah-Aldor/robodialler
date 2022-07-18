import React, { useState } from 'react';
import ListManager from './ListManager.jsx';
import HomePage from './HomePage.jsx';
import logo from './8x8-transparent-logo.png';
import './App.css';

export default function App() {
    const [displayingListManager, setDisplayingListManager] = useState(false);
    const [phoneNumberList, setPhoneNumberList] = useState([]);
    console.log("Phone Number List: %o", phoneNumberList);
    return (
    <div className= "App">
        {displayingListManager ? 
            <ListManager 
                phoneNumberList={phoneNumberList}
                setPhoneNumberList={setPhoneNumberList}
            /> 
            : <HomePage
                changePage={setDisplayingListManager}
                phoneNumberList={phoneNumberList}
                setPhoneNumberList={setPhoneNumberList}
                displayingListManager={displayingListManager}
                setDisplayingListManager={setDisplayingListManager}
            />}
        <div><img src={logo}></img></div>
    </div>
    )
}
