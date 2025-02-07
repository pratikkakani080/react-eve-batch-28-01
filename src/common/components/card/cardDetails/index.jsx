import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router'
import { dataSet } from '../../../utils/static'

function CardDetails() {
    const [cardData, setCardData] = useState(JSON.parse(localStorage.getItem('data')))
    const params = useParams()
    const [searchParams, _] = useSearchParams()
    const title = searchParams.get('title') || ''
    const id = searchParams.get('id')
    console.log('filterdData**', dataSet.filter(el => el.title === title))
    console.log('params**', params)

    useEffect(() => {
        fetch("https://dummyjson.com/recipes")
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                console.log('filterdData**', res.recipes.filter(el => el.id === Number(id || params.id)))
            });
    }, []);
    return (
        <div>
            {title} this is card details {cardData?.title}
        </div>
    )
}

export default CardDetails
