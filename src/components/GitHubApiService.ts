import * as React from 'react';

import { Repos, User } from "../model/GitHubApiModel";

const apiKey: string = process.env.REACT_APP_GITHUB_API_CREDENTIALS || "";

const credentials = btoa( apiKey );

export function fetchUserProfile( username: string ): Promise<User> {
    // return fetch( `https:api.github.com/users/users${ encodeURIComponent( username ) }`, {
    //     headers: {
    //         Authorization: `Basic ${ credentials }`,
    //     },
    // } )
    return fetch( `https://api.github.com/users/${ username }` )
        .then( ( res ) => res.json() )
        .then( ( data: User ) => {
            return data;
        } );
}

export function fetchUserRepos( username: string ): Promise<Repos> {
    // return fetch( `https:api.github.com/users/users/${ encodeURIComponent( username ) }/repos`, {
    //     headers: {
    //         Authorization: `Basic ${ credentials }`,
    //     },
    // } )
    return fetch( `https://api.github.com/users/${ username }/repos` )
        .then( res => res.json() )
        .then( ( data: Repos ) => {
            return data;
        } );
};
export { };
console.log( fetchUserProfile( "amshholland" ) );
console.log( fetchUserRepos( "amshholland" ) );