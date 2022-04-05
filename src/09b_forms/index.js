import React from 'react';

function useFormFieldState(value, setValue) {
    function handleChange(event) {
        setValue(event.target.value);
    }

    function handleSubmit(event) {
        alert(value);
    }

    return {handleChange, handleSubmit};
}

function TextInput(props) {
    const [value, setValue] = React.useState('Placeholder');
    const {handleChange, handleSubmit} = useFormFieldState(value, setValue);

    return (
        <p>
            <label>Name:</label>
            <input type="text" value={value} onChange={handleChange} />
            <button onClick={handleSubmit}>Show</button>
        </p>
    );
}

function AreaInput(props) {
    const [value, setValue] = React.useState('');
    const {handleChange, handleSubmit} = useFormFieldState(value, setValue);

    return (
        <p>
            <label>Description:</label><br />
            <textarea value={value} onChange={handleChange}></textarea><br />
            <button onClick={handleSubmit}>Show</button>
        </p>
    );
}

function Select(props) {
    const [options, setOptions] = React.useState([
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
    ]);
    const [value, setValue] = React.useState('grapefruit');
    const {handleChange, handleSubmit} = useFormFieldState(value, setValue);

    return (
        <p>
            <label>Flavor:</label>
            <select value={value} onChange={handleChange}>
                {options.map((option) => (
                    <option key={option.id} value={option.id}>{option.label}</option>
                ))}
            </select>
            <button onClick={handleSubmit}>Show</button>
        </p>
    );
}

function Form(props) {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <TextInput />
            <AreaInput />
            <Select />
        </form>
    );
}

function App(props) {
    return (
        <div>
            <h1>Forms</h1>
            <Form />
        </div>
    );
}

export default App;