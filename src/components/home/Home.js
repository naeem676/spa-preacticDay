import React from 'react';
import { useEffect, useState } from 'react';
import Friends from '../friends/Friends';


const Home = () => {
    const [friends,setfriends] = useState([]);

    useEffect(() =>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setfriends(data))
    },[])
    return (
        <div>
             <h1>friends:{friends.length}</h1>
    {
      friends.map( friend => <Friends friend={friend}></Friends>)
    }

        </div>
    );
};

export default Home;