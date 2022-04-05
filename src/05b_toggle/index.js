import React from 'react';

function ToggleButton(props) {
    const [isToggleOn, setIsToggleOn] = React.useState(true);

    function handleClick() {
        setIsToggleOn(!isToggleOn);
    }

    return (
        <button onClick={handleClick}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
    );
}

function EventLink(props) {
    return (
        <a href="https://www.google.com" onClick={props.onClick}>Link {props.value}</a>
    );
}

function EventLinks(props) {
    const [number, setNumber] = React.useState(1);

    function renderLink(i) {
        return (
            <EventLink value={i} onClick={(e) => handleClick(i, e)} />
        );
    }

    function handleClick(i, e) {
        e.preventDefault();
        setNumber(i);
    }

    return (
        <div>
            <ul>
                <li>{renderLink(1)}</li>
                <li>{renderLink(2)}</li>
                <li>{renderLink(3)}</li>
            </ul>
            <h1>{number}</h1>
        </div>
    );
}

function ToggleApp(props) {
    return (
        <div>
            <p><ToggleButton /></p>
            <EventLinks />
        </div>
    );
}

export default ToggleApp;