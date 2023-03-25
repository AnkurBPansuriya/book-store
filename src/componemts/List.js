import React from 'react'
import Title from './Title'

function List() {
    const list = [
        {
            id: 1,
            title: 'Title 01',
            description: 'This is Description 1',
        },
        {
            id: 2,
            title: 'Title 02',
            description: 'This is Description 2',
        },
        {
            id: 3,
            title: 'Title 03',
            description: 'This is Description 3',
        },
        {
            id: 4,
            title: 'Title 04',
            description: 'This is Description 4',
        },
    ]

    const listVar = list.map((List) => <Title key={List.id} List={List} />)

    return (
        <div>{listVar}</div>
    )
}

export default List