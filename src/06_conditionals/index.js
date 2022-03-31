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

class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
        };
    }

    addMessage() {
        let messages = this.state.messages;
        messages.push('');
        this.setState({
            messages: messages
        });
    }

    clearMessages() {
        this.setState({
            messages: []
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.addMessage.bind(this)}>Add Message</button>
                <button onClick={this.clearMessages.bind(this)}>Clear Messages</button>
                {this.state.messages.length > 0 &&
                    <p>You have {this.state.messages.length} unread messages.</p>
                }
            </div>
        );
    }
}

class App extends React.Component {
    render() {
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
}

export default App;