import React from 'react';

class Greeting extends React.Component {
    render() {
        if (this.props.user) {
            return (
                <p>Hello, {this.props.user}!</p>
            );
        } else {
            return (
                <p>Hello, stranger!</p>
            );
        }
    }
}

class Greetings extends React.Component {
    render() {
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
}

// ========================================
// Include in root index.js:

// ReactDOM.render(
//     <Greetings />,
//     document.getElementById('root')
// );

export default Greetings;