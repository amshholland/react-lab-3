import { useEffect, useState } from 'react';

import { Repos } from '../model/GitHubApiModel';

interface Props {
    repo: Repos;
}

export function Repository( { repo }: Props ) {
    return (
        <div className="Repository">
            <h2>Repositories</h2>
            <h3>{ repo.name }</h3>
            <p>{ repo.description }</p>
            <p>Language: { repo.language } </p>
            <p> Last Updated: { repo.updated_at } </p>
            <p>No repositories found</p>;
        </div >
    );
}