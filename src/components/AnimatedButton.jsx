import './AnimatedButton.css';
import { Link } from "react-router-dom";

export default function AnimatedButton(props) {

    return (
        <Link target='_blank' to={props.dest}>
            <button className="btn">
                <span className="btn-text">{props.text}</span>
                <div className="fill-container"></div>
            </button>
        </Link>
    );
}