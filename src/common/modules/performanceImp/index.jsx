import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Child from './Child';
import { instance } from '../../configurations/axiosConfig';

function PerformanceImp() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const res = await instance.post('/objects', {
            "name": "Apple MacBook Pro 16",
            "data": {
                "year": 2019,
                "price": 1849.99,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB"
            }
        })
        console.log('res***', res);

    }


    const calculation = useMemo(() => {
        return expensiveCalculation(count)
    }, [count])

    const increment = useCallback(() => {
        setCount((c) => c + 1);
    }, [])

    const addTodo = () => {
        setTodos((t) => [...t, "New Todo"]);
    };

    return (
        <div>
            <div>
                <h2>My Todos</h2>
                {todos.map((todo, index) => {
                    return <p key={index}>{todo}</p>;
                })}
                <button onClick={addTodo}>Add Todo</button>
            </div>
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
                <h2>Expensive Calculation</h2>
                {calculation}
            </div>
            <hr />
            <Child todos={todos} increment={increment} />
        </div>
    )
}

export default PerformanceImp

const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }
    return num;
};