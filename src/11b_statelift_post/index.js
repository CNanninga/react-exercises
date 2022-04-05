import React from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

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

function TemperatureInput(props) {
    function handleChange(e) {
        props.onTemperatureChange(e.target.value);
    }

    return (
        <fieldset>
            <legend>Enter temperature in {scaleNames[props.scale]}:</legend>
            <input value={props.temperature} onChange={handleChange} />
        </fieldset>
    );
}

function App(props) {
    const [temperature, setTemperature] = React.useState('');
    const [scale, setScale] = React.useState('c');

    const celsius = (scale === 'f') ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = (scale === 'c') ? tryConvert(temperature, toFahrenheit) : temperature;

    function toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

    function toFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }

    function tryConvert(temperature, convert) {
        const input = parseFloat(temperature);
        if (Number.isNaN(input)) {
            return '';
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }

    function handleCelsiusChange(newTemp) {
        setScale('c');
        setTemperature(newTemp);
    }

    function handleFahrenheitChange(newTemp) {
        setScale('f');
        setTemperature(newTemp);
    }

    return (
        <div>
            <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={handleCelsiusChange} />
            <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange} />
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
    );
}

export default App;