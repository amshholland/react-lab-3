import { useEffect, useState } from 'react';

import { Repos } from '../model/GitHubApiModel';

export function Repository() {
    const [ repo, setRepo ] = useState<Repos | null>( null );

    return (
        <div className="Repository">
            <h2>Repositories</h2>
            {repo ?
                <div className="repository">
                    <h3>{ repo.name }</h3>
                    <p>{ repo.description }</p>
                    <p>Language: { repo.language } </p>
                    <p> Last Updated: { repo.updated_at } </p>
                </div> :
                <p>No repositories found</p>
            }
        </div>
    );
}