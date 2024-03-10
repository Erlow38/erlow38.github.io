import './Skills.css';

import { useState } from 'react';
import Navbar from '../components/Navbar';

function Skills() {


  return (
    <div className="Skills">

      <div className="Skills-container">
        <h1>Compétences</h1>
          <div className="Skills-content">
            <div className="Skills-card">
                <h2>Langages informatiques</h2>
                <div className="Skills-item">
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JavaScript</p>
                    <p>TypeScript</p>
                    <p>React</p>
                    <p>Angular</p>
                    <p>Flutter</p>
                    <p>PHP</p>
                    <p>Symfony</p>
                    <p>SQL</p>
                    <p>Java</p>
                    <p>C</p>
                    <p>C++</p>
                    <p>Python</p>
                    <p>UML</p>
                </div>
            </div>
            <div className="Skills-card">
                <h2>Logiciels/OS</h2>
                <div className="Skills-item">
                    <p>Windows</p>
                    <p>Linux</p>
                    <p>Git</p>
                    <p>Figma</p>
                    <p>VSCode</p>
                    <p>IntelliJ</p>
                    <p>Android Studio</p>
                    <p>Visual Paradigm</p>
                </div>
            </div>
            <div className="Skills-card">
                <h2>Humaines</h2>
                <div className="Skills-item">
                    <p>Travail d'équipe</p>
                    <p>Créatif</p>
                    <p>Ponctuel</p>
                    <p>Volonté d'apprendre</p>
                    <p>Force de proposition</p>
                </div>
            </div>
              <div className="Skills-card">
                    <h2>Langues</h2>
                    <div className="Skills-item">
                        <p>Français (courant)</p>
                        <p>Anglais (B2)</p>
                        <p>Espagnol (B1)</p>
                    </div>
              </div>
          </div>
      </div>
      <Navbar />

    </div>
  );
}

export default Skills;