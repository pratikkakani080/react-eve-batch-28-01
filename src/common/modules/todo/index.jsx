import React from 'react'

function Todo() {
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
    )
}

export default Todo
