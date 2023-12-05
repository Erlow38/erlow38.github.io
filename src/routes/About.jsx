import './About.css';

import Navbar from "../components/Navbar";


function About() {

    return (
        <div className="About">

            <div className="About-container">
                <h1>A propos</h1>
                <div className="About-content">
                    <div className="About-content-text">
                        <p>Je m'appelle Ethan Ehrler et je suis étudiant à l'IUT Informatique de Grenoble en troisième année. J'apprécie le développement web ainsi que le design et le dessin. Je suis quelqu'un qui aime travailler en équipe mais qui est tout autant capable de travailler seul. Je suis quelqu'un de très curieux et qui aime apprendre de nouvelles choses. Je suis très interessé par la musique. Je suis également passionné par l'automobile et les motos. Je possède le permis A1 (125cm3) ainsi que le permis B (voiture). J'aime également regarder des animés et jouer à des jeux vidéos tel que Rocket League, Minecraft, Forza, Genshin ou encore Cyberpunk. Dans ma vie j'ai eu l'occasion de pratiquer pendant dix ans du tennis de table, du karaté pendant deux ans et je skie régulièrement depuis très jeune, discipline pour laquelle j'ai pu suivre des cours. Je fais également partie d'une association au sein de mon village qui s'occupe de l'organisation de fêtes et d'événements pour celui-ci.
                        </p>
                        <p>Vous pouvez mon contacter par mail à <a href="mailto: ethan.ehrler@outlook.com">ethan.ehrler@outlook.com</a>, par téléphone au <a href="tel: 06 16 52 07 25">06 16 52 07 25</a> ou via <a target="_blank" href="https://www.linkedin.com/in/ethan-ehrler-b5855a251/">LinkedIn</a>.</p>
                    </div>
                </div>
            </div>
            <Navbar  />

        </div>
    );
}

export default About;