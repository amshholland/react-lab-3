import { User } from "../model/GitHubApiModel";

const ghCredentials: string = process.env.REACT_APP_GITHUB_API_CREDENTIALS || "";

const credentials = btoa( ghCredentials );

export function fetchUserProfile( username: string ): Promise<User> {
    return fetch( `https:api.github.com/users/users${ encodeURIComponent( username ) }`, {
        headers: {
            Authorization: `Basic ${ credentials }`,
        },
    } )
        .then( ( res ) => res.json() )
        .then( ( data: User ) => {
            console.log( data );
            return data;
        } );

    function fetchUserData(): Promise<User> {
        return fetch( `https://api.github.com/users/{ username }` )
            .then( ( res ) => res.json() );
    };
}

// same ^ for fetchRepos