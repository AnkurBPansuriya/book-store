import React from 'react';

const Title = (props) => {
    const { message} = props;
    return (
        <div>
            <h1>Hello , {message}</h1>
        </div>
    )
}
export default Title;