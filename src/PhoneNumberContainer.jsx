import './ListManager.css';

export default function PhoneNumberContainer(props) {
    let phoneNumberList = props.phoneNumberList;
    let setPhoneNumberList = props.setPhoneNumberList;
    let phoneNumberDivList = [];
    for (let i = 0; i < phoneNumberList.length; ++i)
        phoneNumberDivList.push(
            <div className="phoneNumberTile">{phoneNumberList[i]}
                <button onClick={() => {
                    let newList = [...phoneNumberList];
                    newList.splice(i, 1);
                    setPhoneNumberList(newList);
                    }
                }></button>
            </div>
        );
    
    return (
        <div className="phoneNumberContainer">{phoneNumberDivList}</div>
    );
}