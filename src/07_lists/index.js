import React from 'react';

function ListItem(props) {
    return (
        <li id={'user_' + props.id}>{props.username}</li>
    );
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            direction: null,
            users: [
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
            ]
        };
    }

    sort() {
        let direction = this.state.direction;
        let users = this.state.users;
        direction = (direction === null || direction == 'desc') ? 'asc' : 'desc';
        users = users.sort((userA, userB) => {
            if (direction == 'asc') {
                return (userB.username > userA.username) ? -1 : 1;
            } else if (direction == 'desc') {
                return (userA.username > userB.username) ? -1 : 1;
            }
            return 0;
        });

        this.setState({
            direction: direction,
            users: users
        });
    }

    render() {
        const users = this.state.users;

        return (
            <div>
                <h1>Lists</h1>
                <p><button onClick={this.sort.bind(this)}>Sort</button></p>
                <ul>
                    {users.map((user) => (
                        <ListItem key={user.id} id={user.id} username={user.username} />
                    ))}
                </ul>
            </div>
        );
    }
}

export default App;