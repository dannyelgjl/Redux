import React from 'react';
import './styles.css';

import Message from '../Message';
import { useSelector } from 'react-redux';

const Messages = () => {
    const { messages } = useSelector((state) => state.layout);

    console.log(messages);

    return (
        <div className="messages">
            {messages.map((mg, index) => (
                <Message  key={index} message={mg}/>
            ))}
        </div>
    )
}

export default Messages;