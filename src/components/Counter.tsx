import React, {useState} from 'react';
import './Counter.scss'

export const Counter = () => {

    const [count, setCount] = useState<number>(0);

    function increment() {
        setCount(count + 1)
    };

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Увеличить на 1</button>
        </div>
    );
};

