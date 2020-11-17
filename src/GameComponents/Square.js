import React from 'react'
import { useState } from 'react'

const colors = {X: "violet", O: "blue"};

export default function Square(props) {
    return (
      <button className="square" 
        onClick={props.onClick} 
        style={{borderColor: colors[props.value], color: colors[props.value]}}
        >
        {props.value}
      </button>
    );
}

export const useRandomColor = () => {
    const colors = ["violet", "blue"];
    const LenColors = colors.length;

    const [color, setColor] = useState("violet");

    const changeColor = () => {
        const index = Math.floor(Math.random() * LenColors);
        const pickedColor = colors[index];
        setColor(pickedColor);
    };

console.log (color);

    return (
      <Square onClick={changeColor}></Square>
    )
}