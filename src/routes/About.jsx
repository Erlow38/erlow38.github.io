import './About.css';

import Navbar from "../components/Navbar";


function About() {

    return (
        <div className="About">

            <div className="About-container">
                <h1>A propos</h1>
                <div className="About-content">
                    <div className="About-content-text">
                        <p>Mon nom est Ethan Ehrler et je poursuis mes études en troisième année à l'IUT Informatique de Grenoble. Passionné par le développement web, le design et le dessin, j'apprécie travailler en équipe tout en étant autonome. Ma curiosité me pousse constamment à apprendre de nouvelles choses. 
                        </p>
                        <p>La musique m'intéresse particulièrement, tout comme l'automobile et les motos. Je possède les permis A1 (125cm3) et B (voiture). Par ailleurs, je suis également un amateur d'animés et de jeux vidéo tels que Rocket League, Minecraft, The Crew, Genshin et Fortnite.
                        </p>
                        <p>Mon passé inclut dix années de pratique du tennis de table, deux ans de karaté, et une passion pour le ski depuis mon plus jeune âge, ayant suivi des cours dans cette discipline. De plus, je suis membre d'une association dans mon village, active dans l'organisation d'une variété d'événements et de festivités.
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