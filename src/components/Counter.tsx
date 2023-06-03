import React, {useState} from 'react';
import style from './Counter.module.scss'


export const Counter = () => {

    const [count, setCount] = useState<number>(0);

    function increment() {
        setCount(count + 1)
    };

    return (
        <div>
            <h1 className={style.title}>{count}</h1>
            <button onClick={increment}>Увеличить на 1</button>
        </div>
    );
};

