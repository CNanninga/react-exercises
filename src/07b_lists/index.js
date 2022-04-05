import React from 'react';

function ListItem(props) {
    return (
        <li id={'user_' + props.id}>{props.username}</li>
    );
}

function App (props) {
    const {getUsers, sort, timesSorted} = useApp();

    return (
        <div>
            <h1>Lists</h1>
            <p><button onClick={sort}>Sort</button><br />
            Times sorted: {timesSorted}</p>
            <ul>
                {getUsers().map((user) => (
                    <ListItem key={user.id} id={user.id} username={user.username} />
                ))}
            </ul>
        </div>
    );
}





function useApp () {
    const [direction, setDirection] = React.useState(null);
    const [users, setUsers] = React.useState([
        {
            id: '12345',
            username: 'Carl',
        },
        {
            id: '34567',
            username: 'Kathy',
        },
        {
            id: '45678',
            username: 'Frank',
        }
    ]);
    const [timesSorted, setTimesSorted] = React.useState(0);

    const getUsers = React.useCallback(function() {
        return users;
    }, [users]);

    const sort = React.useCallback(function() {
        let newDirection = (direction === null || direction == 'desc') ? 'asc' : 'desc';
        let newUsers = users.sort((userA, userB) => {
            if (newDirection == 'asc') {
                return (userB.username > userA.username) ? -1 : 1;
            } else if (newDirection == 'desc') {
                return (userA.username > userB.username) ? -1 : 1;
            }
            return 0;
        });
        let newTimesSorted = timesSorted + 1;

        setDirection(newDirection);
        setUsers(newUsers);
        setTimesSorted(newTimesSorted);
    }, [direction, setDirection, users, setUsers, timesSorted, setTimesSorted]);

    return {getUsers, sort, timesSorted};
}

export default App;