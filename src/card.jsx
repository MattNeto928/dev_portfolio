import React from "react";

const card = (props) => {

    return (
        <>
            <div className='card' id={props.id} style={props.style}>
                <h1>
                    {props.title}
                </h1>
                <p >
                    {props.content}
                </p>
            </div>
        </>
    );
};

export default card;