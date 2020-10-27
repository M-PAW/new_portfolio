import React from 'react';

import '../main-styles/common-styles.css';
import '../main-styles/skills.css';

const Skills = () => {
    return (
        <div className="content-container skills" data-test="component-skills">
            <h2>My Skills</h2>
            <div className="skills-container" data-test="container-skills">
                <div data-test="container-frontend">
                    <h3>Frontend</h3>
                    <p>HTML & CSS</p>
                    <p>Bootstrap</p>
                    <p>Less</p>
                    <p>Axios</p>
                    <p>React</p>
                    <p>React-Bootstrap</p>
                    <p>Material-UI</p>
                </div>
                <div>
                    <h3>Backend</h3>
                    <p>NodeJS</p>
                    <p>Express</p>
                    <p>Knex</p>
                    <p>SQLite3</p>
                    <p>PostgreSql</p>
                </div>
                <div>
                    <h3>State(A) & Testing(B)</h3>
                        <p>Context(A)</p>
                        <p>Custom Hooks(A)</p>
                        <p>Redux(A)</p>
                        <p>Component Lifecyle(A)</p>
                        <p>Jest(B)</p>
                        <p>Enzyme(B)</p>
                </div>
                <div>
                    <h3>Languages</h3>
                    <p>JavaScript</p>
                    <p>Python</p>
                    <p>Mandarin (Chinese)</p>
                </div>
            </div>
        </div>
    )
}

export default Skills;