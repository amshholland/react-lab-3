import './UserLookup.css';
import './GitHubUserSummary';

import React, { FormEvent, useState } from 'react';

import GitHubUserSummary from './GitHubUserSummary';
import { Repository } from './Repository';
import { User } from '../model/GitHubApiModel';

export function UserLookup() {

    return (
        <div>
            <form>
                <label className="labelText">Enter a GitHub username: <input type="text" id="username" /></label>
                <button type="submit" className="showUserButton">Show User</button>
            </form>
            <GitHubUserSummary username="amshholland" />
            <Repository username="amshholland" />
        </div >
    );
}