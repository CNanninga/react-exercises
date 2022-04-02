import React from 'react';

function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
            <footer>Footer Content</footer>
        </div>
    );
}

function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h2 className="Dialog-title">{props.title}</h2>
            <p className="Dialog-message">{props.message}</p>
            {props.children}
        </FancyBorder>
    );
}

function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    );
}

function SplitPaneContent(props) {
    return (
        <SplitPane
            left={
                <p>This demonstrates how arbitrary properties can be used for multiple content sections in a parent component.</p>
            }
            right={
                <p>It requires more verbose syntax than props.children.</p>
            }
            />
    );
}

function LoginDialog(props) {
    return (
        <Dialog title="Login" message="Log in with your credentials">
            <p>This demonstrates how a more specialized version of a component can be accomplished with composition instead of extending the more general version.</p>
        </Dialog>
    );
}

function App(props) {
    return (
        <div>
            <h1>Containment</h1>
            <Dialog title="Welcome" message="Thank you for visiting our spacecraft! This demonstrates a component that uses props.children." />
            <h1>Multiple Containment</h1>
            <SplitPaneContent />
            <h1>Specialization</h1>
            <LoginDialog />
        </div>
    );
}


export default App;