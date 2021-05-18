import { useEffect, useState } from 'react';

import { Repos } from '../model/GitHubApiModel';
import { fetchUserRepos } from './GitHubApiService';

interface Props {
    username: string;
}

export function Repository( { username }: Props ) {
    const [ repo, setRepo ] = useState<Repos | null>( null );
    useEffect( () => {
        fetchUserRepos( username ).then( data => {
            setRepo( data );
        } );
    }, [ repo ] );

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