import './ListManager.css';
import './App.css';
import PhoneNumberContainer from './PhoneNumberContainer.jsx';
import ControlMenu from './ControlMenu.jsx';
import UserInfoTile from './UserInfoTile.jsx';
import {useState} from 'react';
import { sendPostRequest } from './AJAX.jsx';
import x_button from './x-button.png'

export default function ListManager(props) {
    const phoneNumberList = props.phoneNumberList;
    const setPhoneNumberList = props.setPhoneNumberList;
    const [deployMode, setDeployMode] = useState(1);
    const [show, setShow] = useState(false);
    const [cluster, setCluster] = useState("");
    const [tenantName, setTenantName] = useState("");
    const [actionRequestToken, setActionRequestToken] = useState("");
    const [channelNumber, setChannelNumber] = useState("");
    const [expirationTime, setExpirationTime] = useState("");
    const [callerID, setCallerID] = useState("");
    const [queueID, setQueueID] = useState("");


    const handleSubmit = e => {
        e.preventDefault();
        console.log(`This is my cluster: ${cluster}`);
    };
    return (
        <div className="pageContainer" id="listManager">
            <div className="leftContainer">
                <PhoneNumberContainer phoneNumberList={phoneNumberList} setPhoneNumberList={setPhoneNumberList}/>
                <button className="redButton" onClick={() => setPhoneNumberList([])}>Delete All</button>
            </div>
            <div className="rightContainer" disabled= {show ? true : false}>
                <ControlMenu
                    phoneNumberList={phoneNumberList}
                    setPhoneNumberList={setPhoneNumberList}
                    deployMode={deployMode}
                    setDeployMode={setDeployMode}
                />
                <button
                    className="redButton"
                    // disabled={phoneNumberList.length == 0 ? true : false}
                    onClick={() => {
                        // Send API request

                        
                        // Display popup control menu:
                        setShow(true);
                    }}>Deploy
                </button>
            </div>
            <div className={show ? "popupControl" : "hidden"}>

                <input type="image" src={x_button} name="go-back-button" className="x-button" alt="Submit Form" onClick={() => setShow(false)}/>
                <form id="user-info">
                    <UserInfoTile htmlFor="cluster" label="Cluster" id="cluster" name="cluster" set={setCluster}/>
                    <UserInfoTile htmlFor="tenantName" label="Tenant Name" id="tenantName" name="tenantName" set={setTenantName}/>
                    <UserInfoTile htmlFor="actionRequestToken" label="Action Request Token" id="action-request-token" name="action-request-token" set={setActionRequestToken}/>
                    <UserInfoTile htmlFor="channelNumber" label="Channel Number" id="channel-number" name="channel-number" set={setChannelNumber}/>
                    <UserInfoTile htmlFor="expirationTime" label="Call Expiration (in seconds)" id="expirationTime" name="expiration-time" set={setExpirationTime}/>
                    <UserInfoTile htmlFor="callerID" label="Caller ID" id="caller-id" name="caller-id" set={setCallerID}/>
                    <UserInfoTile htmlFor="queueID" label="Outbound Queue ID" id="queue-id" name="queue-id" set={setQueueID}/>
                </form>
                <button className="redButton" type='submit' onClick = {e => {
                    e.preventDefault();
                    console.log(`This is my cluster: ${cluster}`);
                    // (async function () {
                    //     console.log("Sending AJAX request");
                    //     let requestInput = {"phoneNumberList": phoneNumberList};
                    //     let success = await sendPostRequest("/generateCallback", requestInput);
                    //     console.log("Sending POST request for %o", phoneNumberList);
                    //     }
                    // ) ();
                    }}>Generate Request
                </button>
            </div>
        </div>
    );
}