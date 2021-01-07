import React from 'react';
import { Link } from 'react-router-dom';

const Friends = (props) => {
    const{name, email, id} =props.friend;
    const friendstayle = {
        border :'10px solid gray',
        margin:'20px',
        padding:'20px',
        borderRadius:'10px'
    }
    return (
        <div style={friendstayle}>
        <h4>name:{name}</h4>
        <p>email:{email}</p>
        <p><Link to={`/friend/${id}`}>Show detail of :{id}</Link></p>
            
        </div>
    );
};

export default Friends;