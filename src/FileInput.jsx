import React, { useState } from 'react';

export default function FileInput(props) {
    let phoneNumberList = props.phoneNumberList;
    let setPhoneNumberList = props.setPhoneNumberList;

    const changeHandler = (e) => {
        const reader = new FileReader();
        reader.onload = function(progressEvent) {
            const reader = new FileReader();
                console.log("%o", this.result);
                const result = this.result.split('\n').filter(word => word.length > 0);
                if (result.length == 0)
                    alert("File selected contains 0 phone numbers.");
                else {
                    console.log("Result: %o", result);
                    let newList = [...phoneNumberList];
                    console.log("newList before: %o", newList);
                    newList = newList.concat(result);
                    console.log("newList: %o", newList);
                    setPhoneNumberList(newList);
                };
        }
        reader.readAsText(e.target.files[0]);
	};

    return (
        <div>
			<input type="file" name="file" onChange={changeHandler} />
        </div>
    )
}