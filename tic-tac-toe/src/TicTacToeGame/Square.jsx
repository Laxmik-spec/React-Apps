import React from 'react';

const Square = (props) => {
    return (

            <div 
                onClick={props.onClick}
                style={{
                    width: "100%",
                    height: "100px",
                    border: "1px solid black",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
            }} className="square">
            <h5>{props.value}</h5>
            </div>
    

    );
};

export default Square;