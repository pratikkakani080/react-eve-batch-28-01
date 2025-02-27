import React, { memo } from 'react'

function Child(props) {
    console.log('testing children render***', props);

    return (
        <div>
            child comp
        </div>
    )
}

export default memo(Child)
