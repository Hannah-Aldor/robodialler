import './SelectionTile.css';
import './whiteButton.css';

export default function SelectionTile(props) {
    let phoneNumberList = props.phoneNumberList;
    let setPhoneNumberList = props.setPhoneNumberList;
    const setDisplayingListManager = props.setDisplayingListManager;
    if (props.header == "Import phone numbers:") {
        const changeHandler = (e) => {
            const reader = new FileReader();
            reader.onload = function(progressEvent) {
                console.log("%o", this.result);
                const result = this.result.split('\n').filter(word => word.length > 0);
                if (result.length == 0)
                    alert("File selected contains 0 phone numbers.");
                console.log("Result: %o", result);
                let newList = [...phoneNumberList];
                console.log("newList before: %o", newList);
                newList = newList.concat(result);
                console.log("newList: %o", newList);
                setPhoneNumberList(newList);
                setDisplayingListManager(true);
             };
            reader.readAsText(e.target.files[0]);
        };
        return (
        <div className="selectionTile">
            <h1>{props.header}</h1>
            <div>
                <input className="fileInput" type="file" name="file" onChange={changeHandler} />
            </div>
        </div>
        );
    }

    else
        return (
            <div className="selectionTile">
                <h1>{props.header}</h1>
                <button className="whiteButton" onClick={props.buttonAction}>{props.buttonText}</button>
            </div>
        );
}