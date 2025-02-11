import React, { useEffect, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router'
import { dataSet } from '../../../utils/static'
import Button from '../../../elements/button'

function CardDetails() {
    const [cardData, setCardData] = useState(JSON.parse(localStorage.getItem('data')))
    const [isClicked, setIsClicked] = useState(false)
    const [isClicked2, setIsClicked2] = useState(false)

    const params = useParams() // used to fetch details from dynamic routing
    const [searchParams, _] = useSearchParams()  // used to fetch query params from URL
    const title = searchParams.get('title') || ''
    const id = searchParams.get('id')
    console.log('filterdData**', dataSet.find(el => el.title === title))
    console.log('params**', params)

    console.log('running on mounting out', isClicked);
    console.log('running on mounting out 2', isClicked2);
    useEffect(() => {
        console.log('running on mounting in', isClicked);
        console.log('running on mounting in 2', isClicked2);
        return () => {
            console.log('running on unmounting');

        }
    }, [isClicked])

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
            <Button handleOnClick={() => setIsClicked(!isClicked)} />
            <Button handleOnClick={() => setIsClicked2(!isClicked2)} />
            <Link to={'/'} > To Home</Link>
        </div>
    )
}

export default CardDetails
