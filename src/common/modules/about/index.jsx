import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decremented, fetchDetails, incremented } from '../../redux/reducers/countSlice';

function About() {
    const states = useSelector(store => store)
    const dispatch = useDispatch()
    console.log('states**', states);

    return (
        <div>
            {states.counter.loading ? 'loading...' : (
                <>
                    This is about page
                    <button onClick={() => dispatch(incremented(5))}>Increment</button>
                    <button onClick={() => dispatch(decremented(6))}>Decrement</button>
                    <button onClick={() => dispatch(fetchDetails())}>Get cart</button>
                </>
            )}
        </div>
    )
}

export default About
