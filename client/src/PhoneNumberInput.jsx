import React, { useState } from 'react';

export default function PhoneNumberInput(props) {
    const [phoneNumbersToAdd, setPhoneNumbersToAdd] = useState([]);
    const phoneNumberList = props.phoneNumberList;
    const setPhoneNumberList = props.setPhoneNumberList;
    console.log("phoneNumbersToAdd: %o", phoneNumbersToAdd);

    const handleSubmit = e => {
        e.preventDefault();

        const checkForDuplicateElements = (arr) => {
            for (let i = 0; i < arr.length; ++i)
            {
                for (let j = 0; j < arr.length; ++j)
                {
                    if (i == j)
                        continue;
                    else
                    {
                        if (arr[i] === arr[j])
                            return true;
                    }
                }
            }
            return false;
        };

        let valid = false;
        let newList = [...phoneNumberList];
        let toAddList = phoneNumbersToAdd.filter(word => word.length > 0);

        newList = newList.concat(toAddList);
        console.log("newList: %o", newList);
        valid = !checkForDuplicateElements(newList);
        if (valid)
            setPhoneNumberList(newList);
        else
            alert("Your input contains duplicate phone numbers, or adds a duplicate phone number to the list. Remove all duplicate elements and resubmit.");
    }
    return (
        <div>
            <form className='form'>
                <label htmlFor='phoneNumber'>Enter a single phone number, or multiple phone numbers separated by spaces:</label>
                <br/>            
                <div className='form-control'>
                    <input
                        type='text'
                        id='phoneNumbersToAdd'
                        name='phoneNumbersToAdd'
                        onChange={e => {setPhoneNumbersToAdd(e.target.value.split(' '));}}
                    />
                    <button onClick={handleSubmit} type='submit'>Add</button>
                </div>
            </form>
        </div>
    )
}