import './ListManager.css';
export default function UserInfoTile(props) {
    return (
    <div className= "user-info-tile">
        <label htmlFor={props.htmlFor}>{props.label} </label>
            <input
                type='text'
                id={props.id}
                name={props.tenantName}
                onChange={e => props.set(e.target.value)}
            /> 
    </div>
    );
}