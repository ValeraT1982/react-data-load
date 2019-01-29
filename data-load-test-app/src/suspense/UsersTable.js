import * as React from 'react';
import {createResource} from "simple-cache-provider";
import {cache} from "./cache";
import Api from "../api";


let UsersResource = createResource(async () => {
    const response = await Api.getUsers();
    const json = await response.json();

    return json;
});

class UsersTable extends React.Component {
    render() {
        let users = UsersResource.read(cache);

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
                {users.map(u =>
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
}

export default UsersTable;
