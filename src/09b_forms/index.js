import React from 'react';

class AbstractInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Placeholder'
        };
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert(this.state.value);
    }

    render() {
        return (
            <p></p>
        );
    }
}

class TextInput extends AbstractInput {
    render() {
        return (
            <p>
                <label>Name:</label>
                <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} />
                <button onClick={this.handleSubmit.bind(this)}>Show</button>
            </p>
        );
    }
}

class AreaInput extends AbstractInput {
    render() {
        return (
            <p>
                <label>Description:</label><br />
                <textarea onChange={this.handleChange.bind(this)}></textarea><br />
                <button onClick={this.handleSubmit.bind(this)}>Show</button>
            </p>
        );
    }
}

class Select extends AbstractInput {
    constructor(props) {
        super(props);
        this.state.options = [
            {
                'id': 'grapefruit',
                'label': 'Grapefruit',
            },
            {
                'id': 'lime',
                'label': 'Lime',
            },
            {
                'id': 'coconut',
                'label': 'Coconut',
            }
        ];
    }

    render() {
        return (
            <p>
                <label>Flavor:</label>
                <select value={this.state.value} onChange={this.handleChange.bind(this)}>
                    {this.state.options.map((option) => (
                        <option key={option.id} value={option.id}>{option.label}</option>
                    ))}
                </select>
                <button onClick={this.handleSubmit.bind(this)}>Show</button>
            </p>
        );
    }
}

class Form extends React.Component {
    render() {
        return (
            <form onSubmit={(e) => e.preventDefault()}>
                <TextInput />
                <AreaInput />
                <Select />
            </form>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Forms</h1>
                <Form />
            </div>
        );
    }
}

export default App;