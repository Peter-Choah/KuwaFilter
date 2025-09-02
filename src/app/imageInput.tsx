import React, { FC, useState } from "react";

interface ImageInputProps {
    file: string;
    onImageInput: Function;
}

const ImageInput : FC<ImageInputProps> = ({file, onImageInput}) => {

    return (
        <>
            <h2>Add Image:</h2>
            <input type="file" onChange={onImageInput} />
            {file && <img src={file} className="image-preview" alt="Uploaded preview" />}
        </>
    )

}

export default ImageInput;