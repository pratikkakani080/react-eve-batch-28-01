import React from 'react'
import "./home.css";
import Card from '../../components/card';
import { dataSet } from '../../utils/static';
import Recipes from '../../components/recipes';
import { Link, useNavigate } from 'react-router';

function Home() {
    const navigate = useNavigate()
    return (
        <div>
            <div className="cardContainer">
                {dataSet.map((el, i) => {
                    return (
                        <div key={i} onClick={() => {
                            localStorage.setItem('data', JSON.stringify(el))
                            navigate('/card-details')
                        }}>
                            <Card el={el} />
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
