import React, { Component } from 'react'
import {Grid,Cell} from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{width:'100%' ,margin:'auto'}}>
               <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                        src="http://gokulanath.me/src/img/avatar.png"
                        alt="Avatar"
                        className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr/>
                            <p>Software Developer | Coder</p>
                            <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express | MongoDB </p>
                            <p>avimukhija1998@gmail.com</p>
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/avimukhija/" target="_blank" rel="noopener noreferrer">
                                <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>

                                <a href="https://github.com/avi0725" target="_blank" rel="noopener noreferrer">
                                <i class="fa fa-github-square" aria-hidden="true"></i>
                                </a>

                                <a href="https://www.facebook.com/avi.mukhija.5" target="_blank" rel="noopener noreferrer">
                                <i class="fa fa-facebook-square" aria-hidden="true"></i>
                                </a>


                                <a href="https://www.instagram.com/avi_mukhija/" target="_blank" rel="noopener noreferrer">
                                <i class="fa fa-instagram" aria-hidden="true"></i>
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;
