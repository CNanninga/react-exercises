import React from 'react';

class ToggleButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((prevState) => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

function EventLink(props) {
    return (
        <a href="https://www.google.com" onClick={props.onClick}>Link {props.value}</a>
    );
}

class EventLinks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 1
        };
    }

    renderLink(i) {
        return (
            <EventLink value={i} onClick={this.handleClick.bind(this, i)} />
        );
    }

    handleClick(i, e) {
        e.preventDefault();
        this.setState({
            number: i,
        });
    }

    render() {
        return (
            <div>
                <ul>
                    <li>{this.renderLink(1)}</li>
                    <li>{this.renderLink(2)}</li>
                    <li>{this.renderLink(3)}</li>
                </ul>
                <h1>{this.state.number}</h1>
            </div>
        );
    }
}

class ToggleApp extends React.Component {
    render() {
        return (
            <div>
                <p><ToggleButton /></p>
                <EventLinks />
            </div>
        );
    }
}

export default ToggleApp;