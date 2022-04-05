import React from 'react';

function Clock(props) {
    const [date, setDate] = React.useState(new Date());

    let timerId = null;

    React.useEffect(() => {
        timerId = setInterval(
            () => this.tick(),
            1000
        );

        return () => {
            clearInterval(timerId);
        }
    }, []);

    function tick() {
        setDate(new Date());
    }

    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {date.toLocaleTimeString()}.</h2>
        </div>
    );
}

export default Clock;