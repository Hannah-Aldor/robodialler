import './SelectionTile.css';

export default function SelectionTile(props) {
    return (
        <div className="selectionTile">
            <h1>{props.header}</h1>
            <button onClick={props.buttonAction}>{props.buttonText}</button>
        </div>
    );
}