import React, { useState } from 'react'
import MyContext from '../configurations/myContext';

function MyContextProvider(props) {
    const [data, setData] = useState(0);

    return (
        <MyContext.Provider value={{ setData, data }}>
            {props.children}
        </MyContext.Provider>
    )
}

export default MyContextProvider
