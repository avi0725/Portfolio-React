import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcReKpibqAMf5g0A6feZC5oFyQEoLXeSlmfSMw&usqp=CAU) center / cover'}} >Expense Tracker</CardTitle>
            <CardText>
            A Full Stack web application built with MERN Stack.
            With this application user can keep track of finances by adding expenses and income.
            This application uses Express.js framework for the backend api’s and React.js for front-end views.
            The Data is stored with NoSQL database using MongoDB/mongoose.
            </CardText>
            <CardActions border>
            <a href="https://github.com/avi0725/Expense-Tracker" target="_blank" rel="noopener noreferrer">
              <Button colored>GitHub</Button>
              </a>
            </CardActions>
            
          </Card>   
        </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.pocket-lint.com/r/s/1200x/assets/images/138382-apps-feature-facebook-messenger-23-tips-and-tricks-you-ve-likely-never-tried-image1-unjpywwzfs.png) center / cover'}} >Chat App</CardTitle>
            <CardText>
            It is a real-time chat application.
        It sends and shows messages to a recipient instantly without any page refresh.
        User can join any room and create a room for chat.
        JavaScript framework Express.js and the libraries Socket.io was used for backend and React.js was used for front-end.
            </CardText>
            <CardActions border>
            <a href="https://github.com/avi0725/Chat-App" target="_blank" rel="noopener noreferrer">
              <Button colored>GitHub</Button>
              </a>
              <a href="https://vigilant-fermat-f16bd4.netlify.app" target="_blank" rel="noopener noreferrer">
              <Button colored>Live Demo</Button>
              </a>
            </CardActions>
            
          </Card>   
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn3.vectorstock.com/i/1000x1000/13/72/electronic-billing-connection-of-laptop-and-vector-21091372.jpg) center / cover'}} >Billing System</CardTitle>
            <CardText>
            It uses Tkinter module of python for the GUI.User just has to select among the food and drinks items, enter the quantity and click on the total button to view the total price.The user can view the total receipt of their items which displays receipt number and number of their food/drinks items with the total amount.
            </CardText>
            <CardActions border>
              <a href="https://github.com/avi0725/Billing-System" target="_blank" rel="noopener noreferrer">
              <Button colored>GitHub</Button>
              </a>
            </CardActions>
          </Card>   
        </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.healthindustryhub.com.au/wp-content/uploads/2019/06/medical-affairs.jpg) center / cover'}} >Pneumonia Detector</CardTitle>
            <CardText>
            Pneumonia Detector, a GUI application made with tkinter module of python.
GUI was implemented on trained model of deep learning.
It takes user’s Chest X-RAY as Input and Predicts whether the User is suffering from Pneumonia or not with an accuracy of 88.29%.
            </CardText>
            <CardActions border>
            <a href="https://github.com/avi0725/Pneumonia-Detector" target="_blank" rel="noopener noreferrer">
              <Button colored>GitHub</Button>
              </a>
            </CardActions>
            
          </Card>   
        </div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs  activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Expense Tracker</Tab>
          <Tab>Chat App</Tab>
          <Tab>Billing System</Tab>
          <Tab>Pneumonia Detector</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div >{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;