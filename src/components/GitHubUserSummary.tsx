import { User } from "../model/GitHubApiModel";
import { fetchUserProfile } from "./GitHubApiService";
import { useEffect, useState } from "react";

interface Props {
    username: string;
}

function GitHubUserSummary( { username }: Props ) {
    const [ user, setUser ] = useState( '' );
    const [ userProfile, setUserProfile ] = useState<UserInfo | null>( null );


    useEffect( () => {
        fetchUserProfile( username ).then( data => {
            setUser( data );
        } );
    }, [ user ] );

    return (
        <div className="GitHubUserSummary">
            <h1>{ name }</h1>
            <img src="{avatar_url}"></img>
            <a href="{html_url}">View their GitHub Homepage</a>
        </div>
    );
} );

export default GitHubUserSummary;

function username( username: any ) {
    throw new Error( "Function not implemented." );
}
