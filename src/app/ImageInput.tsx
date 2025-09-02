'use client';

import React, { FC, useState } from "react";

interface ImageInputProps {
    file: string;
    onImageInput: Function;
}

const ImageInput : FC<ImageInputProps> = ({file, onImageInput}) => {
    const [file2, setFile2] = useState("");
    function handleChange(e : React.ChangeEvent<HTMLInputElement>) {
        console.log(e.target.files);
        if (e.target.files) {
        setFile2(URL.createObjectURL(e.target.files[0]));
        console.log("File Changed");
        console.log(file);
        } else {
        console.log("IFF NOT FIRING!");
        }
    }
    return (
        <>
            <h2>Add Image:</h2>
            <input type="file" onChange={handleChange} />
            {file2 && <img src={file2} className="image-preview" alt="Uploaded preview" />}
        </>
    )

}

export default ImageInput