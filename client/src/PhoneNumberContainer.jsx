import './ListManager.css';
import x_button from './x-button.png';
export default function PhoneNumberContainer(props) {
    let phoneNumberList = props.phoneNumberList;
    let setPhoneNumberList = props.setPhoneNumberList;
    let phoneNumberDivList = [];
    for (let i = 0; i < phoneNumberList.length; ++i)
        phoneNumberDivList.push(
            <div className="phoneNumberTile">{phoneNumberList[i]}
                <input type="image" src={x_button} className="x-button" onClick={() => {
                    let newList = [...phoneNumberList];
                    newList.splice(i, 1);
                    setPhoneNumberList(newList);
                    }
                }/>
            </div>
        );
    
    return (
        <div className="phoneNumberContainer">{phoneNumberDivList}</div>
    );
}