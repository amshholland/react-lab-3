import './UserLookup.css';
import './GitHubUserSummary';

import React, { FormEvent, useState } from 'react';

import GitHubUserSummary from './GitHubUserSummary';
import { User } from '../model/GitHubApiModel';

interface Props {
    username: string;
}

export function UserLookup( user: Props ) {
    const [ username, setUsername ] = useState( '' );

    function handleSubmit( e: FormEvent ) {
        e.preventDefault();

    }
    // onSubmit( username );

    setUsername( '' );

    return (
        <div className="UserLookup" >
            <form onSubmit={ handleSubmit }>
                <label className="labelText">Enter a GitHub username: <input type="text" id="username" onChange={ e => setUsername( e.target.value ) } value={ username } /></label>
                <button type="submit" className="showUserButton">Show User</button>
            </form>
            <GitHubUserSummary username={ username } />
        </div >
    );
}