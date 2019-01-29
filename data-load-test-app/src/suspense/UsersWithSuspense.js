import * as React from 'react';
import UsersTable from "./UsersTable";
import ErrorBoundary from "./ErrorBoundary";

class UsersWithSuspense extends React.Component {
    render() {
        return (
            <ErrorBoundary>
                <React.Suspense fallback={<div>Loading</div>}>
                    <UsersTable/>
                </React.Suspense>
            </ErrorBoundary>
        );
    }
}

export default UsersWithSuspense;
