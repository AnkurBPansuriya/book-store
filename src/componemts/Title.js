import React from 'react';

function Title(props){
    // console.log(props)
    return(<>
        {/* <div><h1>This is Title Page</h1></div> */}
    <h1>Hello {props.name} Coders, Good Morning</h1>
    {props.children}
    </>
    )
}

export default Title;