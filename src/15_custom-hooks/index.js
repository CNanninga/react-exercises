import React from 'react';
import './index.css';

const ChatAPI = {
    users: [
        {id: '12345', online: false},
        {id: '45678', online: false},
        {id: '54387', online: false}
    ],

    callbacks: {},

    init: function() {
        this.users.forEach((user) => {
            this.callbacks[user.id] = [];
        });

        setInterval(() => {
            this.users = this.users.map((user) => ({
                id: user.id,
                online: (Math.random() < 0.5)
            }));

            this.users.forEach((user) => {
                console.log('User ' + user.id + ' online: ' + (user.online ? 'Yes' : 'No'));
                this.callbacks[user.id].forEach((callback) => {
                    callback(user.online)
                });
            });
        }, 3000);
    },

    subscribeToFriendStatus: function(id, callback) {
        if (typeof(this.callbacks[id]) == 'undefined') {
            return;
        }
        this.callbacks[id].push(callback);
    },

    unsubscribeFromFriendStatus: function(id, callbackUnsubscribe) {
        if (typeof(this.callbacks[id]) == 'undefined') {
            return;
        }
        let newCallbacks = [];
        this.callbacks[id].forEach((callback) => {
            if (callback != callbackUnsubscribe) {
                newCallbacks.push(callback);
            }
        });
        this.callbacks[id] = newCallbacks;
    }
};
ChatAPI.init();

function useFriendStatus(friendID) {
    const [isOnline, setIsOnline] = React.useState(null);

    React.useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status);
        }
        ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);

        return () => {
            ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
        }
    });

    return isOnline;
}

function FriendStatus(props) {
    const isOnline = useFriendStatus(props.friend.id);

    if (isOnline === null) {
        return 'Loading...';
    }

    return isOnline ? 'Online' : 'Offline';
}

function FriendListItem(props) {
    const isOnline = useFriendStatus(props.friend.id);

    return (
        <li className={(isOnline) ? 'online' : 'offline'}><span>{props.friend.name}</span></li>
    );
}

function App(props) {
    const friends = [
        {id: '12345', name: 'Chad'},
        {id: '45678', name: 'Jenny'},
        {id: '54387', name: 'Bart'}
    ];

    let messageFriend = friends[0];

    return (
        <div>
            <div className="message-window">
                <h2>Messaging with {messageFriend.name} (<FriendStatus friend={messageFriend} />)</h2>
                <div className="chat">...</div>
            </div>
            <h3>Friends</h3>
            <ul className="friends-list">
                {friends.map((friend) => (
                    <FriendListItem key={friend.id} friend={friend} />
                ))}
            </ul>
        </div>
    );
}

export default App;