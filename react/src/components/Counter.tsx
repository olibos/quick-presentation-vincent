import React, { ChangeEvent, useEffect, useRef, useState } from "react";

interface CounterProps
{
    initialValue: number;
}
export function Counter({initialValue}: CounterProps)
{
    const input = useRef<HTMLInputElement>(null);
    const [value, setValue] = useState(initialValue);
    useEffect(() =>
    {
        input.current.style.color = 'red';
        console.info('Counter: Effect', input);

        return ()=>{console.info('Unmount', input)}
    }, []);

    const decrement = () => setValue(v => v - 1);
    const increment = () => setValue(v => v + 1);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(parseInt(e.target.value, 10));

    return (
        <>
            <button onClick={decrement}>-</button>
            <input ref={input} type="number" value={value} onChange={handleChange} />
            <button onClick={increment}>+</button>
        </>
    );
}