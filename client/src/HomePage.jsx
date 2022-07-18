import SelectionTile from './SelectionTile.jsx';
import './App.css';
import './HomePage.css';
import './logo.css'


export default function HomePage(props) {
    return (
    <div className="pageContainer">
        <SelectionTile 
            header="Import phone numbers:"
            buttonText="Choose File"
            phoneNumberList={props.phoneNumberList}
            setPhoneNumberList={props.setPhoneNumberList}
            displayingListManager={props.displayingListManager}
            setDisplayingListManager={props.setDisplayingListManager}
        />
        <SelectionTile header="Or type directly to list:" buttonText="Go to List Manager" buttonAction={props.changePage}/>       
    </div>
    );
};

function chooseFile() {
    console.log("Button pressed!");
}
