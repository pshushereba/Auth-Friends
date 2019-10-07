import React, {useState, useEffect} from 'react'
import axiosWithAuth from '../utils/axiosAuth.js';

import FriendCard from './FriendCard.js';

const FriendsList = () => {
    const [friends, setFriends] = useState([]);
    
    useEffect(() => {
        axiosWithAuth().get('/friends')
        .then((res) => {
            setFriends(res.data)
        })
        .catch((err) => console.log(err))
    }, [])

    console.log(friends);
    
    return (
        <div>
            <h1>Friends List</h1>
            {friends.map((friend) => {
                return <FriendCard details={friend} />
            })}
        </div>
    )
}

export default FriendsList
