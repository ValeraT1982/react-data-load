import React, {useState, useEffect} from 'react';
import Api from "../api";

function UsersWithHooks() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(async () => {
        try {
            const response = await Api.getUsers();
            const json = await response.json();

            setData(json);
        } catch (e) {
            setError(e.message || 'Unexpected error');
        }

        setLoading(false);
    }, []);

    if (loading) {
        return <div>Loading</div>
    }

    if (error) {
        return <div style={{color: 'red'}}>ERROR: {error}</div>
    }

    return (
        <table>
            <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Active?</th>
                <th>Posts</th>
                <th>Messages</th>
            </tr>
            </thead>
            <tbody>
            {data.map(u =>
                <tr key={u.id}>
                    <td>{u.firstName}</td>
                    <td>{u.lastName}</td>
                    <td>{u.active ? 'Yes' : 'No'}</td>
                    <td>{u.posts}</td>
                    <td>{u.messages}</td>
                </tr>
            )}
            </tbody>
        </table>
    );
}

export default UsersWithHooks;
