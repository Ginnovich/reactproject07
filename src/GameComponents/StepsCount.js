import React, {useState} from 'react'

export default function StepsCount() {
    const [count, setCount] = useState(4)

    function decrementCount() {
        setCount(prevCount => prevCount - 1)
    }

    function incrementCount() {
        setCount(prevCount => prevCount + 1)
    }

    return (
        <>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>    
        </>
    )
}
