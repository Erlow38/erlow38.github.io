import { useState } from 'react';
import './Glassmorphism.css';

import AnimatedButton from "./AnimatedButton";

export default function LargeBox(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <div className="LargeBox" onClick={openModal}>
                <h2 className="Project-title">{props.title}</h2>
                <img className="Project-image-top" src={props.img[0]} alt="" />
                <p className="Project-date">{props.date}</p>
                <p className="Project-description">{props.description}</p>
                <p className="Project-info"><AnimatedButton text={"Plus d'infos"}/></p>
            </div>
            {isModalOpen && (
                <div className="Modal">
                    <div className="Modal-content">
                        <span className="Modal-close" onClick={closeModal}>
                          &times;
                        </span>
                        <h2 className="Project-title">{props.title}</h2>
                        <p className="Project-date">{props.date}</p>
                        {props.description.length > 0 &&
                            props.description.map((text, index) => (
                                <p key={index} className="Project-description">{text}</p>
                            ))}
                        <p className="Project-pre">{props.pre}<a target="_blank" href={props.url} className="Project-link">{props.link}</a></p>
                        {props.img.length > 0 &&
                            props.img.map((image, index) => (
                                <img key={index} className="Project-image" src={image} alt="" />
                            ))}
                        <p className="Project-description">{props.desc}</p>
                        <img className="Project-image" src={props.image} alt="" />
                        <div className="Project-langue-container">
                        {props.language.length > 0 &&
                            props.language.map((text, index) => (
                                <p key={index} className="Project-description">{text}</p>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}