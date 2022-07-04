import React, { useState } from 'react';

export default function FileInput() {
    const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (e) => {
		setSelectedFile(e.target.files[0]);
		setIsFilePicked(true);
	};
    const handleSubmit = () => {
        console.log("%o", selectedFile);
    };
    return (
        <div>
			<input type="file" name="file" onChange={changeHandler} />
			<div>
				<button onClick={handleSubmit}>Submit</button>
			</div>
        </div>
    )
}