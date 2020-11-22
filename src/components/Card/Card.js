
function Card(props) {
    return (
        <div className="card">
            <img src={props.src}
                className="card-img-top"
                alt={props.alt} />
            <div className="card-body">
                <a href={props.href}
                    target="_blank"
                    rel="noreferrer"
                    className="btn app-button">
                    App</a>
                <a href={props.href2}
                    target="_blank"
                    rel="noreferrer">
                    <input
                        type="button"
                        className="github-button btn"
                        value="GitHub" /></a>
            </div>
        </div>
    )
}

export default Card;
