import { Repos, User } from "../model/GitHubApiModel";
import { useEffect, useState } from "react";

import { Repository } from "./Repository";
import { fetchUserProfile } from "./GitHubApiService";
import { fetchUserRepos } from "../service/GitHubApiService";

interface Props {
    username: string;
}

function GitHubUserSummary( { username }: Props ) {
    const [ userProfile, setUserProfile ] = useState<User | null>( null );
    const [ repos, setRepos ] = useState<Repos[]>( [] );

    useEffect( () => {
        if ( username ) {
            fetchUserProfile( username ).then( data => {
                setUserProfile( data );
            } );
        } else {
            setUserProfile( null );
        }
    }, [ { username } ] );

    useEffect( () => {
        fetchUserRepos( username ).then( data => {
            setRepos( data );
        } );
    }, [ { username } ] );

    return (
        <div className="GitHubUserSummary">
            <h3>GitHubUserSummary</h3>
            <p>Username to search: { username }</p>
            { userProfile ? <>
                <p>{ userProfile.name } ({ userProfile.login })</p>
                <p><img src={ userProfile.avatar_url } alt="" /></p>
            </> : <p>Wait for it.</p> }

            <div>
                { repos.map( repo =>
                    <Repository key={ repo.name } repo={ repo } />
                ) }
            </div>
        </div>
    );
};

export default GitHubUserSummary;