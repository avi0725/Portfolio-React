import React, { Component } from 'react'
import {Button} from 'react-mdl';

class  About extends Component {
    render() {
        return (
               <div className="container">
		            <div className="about">
			            <div className="text">
				            <h1>Avi Mukhija </h1>
				            <div className="line"></div>
			            </div>
		            </div>
		        <div className="content">
			    <p>I am a full stack developer with experiences in C, C++, Python, Node.js, Express.js, HTML, CSS, Javascript, MongoDB and SQL.
                     I have worked across a wide range of software development activities. I am keen on learning new technologies.
                I believe that anything learned never goes wasted. I am passionate about my work and I have a steady source of motivation that drives me to do my best.</p>
				<a href="https://drive.google.com/file/d/1rKndObeQZ_mQw-ljF9V4E-FWJyzmS3sB/view?usp=sharing" target="_blank" rel="noopener noreferrer" download>
              <Button colored raised >Download CV</Button>
              </a>
		        </div>
		        </div>
        )
    }
}

export default About;
