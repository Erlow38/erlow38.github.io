import './IndexPage.css';

import Navbar from "../components/Navbar";
import AnimatedButton from "../components/AnimatedButton";
import { useState } from 'react';


// <AnimatedButton text="Voir 3D" dest={dest}/>

function IndexPage() {

    const dest = '/troisdimension';
    const [aboutButtonClicked, setAboutButtonClicked] = useState(true);

    function aboutButtonClickedFunc() {
        setAboutButtonClicked(!aboutButtonClicked);
    }

    return (
        <div className="IndexPage">
            <div className="IndexPage-overlay"></div>
            <div className="IndexPage-container">
                <div className='IndexPage-content'>
                    <div className="IndexPage-text">
                        <h1>Bonjour, je suis Ethan Ehrler</h1>
                        <h2>Développeur</h2>
                    </div>
                    <div className='Contact-container'>
                        <a target='_blank' href="tel: 06 16 52 07 25"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 16"><path fill="white" d="M10.38 1.52c-.44.05-.79.41-.85.85l-.77 3.27c-.11.46.12.94.55 1.14l.59.27C9.46 8.2 8.49 8.99 8.49 8.99s-.8.97-1.94 1.41l-.27-.59a1 1 0 0 0-1.14-.55l-3.27.77c-.44.06-.8.41-.85.85c-.1.82-.07 2.1.85 2.78c0 0 4.15 2.92 9.19-2.12s2.12-9.19 2.12-9.19c-.69-.92-1.97-.94-2.78-.85Z"/></svg></a>
                        <a target='_blank' href="mailto: ethan.ehrler@outlook.com"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z"/></svg></a>
                        <a target='_blank' href="http://www.linkedin.com/in/ethan-ehrler-b5855a251"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="white" d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/></svg></a>
                        <a target='_blank' href="https://github.com/Erlow38"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="white" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg></a>
                    </div>
                    <div className='Button-container'>
                        <AnimatedButton text="Voir mes projets" dest={'/projects'}/>
                        <div className="Bar"></div>
                        <AnimatedButton target='_blank' text="Voir ErlOS" dest={'https://erlow38.github.io/erlos'}/>
                        <AnimatedButton target='_blank' text="Voir le code source ErlOS" dest={"https://github.com/Erlow38/erlos"}/>
                    </div>
                </div>
                <div className='IndexPage-content'>
                    <div className={aboutButtonClicked ? "About-content-text" : "About-content-text About-content-text-full"} onClick={aboutButtonClickedFunc}>
                        <button className="About-button" onClick={aboutButtonClickedFunc}>{aboutButtonClicked ? "+" : "-"}</button>
                        <p>Mon nom est Ethan Ehrler et je poursuis mes études en troisième année de BUT Informatique de Grenoble. Passionné par le développement web et le design, j'apprécie travailler en équipe tout en étant autonome. Ma curiosité me pousse constamment à apprendre de nouvelles choses. 
                        </p>
                        <p>Mon expérience professionnelle inclut un stage de développeur web au Laboratoire Informatique de Grenoble (LIG) en 2023, et une alternance en tant que développeur web chez Sercel Grenoble en 2023-2024. J'ai également suivi une formation en informatique à l'IUT 2 de Grenoble, de 2021 à 2024. Tout au long de ces expériences, j'ai pu développer de nombreuses compétences en divers langages de programmation, en gestion de projet, en communication et en travail d'équipe à travers des projets variés.
                        </p>
                        <p>La musique m'intéresse particulièrement, tout comme l'automobile et les motos. Je possède les permis A1 (125cm3) et B (voiture). Par ailleurs, je suis également un amateur d'animés et de jeux vidéo tels que Rocket League, Minecraft, The Crew, Genshin et Fortnite.
                        </p>
                        <p>Mon passé inclut dix années de pratique du tennis de table, deux ans de karaté, et une passion pour le ski depuis mon plus jeune âge, ayant suivi des cours dans cette discipline. De plus, je suis membre d'une association dans mon village, active dans l'organisation d'une variété d'événements et de festivités.
                        </p>
                        <p>Vous pouvez me contacter par mail à <a href="mailto: ethan.ehrler@outlook.com">ethan.ehrler@outlook.com</a>, par téléphone au <a href="tel: 06 16 52 07 25">06 16 52 07 25</a> ou via <a target="_blank" href="http://www.linkedin.com/in/ethan-ehrler-b5855a251">LinkedIn</a>.</p>
                        <br />
                    </div>
                </div>
                
            </div>
            <Navbar  />

        </div>
    );
}

export default IndexPage;