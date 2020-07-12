import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import Resume from './resume';
import Contact from './contact';
import AboutMe from './aboutme';
import Projects from './projects';


const Main=()=>(
    <Switch>
        <Route exact path='/' component={LandingPage}></Route>
        <Route path='/contact' component={Contact}></Route>
        <Route path='/projects' component={Projects}></Route>
        <Route path='/aboutme' component={AboutMe}></Route>
        <Route path='/resume' component={Resume}></Route>
    </Switch>
)
export  default Main;