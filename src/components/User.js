import React from 'react';
import './user.css';
const User = (props) => {
    const { name, title, img } = props.user
    return (
        <div className='user'>
            <div className='user-info' style={{ border: `2px solid #${props.color}` }}>
                <div className='_user'>
                    <img src={img} alt="" />
                    <h3>Name: {name}</h3>
                    <p>Title: <i>{title}</i></p>
                    <button onClick={() => props.viewHandler(props.user)} style={{ background: `#${props.color}` }}>View</button>
                </div>
            </div>
        </div>
    );
};

export default User;