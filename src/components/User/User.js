import React from 'react';
import './user.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

const User = (props) => {
    const { name, title, img } = props.user
    return (
        <div className='user'>
            <div className='user-info' >
                <div className='_user'>
                    <img src={img} alt="" />
                    <h3>Name: {name}</h3>
                    <p>Title: <i>{title}</i></p>
                    <button onClick={() => props.viewHandler(props.user)} style={{ background: `#${props.color}` }}>
                        <FontAwesomeIcon icon={faEye} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default User;