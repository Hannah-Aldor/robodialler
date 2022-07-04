import './SelectionTile.css';
import './whiteButton.css';

export default function SelectionTile(props) {
    return (
        <div className="selectionTile">
            <h1>{props.header}</h1>
            <button className="whiteButton" onClick={props.buttonAction}>{props.buttonText}</button>
        </div>
    );
}