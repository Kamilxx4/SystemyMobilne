export function FilmDetails(props)
{
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <a href="">{props.link}</a>
        </div>
    );
}