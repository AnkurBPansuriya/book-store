import React from 'react'
// import List from './List'
import './Title.css'

function Title ({List}){
  {
    return (
      <>
        <div className='primary'>
          <h2>This is id {List.id},and  {List.title}, and {List.description}</h2>
        </div>
      </>
    )
  }
}

export default Title
