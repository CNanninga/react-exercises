import React from 'react';

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return (
            <p>The water would boil.</p>
        );
    } else {
        return (
            <p>The water would not boil.</p>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {temperature: ''};
    }

    handleChange(e) {
        this.setState({temperature: e.target.value})
    }

    render() {
        const temperature = this.state.temperature;
        return (
            <fieldset>
                <legend>Enter temperature in Celsius:</legend>
                <input value={temperature} onChange={this.handleChange.bind(this)} />
                <BoilingVerdict celsius={parseFloat(temperature)} />
            </fieldset>
        );
    }
}

export default App;