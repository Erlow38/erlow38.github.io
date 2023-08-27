import './Experiences.css';
import Timeline from "../components/Timeline";

import Navbar from "../components/Navbar";


function Experiences() {

    return (
        <div className="Experiences">

            <div className="Experiences-container">
                <h1>Expériences</h1>


                <div className="timeline">
                    <div className="entries">
                        <Timeline image={"../assets/logo/sercel.png"} title={"Sercel"} date={"2023-2024"} description={"Développeur Web au sein de Sercel Grenoble"} />
                        <Timeline image={"../assets/logo/lig.jpg"} title={"Laboratoire informatique de Grenoble (LIG)"} date={"2023"} description={"Extension de l'outil LOMET en support à l'ingénierie des méthodes (stage de 10 semaines)."} />
                        <Timeline image={"../assets/logo/IUT2.jpeg"} title={"BUT informatique"} date={"2021-2024"} description={"Formation dans le domaine de l'informatique à Grenoble au sein de l'IUT 2, UGA."} />
                    </div>
                </div>




            </div>
            <Navbar  />

        </div>
    );
}

export default Experiences;