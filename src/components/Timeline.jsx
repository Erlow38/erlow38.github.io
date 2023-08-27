import './Timeline.css';

export default function Stars(props) {

    return (
        <div className="entry">
            <img className="Experience-image" src={props.image} alt="" />
            <h2 className="Experience-title">{props.title}</h2>
            <p className="Experience-date">{props.date}</p>
            <div className="Experience-description">
                <p>{props.description}</p>
            </div>
        </div>
    );
}