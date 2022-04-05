import React from 'react';

function UserGreeting(props) {
    return <p>Welcome back!</p>
}

function GuestGreeting(props) {
    return <p>Please sign up</p>
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    let greeting;
    if (isLoggedIn) {
        greeting = <UserGreeting />;
    } else {
        greeting = <GuestGreeting/>;
    }
    return greeting;
}

function Messages(props) {
    const [messages, setMessages] = React.useState([]);

    function addMessage() {
        let newMessages = messages.slice(0, messages.length);
        newMessages.push('');
        setMessages(newMessages);
    }

    function clearMessages() {
        setMessages([]);
    }

    return (
        <div>
            <button onClick={addMessage}>Add Message</button>
            <button onClick={clearMessages}>Clear Messages</button>
            {messages.length > 0 &&
                <p>You have {messages.length} unread messages.</p>
            }
        </div>
    );
}

function App(props) {
    return (
        <div>
            <h1>Various Conditionals</h1>
            <h2>Conditional Render Return</h2>
            <h3>User Greeting</h3>
            <Greeting isLoggedIn={true} />
            <h3>Guest Greeting</h3>
            <Greeting isLoggedIn={false} />
            <h2>&& Operator</h2>
            <Messages />
        </div>
    );
}

export default App;