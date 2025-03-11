import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decremented, incremented } from '../../redux/reducers/countSlice';

function About() {
    const states = useSelector(store => store)
    const dispatch = useDispatch()
    console.log('states**', states);

    return (
        <div>
            This is about page
            <button onClick={() => dispatch(incremented())}>Increment</button>
            <button onClick={() => dispatch(decremented())}>Decrement</button>
        </div>
    )
}

export default About
