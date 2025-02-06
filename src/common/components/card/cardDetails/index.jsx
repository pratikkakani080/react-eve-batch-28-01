import React, { useState } from 'react'

function CardDetails() {
    const [cardData, setCardData] = useState(JSON.parse(localStorage.getItem('data')))
    return (
        <div>
            this is card details {cardData?.title}
        </div>
    )
}

export default CardDetails
