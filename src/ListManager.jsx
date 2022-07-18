import './ListManager.css';
import './App.css';
import PhoneNumberContainer from './PhoneNumberContainer.jsx';
import ControlMenu from './ControlMenu.jsx';
import {useState} from 'react';

export default function ListManager(props) {
    const phoneNumberList = props.phoneNumberList;
    const setPhoneNumberList = props.setPhoneNumberList;
    const [deployMode, setDeployMode] = useState(1);
    return (
        <div className="pageContainer" id="listManager">
            <div className="leftContainer">
                <PhoneNumberContainer phoneNumberList={phoneNumberList} setPhoneNumberList={setPhoneNumberList}/>
                <button className="redButton" onClick={() => setPhoneNumberList([])}>Delete All</button>
            </div>
            <div className="rightContainer">
                <ControlMenu
                    phoneNumberList={phoneNumberList}
                    setPhoneNumberList={setPhoneNumberList}
                    deployMode={deployMode}
                    setDeployMode={setDeployMode}
                />
                <button className="redButton" disabled={phoneNumberList.length == 0 ? true : false}>Deploy</button>
            </div>
        </div>
    );
}