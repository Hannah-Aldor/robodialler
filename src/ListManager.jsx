import './ListManager.css';
import './App.css';
import PhoneNumberContainer from './PhoneNumberContainer.jsx';
import ControlMenu from './ControlMenu.jsx';

export default function ListManager(props) {
    const phoneNumberList = props.phoneNumberList;
    const setPhoneNumberList = props.setPhoneNumberList;
    return (
        <div className="pageContainer" id="listManager">
            <div className="leftContainer">
                <PhoneNumberContainer phoneNumberList={phoneNumberList} setPhoneNumberList={setPhoneNumberList}/>
                <button className="redButton" onClick={() => setPhoneNumberList([])}>Delete All</button>
            </div>
            <div className="rightContainer">
                <ControlMenu phoneNumberList={phoneNumberList} setPhoneNumberList={setPhoneNumberList}/>
                <button className="redButton">Deploy</button>
            </div>
        </div>
    );
}