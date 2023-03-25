import React from 'react'
// import List from './List'

function Title ({List}){
  {
    return (
      <>
        <div>
          <h2>This is id {List.id},and  {List.title}, and {List.description}</h2>
        </div>
      </>
    )
  }
}

export default Title
