import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2></h2>
            <img
              src="https://www.jaissweb.com/wp-content/uploads/2020/03/digital-marketing.gif"
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>I absolutely love to relax and have fun. I like socializing; I like chatting. I like dancing, mixing with friends.</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone" aria-hidden="true"/>
                    (+91) 7976282584
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                    <i className="fa fa-linkedin" aria-hidden="true"/>
                     linkedin.com/in/avimukhija
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    17ucs41@lnmiit.ac.in
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                    <i className="fa fa-github" aria-hidden="true"/>
                    https://github.com/avi0725
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;