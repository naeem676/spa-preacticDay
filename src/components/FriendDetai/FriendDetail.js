import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    }, [] )
    return (
        <div>
            <h1>this is FriendDetail:{friendId}</h1>
            <h4>name:{friend.username}</h4>
            <h4>email:{friend.email}</h4>
            <h4>website:{friend.website}</h4>
        </div>
    );
};

export default FriendDetail;