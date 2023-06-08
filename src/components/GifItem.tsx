import Gif from "../interfaces/Gif";

const GifItem = ({gif}: {gif: Gif}) => {


    return (
        <div className="card">
            <img src={gif.url} alt={gif.title} />
            <p>{gif.title}</p>
        </div>
    );
}

export default GifItem