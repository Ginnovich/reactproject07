import React from 'react';
import { useState} from 'react';

export default function Square() {
    return (
        <button className="square" 
        onClick={props.onClick}
        >
        {props.value}
        </button>
    )
}

export const outlineColor = () => {
    const colors = ["violet", "blue"];
    const LenColors = colors.length;

    const [color, setColor] = useState("violet");

    const changeColor = () => {
        const index = Math.floor(Math.random() * LenColors);
        const pickedColor = colors[index];
        setColor(pickedColor);
    };

    return (
        <div
            style={{
                border: "4px",
                borderColor: color
            }}
        >
            <button.square style={{ color: "#sss"}}></button.square>
            <button onClick={changeColor}></button>
        </div>
    )
}


