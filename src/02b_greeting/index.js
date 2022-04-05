import React from 'react';

function Greeting(props) {
    if (props.user) {
        return (
            <p>Hello, {props.user}!</p>
        );
    } else {
        return (
            <p>Hello, stranger!</p>
        );
    }
}

function Greetings(props) {
    return (
        <div>
            <h1>Greetings</h1>
            <h2>Greeting with User</h2>
            <Greeting user="John" />
            <h2>Greeting without User</h2>
            <Greeting user={null} />
        </div>
    );
}

export default Greetings;