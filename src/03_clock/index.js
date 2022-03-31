import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

// ========================================
// Include in root index.js:

// const root = ReactDOM.createRoot(
//     document.getElementById('root')
// );
// function tick() {
//     root.render(<App/>);
// }
// setInterval(tick, 1000);

export default App;