import './UserLookup.css';
import './GitHubUserSummary';

import React, { FormEvent, useState } from 'react';

import GitHubUserSummary from './GitHubUserSummary';

export function UserLookup() {

    const [ username, setUsername ] = useState( '' );
    const [ submittedUsername, setSubmittedUsername ] = useState( '' );
    function handleSubmit( e: FormEvent ) {
        e.preventDefault();
        setSubmittedUsername( username );
    }

    return (
        <div className="UserLookup">
            <h3>UserLookup</h3>
            <form onSubmit={ handleSubmit }>
                <input className="labelText" value={ username } onChange={ e => setUsername( e.target.value ) } />
                <button type="submit" className="showUserButton">Show User</button>
            </form>

            <GitHubUserSummary username={ submittedUsername } />
        </div>
    );
}