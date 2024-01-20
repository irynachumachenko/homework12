import React from 'react';
import useFetch from '../../useFetch';
import UserCard from '../../components/UserCard/UserCard';
import './UserList.css';

const UserListContainer = () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const [data, error, isLoading] = useFetch(url);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div className='users-list-container'>
            {data.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
    );
};

export default UserListContainer;
