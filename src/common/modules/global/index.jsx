import React, { useState } from 'react'
import SubComp1 from './subComp1'
import SubComp2 from './subComp2'

function Global() {
    const var0 = 'variable from global file'
    const [stateuplftn, setStateuplftn] = useState()
    console.log('log from global', stateuplftn);

    return (
        <div>
            Global route
            <SubComp1
                var0={var0}
                setStateuplftn={setStateuplftn}
            />
            <SubComp2 
            data={stateuplftn}
            />
        </div>
    )
}

export default Global
