import PhoneNumberInput from './PhoneNumberInput.jsx';
import FileInput from './FileInput.jsx';

export default function ControlMenu(props) {
    const phoneNumberList = props.phoneNumberList;
    const setPhoneNumberList = props.setPhoneNumberList;
    return (
    <div>
        <PhoneNumberInput 
            phoneNumberList={props.phoneNumberList}
            setPhoneNumberList={props.setPhoneNumberList}
        />
        <FileInput 
            phoneNumberList={props.phoneNumberList}
            setPhoneNumberList={props.setPhoneNumberList}
        />
        <div>Dropdown Menu</div>
    </div>
    );
}