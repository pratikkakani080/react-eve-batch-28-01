import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router'
import { dataSet } from '../../../utils/static'

function CardDetails() {
    const [cardData, setCardData] = useState(JSON.parse(localStorage.getItem('data')))
    const params = useParams() // used to fetch details from dynamic routing
    const [searchParams, _] = useSearchParams()  // used to fetch query params from URL
    const title = searchParams.get('title') || ''
    const id = searchParams.get('id')
    console.log('filterdData**', dataSet.find(el => el.title === title))
    console.log('params**', params)

    useEffect(() => {
        fetch("https://dummyjson.com/recipes")
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                console.log('filterdData**', res.recipes.find(el => el.id === Number(id || params.id)))
            });
    }, []);
    return (
        <div>
            {title} this is card details {cardData?.title}
        </div>
    )
}

export default CardDetails
