import React, { useReducer, useState } from 'react'
import SubComp1 from './subComp1'
import SubComp2 from './subComp2'

const localInitialState = {
    count: 0,
    text: 'test'
}

const localRed = (state, action) => {
    switch (action.type) {
        case 'CHANGE_TEXT':
            return { ...state, text: action.payload }
        case 'CHANGE_COUNT':
            return { ...state, count: action.payload }
        default:
            return state
    }
}

function Global() {
    const var0 = 'variable from global file'
    const [stateuplftn, setStateuplftn] = useState()
    const [state, dispatch] = useReducer(localRed, localInitialState)

    return (
        <div>
            Global route
            <SubComp1 var0={var0} setStateuplftn={setStateuplftn} />
            <SubComp2 data={stateuplftn} />
            {state?.count}<br />
            <button onClick={() => dispatch({ type: 'CHANGE_COUNT', payload: state.count + 1 })}>Increase Count</button><br />
            {state?.text}<br />
            <button onClick={() => dispatch({ type: 'CHANGE_TEXT', payload: state.text + ' test' })}>Change text</button>
        </div>
    )
}

export default Global
