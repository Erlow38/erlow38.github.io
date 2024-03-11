import './Projects.css';
import LargeBox from "../components/LargeBox";
import SmallBox from "../components/SmallBox";

import Navbar from "../components/Navbar";

// <LargeBox title={"Projet"} date={"2023"} img={["../assets/img", "../assets/img"]} description={["blabla"]} pre={"Le dossier de conception du projet est disponible ici : "} url={"https://docs.google.com/document/d/1ocvxQ9nPROopoYBKqNfltIVitiJN1vFm_hQEb5EWIsM/edit?usp=sharing"} link={"dossier de conception"} image={"../assets/img"} desc={"blabla"} language={["HTML", "CSS"]} />

function Projects() {

    return (
        <div className="Projects">

            <div className="Projects-container">
                <h1>Projets</h1>
                <div className="Glassmorphism-container">
                    <LargeBox title={"ErlOS"} date={"2024"} img={["../assets/erlos/erlos-1.png", "../assets/erlos/erlos-2.png"]} description={["ErlOS est un gestionnaire de raccourcis prenant l'apparence d'un OS. Il permet de créer des icones qui redirigent vers les liens souhaités. Un démineur est également disponible ainsi qu'une barre de recherche permettant de naviguer sur le web. Il est également possible de personnaliser l'interface à l'aide de différents thèmes, les icones et les thèmes sont entierement stockés dans le local storage. Ce projet est un projet personnel."]} pre={"Voici le lien du site : "} url={"https://erlow38.github.io/erlos/"} link={"ErlOS"} language={["HTML", "CSS", "TypeScript", "React", "PrimeReact"]}/>
                    <SmallBox title={"Aincrad"} date={"2023"} img={["../assets/aincrad/aincrad-1.png", "../assets/aincrad/aincrad-2.png"]} description={["Aincrad est un projet personnel sur le thème de Sword Art Online, un animé japonais. Ce site a pour but de présenter globalement l'animé et m'a permis de tester mes compétences en design."]} pre={"Voici le lien du site : "} url={"https://erlow38.github.io/aincrad/"} link={"Aincrad"} language={["HTML", "CSS", "JavaScript"]}/>
                    <SmallBox title={"Black Hole Bot"} date={"2023"} img={["../assets/blackholebot/blackholebot-1.png", "../assets/blackholebot/blackholebot-2.png"]} description={["A l'occasion d'une GameJam organisée par l'IUT 2 Informatique de Grenoble, nous avons développé en groupe de 4, un jeu sur le thème d'un robot et de la gravité. Dans ce jeu, il va falloir survivre 60 secondes sous différentes gravités afin de récupérer des pièces pour réparer son vaisseau. Ce jeu a été réalisé à l'aide de la librairie python pygame."]} pre={"Voici le dépot GitHub du jeu : "} url={"https://github.com/Erlow38/BlackHoleBot"} link={"Black Hole Bot"} language={["Python"]}/>
                    <LargeBox title={"LOMET"} date={"2023"} img={["../assets/lomet/lomet-1.png", "../assets/lomet/lomet-2.png"]} description={["Le Laboratoire d'Informatique de Grenoble (LIG) regroupe environ 450 personnes et est composé de 22 équipes, dont l’équipe SIGMA, dans laquelle j’ai effectué mon stage. Le LIG comporte cinq axes de recherche, l’équipe SIGMA appartenant à l’axe Génie des Logiciels et des Systèmes d'Information. Cette équipe a pour spécialité les systèmes d’information ainsi que l'ingénierie de méthodes et celle dirigée par des modèles.", "Les entreprises en général vivent dans un environnement en constant changement, leur imposant d’évoluer en permanence pour rester compétitives. L’outil LOMET, développé par l’équipe SIGMA, permet de modéliser un cadre méthodologique afin de gérer une telle évolution. L’outil LOMET se caractérise par la possibilité de création d'un modèle de processus et d'un méta modèle de produit qui peuvent être vus comme des exemples prototypiques à adapter pour créer sa propre méthode.", "Ma mission principale a été d’étendre l’outil LOMET pour ajouter des nouvelles fonctionnalités comme les protocoles ou la translation d’éléments ainsi qu'améliorer des fonctionnalités déjà existantes telles que la suppression d’éléments, la modification du méta modèle de produit ou encore la décomposition de la sauvegarde entre la base de données et un fichier local. Pour cela, j’ai travaillé à l’aide de JavaScript, HTML, CSS, Express, Node ainsi que la librairie JointJS.", "Des tests utilisateurs faits sur LOMET avant le début de mon stage ont permis d’entrevoir des changements sur l'interface initiale de l’application. Certains changements ont été effectués pendant mon stage en prenant compte des critères de Bastien et Scapin afin de faciliter l’utilisation, l’application ayant pour cible des personnes non spécialistes en informatique. L’interface se devait d’être plus intuitive et plus agréable à regarder.", "J’ai pu travailler dans un cadre différent de l’IUT, avec d’autres méthodes de travail et des codes parfois peu commentés, rendant l’implémentation de nouvelles fonctions compliquées lorsque celles-ci dépendent des anciennes fonctions. La résolution de bugs peut également parfois prendre du temps pour certaines choses qui paraissent insignifiantes au moment de le faire, mais qui s'avèrent très utiles plus tard. De plus, travailler avec de nouvelles librairies assez techniques m’a permis d’apprendre de nombreuses choses et d’affronter de nouveaux challenges. Cela m’aura beaucoup appris en me montrant que j’étais capable d’accomplir des choses qui ne paraissaient pourtant pas évidentes au début."]} pre={"Voici le lien de mon rapport de stage pour plus d'information : "} url={"https://drive.google.com/file/d/1hpgYSliFsI8sSBSgMkX8zmwMjnmBtkAQ/view?usp=sharing"} link={"rapport de stage"} language={["HTML", "CSS", "JavaScript", "JointJS", "ExpressJS", "Git"]}/>
                    <SmallBox title={"Musique"} date={"2023"} img={["../assets/musique/musique-1.png", "../assets/musique/musique-2.png","../assets/musique/musique-3.png", "../assets/musique/musique-4.png"]} description={["Ce site à été créé par moi-même suite à une démarche de création musicale avec un ami. Celui-ci à réalisé différentes musiques dans l'objectif de sortir un EP et j'ai fait ce site afin de pouvoir présenter celles-ci. J'ai pour ma part également participé à quelques-uns des sons."]} pre={"Le site est accessible via ce lien : "} url={"https://erlow38.github.io/musique/"} link={"Musique"} language={["HTML", "CSS", "JavaScript"]}/>
                    <SmallBox title={"Chatjsuispt"} date={"2023"} img={["../assets/chatjsuispt/chatjsuispt-1.png"]} description={["Chatjsuispt à été créé suite à une collaboration entre une développeuse et moi-même afin de caricaturer ChatGPT, l'IA d'OpenAI. ChatGPT rendant parfois des réponses peu cohérentes, nous nous sommes inspirés de celà afin de proposer quelque chose d'encore moins cohérent."]} pre={"Chatjsuispt est disponible via ce lien : "} url={"https://erlow38.github.io/chatjsuispt/"} link={"Chatjsuispt"} language={["HTML", "CSS", "JavaScript"]}/>
                    <SmallBox title={"Carnet de stage"} date={"2023"} img={["../assets/carnet/carnet-1.png", "../assets/carnet/carnet-2.png"]} description={["En groupe de 5, à l'IUT 2 de Grenoble, nous avons pris possession du code d'une application permettant de faciliter la recherche de stage. Cette application avait une partie Android (front-office) et une partie Symfony (back-office). L'application possédait de nombreux problèmes que ce soit au niveau de l'ergonomie ou des fonctionnalités. Notre travail a donc été de rendre cette application utilisable. J'ai personnellement majoritairement travaillé sur la partie Android ou j'ai eu l'occasion de refaire l'ergonomie et le design de l'application ainsi que de coder certaines fonctionnalités. J'ai par ailleurs eu l'opportunité d'être chef de projet au cours de ce travail. Le dossier de conception ainsi que quelques images sont disponibles ci-dessous."]} pre={"Le dossier de conception est disponible ici :"} url={"https://docs.google.com/document/d/19FgwCaKA7dJbCvn5t12spjzOhUanVz8baDrKC3UrL48/edit?usp=sharing"} link={"dossier de conception"} language={["HTML", "Android Studio", "Java", "Symfony", "PHP"]}/>
                    <LargeBox title={"NASApi"} date={"2023"} img={["../assets/nasapi/nasapi-1.png", "../assets/nasapi/nasapi-2.png"]} description={["A l'aide d'un collègue, nous avons créé un site utilisant une API de la NASA permettant de rechercher des images. Ce site permet de découvir différentes images de la NASA en cherchant une mission, un photographe ou bien en entrant un mot clé. Les technologies utilisées sont JS, HTML et CSS."]} pre={"Le site est disponible ici : "} url={"https://erlow38.github.io/NASApi/"} link={"NASApi"} language={["HTML", "CSS", "JavaScript"]}/>
                    <SmallBox title={"Road Game"} date={"2023"} img={["../assets/road/road.png"]} description={["J'ai décidé de créer une sorte de mini jeu où l'on peu contrôler une voiture sur une route. On peut également changer la couleur de la voiture, du fond et faire apparaitre des caisses à l'aide d'un bouton. Du JS, HTML et CSS ont été utilisés."]} pre={"Le jeu est disponible ici : "} url={"https://erlow38.github.io/car/"} link={"road game"} language={["HTML", "CSS", "JavaScript"]} />
                    <SmallBox title={"Me V2"} date={"2023"} img={["../assets/mev2/mev2-1.png", "../assets/mev2/mev2-2.png"]} description={["J'ai décidé de créer un deuxième site internet récapitulant mes compétences ainsi que mes projets lors de l'année 2023 en HTML, CSS et JavaScript."]} pre={"Voici le lien :"} url={"https://erlow38.github.io/MeV2/"} link={"Me V2"} language={["HTML", "CSS", "JavaScript"]}/>
                    <LargeBox title={"Intemporal"} date={"2023"} img={["../assets/intemporal/intemporal-1.png", "../assets/intemporal/intemporal-2.png", "../assets/intemporal/intemporal-3.png", "../assets/intemporal/intemporal-4.png"]} description={["J'ai eu l'occasion de développer au cours de l'année 2023 un site de vente aux enchères de montres nommé Intemporal au sein d'une équipe de 6 personnes. Ce projet a été réalisé à l'IUT 2 de Grenoble. J'ai été en charge du maquettage ainsi que de la réalisation HTML, CSS et JavaScript de notre site. J'ai donc réalisé le design du site ainsi que celui du dossier de conception. J'ai travaillé sur les critères ergonomiques de Bastien et Scapin afin de garantir une bonne expérience utilisateur, par exemple vérifier les contrastes à l'aide d'Adobe color. J'ai également eu l'occasion de faire passer des tests utilisateurs à des personnes extérieures à notre équipe afin de pouvoir améliorer notre site, notamment à l'aide de questionnaires SUS qui ont été passé avec brio.", "Le back-end de notre site a été développé en PHP et la base de données quant à elle était en Sqlite. Nous avons utilisé des websocket afin de pouvoir enchérir en temps réel. Nous avons également mis l'accent sur la sécurité en hachant et salant les mots de passe à l'aide d'argon2 et plus encore. Des tests unitaires ainsi que des tests automatisés à l'aide de Selenium ont été réalisés afin de pouvoir vérifier le bon fonctionnement de notre site."]} pre={"Le dossier de conception du projet est disponible ici : "} url={"https://docs.google.com/document/d/1ocvxQ9nPROopoYBKqNfltIVitiJN1vFm_hQEb5EWIsM/edit?usp=sharing"} link={"dossier de conception"} image={"../assets/rewards/intemporal-reward.jpg"} desc={"Ce projet nous a valu un prix du jury de l'IUT Informatique de Grenoble pour la qualité de notre prototype."} language={["HTML", "CSS", "JavaScript", "PHP", "SQLite", "UML", "Git"]} />
                    <SmallBox title={"Me"} date={"2022"} img={["../assets/me/me.png"]} description={["J'ai décidé de créer un premier site internet récapitulant mes compétences ainsi que mes projets lors de l'année 2023 en HTML, CSS et JavaScript."]} pre={"Voici le lien :"} url={"https://erlow38.github.io/me"} link={"Me"} language={["HTML", "CSS", "JavaScript"]}/>
                    <LargeBox title={"Hopack"} date={"2022"} img={["../assets/hopack/hopack-1.png", "../assets/hopack/hopack-2.png", "../assets/hopack/hopack-3.png"]} description={["Lors de l'année 2022, nous avons développé une application en JavaFx et CSS afin de faciliter aux professionnels de l'organisation de mariages leur métier. Ce projet a été réalisé en groupe de 6 au sein de l'IUT 2 de Grenoble et j'ai eu l'opportunité d'être chef de projet."]} pre={"Le dossier IHM que nous avons pu réaliser au cours de ce projet : "} url={"https://drive.google.com/file/d/1LkmkPcTnK1lLAR7ER5FIZKeplsWgUn7S/view?usp=sharing"} link={"dossier IHM"} language={["JavaFX", "Java", "CSS", "Git", "Figma", "UML"]}/>
                    <SmallBox title={"OP Heberg"} date={"2022"} img={["../assets/op-heberg/op-heberg-1.png", "../assets/op-heberg/op-heberg-2.png"]} description={["En 2022, j'ai eu l'occasion de travailler avec un autre développeur web avec lequel j'ai réalisé une petite partie des maquettes ainsi que du code d'un site offrant la possibilité de louer des serveurs. Les maquettes ont été réalisé à l'aide de figma et le front-end en HTML, SCSS et JavaScript."]} language={["HTML", "SCSS", "JavaScript"]} />
                    <SmallBox title={"Rent a dev."} date={"2022"} img={["../assets/rent-a-dev/rent.png"]} description={["J'ai eu l'occasion en 2022 de réaliser en binôme un site web de location de services informatiques qui répondait aux demandes d'un autre binôme. Ce projet a été réalisé à l'IUT Informatique de Grenoble."]} language={["HTML", "CSS", "JavaScript"]} />
                    <SmallBox title={"Server install"} date={"2022"} img={[""]} description={["En 2022, j'ai eu l'occasion d'installer un serveur Debian 11 et de réaliser un guide d'installation pour celui-ci au sein de l'IUT Informatique de Grenoble."]} pre={"Voci le lien de ce guide : "} url={"https://docs.google.com/document/d/1BFLG4XoIHL3mIChEoBPiWRuqg-NfpPvxeeQaxxsCCf8/edit?usp=sharing"} link={"guide d'installation"} language={["Shell"]} />
                    <SmallBox title={"Open Food Facts"} date={"2022"} img={[""]} description={["Ce projet a été réalisé en 2022 à l'IUT Informatique de Grenoble en binôme. Celui-ci consistait à triller la base de données d'Open Food Facts en vue de faire des analyses statistiques. PostgreSQL et LaTeX ont été utilisés."]} language={["PostgreSQL", "LaTeX"]} />
                    <SmallBox title={"Classification automatique"} date={"2021"} img={[""]} description={["En 2021, l'IUT Informatique de Grenoble nous a proposé un projet qui consistait à réaliser une \"IA\" en Java qui trillait des articles de presse dans des catégories en fonction des mots les composants. Ce projet a été réalisé en binôme."]} pre={"Voici le rapport qui a découlé de ce projet : "} url={"https://docs.google.com/document/d/1bq-gHD8PLOdIfSLn-cZvQZqpkWGXerkS8wLXdEzXljg/edit?usp=sharing"} link={"rapport"} language={["Java"]} />
                    <SmallBox title={"Hardis Group"} date={"2021"} img={["../assets/hardis/hardis.png"]} description={["L'IUT informatique de Grenoble nous a proposé comme projet en 2021 de réaliser un site web pour une entreprise du numérique. Ce projet a été réalisé en trinôme, ceci est le premier site internet que j'ai eu l'occasion de réaliser."]} language={["HTML", "CSS"]} />
                </div>
            </div>
            <Navbar  />

        </div>
    );
}

export default Projects;