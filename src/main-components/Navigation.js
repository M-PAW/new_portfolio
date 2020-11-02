import React, {useState} from 'react';

import { Link } from 'react-router-dom'

import '../main-styles/navigation.css';

const Navigation = () => {


    return (
        <div className="navigation" data-test="component-navigation">
            <div className="container-navigation" data-test="container-navigation">
                <div className="button-collapse">
                    <hr/>
                    <hr/>
                    <hr/>
                </div>

                <div className="button-navigation active">
                    Home
                </div>
                <hr />
                <div className="button-navigation">Projects</div>
                <hr />
                <div className="button-navigation">Education</div>
                <hr />
                <div className="button-navigation">Skills</div>
                <hr />
                <div className="button-navigation">About Me</div>
                
            </div>
        </div>
    )

}

export default Navigation;