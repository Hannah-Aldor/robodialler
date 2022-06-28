import './ListManager.css';
import PhoneNumberContainer from './PhoneNumberContainer.jsx';
import ControlMenu from './ControlMenu.jsx';
export default function ListManager() {
    return (
        <div className="listManagerContainer">
            <div className="leftContainer">
                <PhoneNumberContainer/>
                <button className="redButton">Delete All</button>
            </div>
            <div className="rightContainer">
                <ControlMenu/>
                <button className="redButton">Deploy</button>
            </div>
        </div>
    );
}