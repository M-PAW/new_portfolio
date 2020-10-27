
import React from 'react';

import '../main-styles/common-styles.css'
import '../main-styles/home.css';

const Home = () => {
    return (
        <div className="content-container home" data-test="component-home">
            <h3>Greetings and welcome to my home(page).</h3>
            <h3 className="mandarin">您好，欢迎到我的网站</h3>
            <h4>My name is Michael Walter, and I'm a Full-Stack Developer.</h4>
            <h4 className="mandarin">我的名字是王惟之， 我是全栈网站开发人员。</h4>
            <h5>Please, take a look around and get to know more me.</h5>
            <h5>请你看一下和认识我</h5>
            
        </div>
    )
}

export default Home;