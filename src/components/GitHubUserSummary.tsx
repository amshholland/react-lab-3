import { Repos, User } from "../model/GitHubApiModel";
import { useEffect, useState } from "react";

import { fetchUserProfile } from "./GitHubApiService";
import { fetchUserRepos } from "../service/GitHubApiService";

interface Props {
    username: string;
}

function GitHubUserSummary( { username }: Props ) {
    const [ userProfile, setUserProfile ] = useState<User | null>( null );
    const [ repo, setRepo ] = useState<Repos | null>( null );

    useEffect( () => {
        fetchUserProfile( username ).then( data => {
            setUserProfile( data );
        } );
    }, [ { username } ] );

    useEffect( () => {
        fetchUserRepos( username ).then( data => {
            setRepo( data );
        } );
    }, [ { username } ] );

    return (
        <div className="GitHubUserSummary">
            {userProfile ?
                <div className="UserSummary">
                    <h1>{ userProfile.name }</h1>
                    <img src="{userProfile.avatar_url}"></img>
                    <a href="{userProfile.html_url}">View their GitHub Homepage</a>
                </div> :
                <p>No user with username found</p>
            }
        </div>
    );
};

export default GitHubUserSummary;