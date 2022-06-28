import SelectionTile from './SelectionTile.jsx';
import './HomePage.css';
import './logo.css'


export default function HomePage(props) {
    return (
    <div className="homePageContainer">
        <div className="selectionsContainer">
            <SelectionTile header="Import phone numbers:" buttonText="Choose File" buttonAction={chooseFile}/>
            <SelectionTile header="Or type directly to list:" buttonText="Go to List Manager" buttonAction={props.changePage}/>
        </div>
        
    </div>
    );
};

function chooseFile() {
    console.log("Button pressed!");
}
