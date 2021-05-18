import { useEffect, useState } from "react";

import { User } from "../model/GitHubApiModel";
import { fetchUserProfile } from "./GitHubApiService";

interface Props {
    username: string;
}

function GitHubUserSummary( { username }: Props ) {
    const [ selectUserName, setUserName ] = useState( { username } );
    const [ userProfile, setUserProfile ] = useState<User | null>( null );

    useEffect( () => {
        fetchUserProfile( username ).then( data => {
            setUserProfile( data );
        } );
    }, [ selectUserName ] );

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