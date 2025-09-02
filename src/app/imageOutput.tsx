import React, { FC, useState } from "react";

interface ImageOutputProps {
    file: string;
    onImageInput?: Function;
}

const ImageOutput: FC<ImageOutputProps> = ({ file }) => {
    return (
        <>
            <h2>Generate Image:</h2>
            <button onClick={() => {console.log("Filtered Image")}}>Filter Image</button>
            {file && <img src={file} className="image-preview" alt="Uploaded preview" />}
        </>
    )
}

export default ImageOutput;