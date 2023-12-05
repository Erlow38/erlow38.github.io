import './IndexPage.css';

import Navbar from "../components/Navbar";
import AnimatedButton from "../components/AnimatedButton";


function IndexPage() {

    const dest = '/troisdimension';

    return (
        <div className="IndexPage">

            <div className="IndexPage-container">
                <div className="IndexPage-text">
                    <h1>Bonjour je suis Ethan Ehrler</h1>
                    <h2>Développeur</h2>
                </div>
                <AnimatedButton text="Voir 3D" dest={dest}/>
            </div>
            <Navbar  />

        </div>
    );
}

export default IndexPage;