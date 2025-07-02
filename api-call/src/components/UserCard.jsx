import React from "react";  

const UserCard = (props) => {

    console.log(props.data, "UserCard");
    return (
        <div className="user-card">
            <img className="user-img" src={props.data.picture.large} alt="User Avatar" />
            <h2>{props.data.name.first}</h2>
            <p>{props.data.phone}</p>
            <p>{props.data.location.city}, {props.data.location.state}</p>
        </div>
    );
}

export default UserCard;