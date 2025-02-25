import React, { useState } from 'react'
import Context2 from '../configurations/context2';

/**
 * this file is created to hold provider wrapper
 * @param {*} props props is containing properties of parent component
 * @returns return context provider wrapper
 */
function Context2Provider(props) {
    const [data2, setData2] = useState(0);

    return (
        <Context2.Provider value={{ setData2, data2 }}>
            {props.children}
        </Context2.Provider>
    )
}

export default Context2Provider
