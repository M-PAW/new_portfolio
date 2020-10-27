import React from 'react';

import '../main-styles/common-styles.css';
import '../main-styles/education.css';

const Education = () => {
    return (
        <div class="content-container education" data-test="component-education">
            <h2>Education Component</h2>
            <div className="card-container">
                <div className="content-card">
                    <h3>Lambda School</h3>
                    <p>Full-Stack Development</p>
                </div>
                <div className="content-card">
                    <h3>Nanjing University</h3>
                    <p>Mandarin (Simplified)</p>
                </div>
                <div className="content-card">
                    <h3>Riverside City College</h3>
                    <p>Computer Science</p>
                </div>
            </div>
        </div>
    )
}

export default Education;