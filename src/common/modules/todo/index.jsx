import React, { useEffect } from 'react'
import useStorage from '../../hooks/useStorage'

function Todo() {
    const [state, setState, clear] = useStorage('teststestestesetestteses')

    useEffect(() => {
        console.log('var1**',
            setState('testing', 'testing'),
            setState('data', 'data'),
            setState('dsafsdfsd', 'dsafsdfsd'),
            state('testing')
        );

    }, [])

    const data = [
        {
            id: '123',
            title: 'test1',
            status: 'todo'
        },
        {
            id: '234',
            title: 'test2',
            status: 'completed'
        }
    ]
    return (
        <>
            <button onClick={() => clear()}>Clear data</button>
            <div style={{ display: 'flex' }}>
                <div>Todo
                    {
                        data.filter(el => el.status === 'todo').map(el => {
                            return (
                                <div>{el.title}</div>

                            )
                        })
                    }
                </div>
                <div>Ip
                    {
                        data.filter(el => el.status === 'ip').map(el => {
                            return (
                                <div>{el.title}</div>

                            )
                        })
                    }
                </div>
                <div>Completed
                    {
                        data.filter(el => el.status === 'completed').map(el => {
                            return (
                                <div>{el.title}</div>

                            )
                        })
                    }
                </div>
                <div>QA
                    {
                        data.filter(el => el.status === 'qa').map(el => {
                            return (
                                <div>{el.title}</div>

                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Todo
