import PhoneNumberInput from './PhoneNumberInput.jsx';
import FileInput from './FileInput.jsx';
import './ControlMenu.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default function ControlMenu(props) {
    const phoneNumberList = props.phoneNumberList;
    const setPhoneNumberList = props.setPhoneNumberList;
    const options = [
        'Generate Callback', 'Delete Callback', 'Robodialler'
      ];
    const defaultOption = options[0];

    const dropdownSelect = (e) => {
        
    }
    return (
    <div className="controlMenu">
        <PhoneNumberInput 
            phoneNumberList={props.phoneNumberList}
            setPhoneNumberList={props.setPhoneNumberList}
        />
        <FileInput 
            phoneNumberList={props.phoneNumberList}
            setPhoneNumberList={props.setPhoneNumberList}
        />
        <Dropdown
            options={options}
            value={defaultOption}
            onChange={dropdownSelect}
            placeholder="Select an option" />;
    </div>
    );
}