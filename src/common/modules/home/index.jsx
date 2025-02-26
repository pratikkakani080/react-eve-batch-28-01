import React, { useEffect, useRef, useState } from 'react'
import "./home.css";
import Card from '../../components/card';
import { dataSet } from '../../utils/static';
import Recipes from '../../components/recipes';
import { Link, useNavigate } from 'react-router';

function Home() {
    const navigate = useNavigate()
    const [checkingRender, setCheckingRender] = useState([])
    const ref = useRef(null)
    console.log('ref***', ref);
    console.log('checkingRender**', checkingRender);

    useEffect(() => {
        // api call
        setCheckingRender([{ test: 'test' }, { test: 'test2' }])
        // ref.current = [{ test: 'test' }, { test: 'test2' }]
    }, [])


    return (
        <div>
            <div className="cardContainer">.
                <h4 ref={ref}>testing data</h4>
                {dataSet.map((el, i) => {
                    return (
                        <div key={i} onClick={() => {
                            // localStorage.setItem('data', JSON.stringify(el))
                            // navigate(`/card-details/test/123?title=${el.title}`)
                            setCheckingRender([{ test: 'tes4' }, { test: 'test3' }])
                            // ref.current = el
                            // ref.current.style.backgroundColor = 'red'
                        }}>
                            <Card el={el} ref={ref} />
                        </div>
                    );
                })}
            </div>
            <div>
                <Recipes />
            </div>
        </div>
    )
}

export default Home
