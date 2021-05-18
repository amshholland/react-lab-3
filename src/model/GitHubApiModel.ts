export interface User {
    name: string;
    login: string;
    avatar_url: string;
    html_url: string;
}

export interface Repos {
    name: string;
    html_url: string;
    description?: string | null;
    language: string;
    updated_at: string;
    has_pages?: string | null;
};