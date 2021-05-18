import { Repos } from '../model/GitHubApiModel';

export function Repository() {
    const [ repo, setRepo ] = useState<Repo>();

    return (
        <div className="Repositories">
            <h2>Repositories</h2>
            <div className="repository">
                <h3>{ name }</h3>
                <p>{ description }</p>
                <p>Language: { language } </p>
                <p> Last Updated: { updated_at } </p>
            </div>
        </div>
    );
}