import React from 'react'

const FriendCard = (props) => {
    return (
        <div>
            <h2>{props.details.name}</h2>
            <p>Age: {props.details.age}</p>
            <p>Email: {props.details.email}</p>
        </div>
    )
}

export default FriendCard
