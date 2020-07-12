import React, { Component } from 'react'
import {Grid ,Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign:'center'}}>
                        <img
                            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/4adc4a20898071.562fabccab10b.gif"
                            alt="avatar"
                            style={{height: '250px'}}
                            />
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Avi Mukhija</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p></p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>House Number 61 B Street Number 9 Setia Colony ,Near Police Station ,Sriganganagar ,Rajasthan</p>
                        <h5>Phone</h5>
                        <p>(+91) 7976282584</p>
                        <p>(+91) 8094777490</p>
                        <h5>Email</h5>
                        <p>17ucs041@lnmiit.ac.in</p>
                        <p>avimukhija1998@gmail.com</p>
                        <h5>Another Portfolio</h5>
                        <p>https://distracted-newton-a67f40.netlify.app/</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2 style={{textAlign:'center'}}>Education</h2>
                        <Education
                        startYear={2017}
                        endYear={2021}
                        schoolName="The LNM Institute of Information Technology "
                        schoolDescription="B. Tech - Computer Science
                        CGPA : 6.84/10.0"
                        />

                        <Education
                        startYear={2015}
                        endYear={2016}
                        schoolName="Jindal Public School"
                        schoolDescription="Senior Secondary Education (CBSE)
                        PERCENTAGE : 84.0/100.0"
                        />


                        <Education
                        startYear={2013}
                        endYear={2014}
                        schoolName="Good Shepherd Public School"
                        schoolDescription="Secondary Education (CBSE)
                        CGPA : 9.8/10.0"
                        />


                    <hr style={{borderTop: '3px solid black'}} />

                    <h2 style={{textAlign:'center'}} >Other Activities </h2>

                    <Experience
                    startYear={2017}
                    endYear={2020}
                    jobName="Competitive Programming"
                    jobDescription="• Rank 95 out of 1226 in Hacker Earth Data Structures and Algorithms Coding Contest June’20 
                    • Rank 194 out of 1832 in Hacker Earth September Easy’19
                    • Rank 316 out of 2864 in Code Chef December Lunchtime 2019 Division 2
                    • Rank 346 out of 3362 in Contest by Expedia Group on Interview Bit
                    • Rank 17 in Contest in Hacker Blocks Codesule- May 2020 Edition"
                    />

                    <Experience
                    startYear={2005}
                    endYear={2014}
                    jobName="Table Tennis"
                    jobDescription=" Secured 3rd Position in individuals in State Level Championship.
                    Secured 2nd Position in Team Events in State Level Championship.
                    Selected for National Level Championship."
                    />



                    <hr style={{borderTop: '3px solid black'}} />
                                <h2 style={{textAlign:'center'}} >Skills</h2>
                                <Skills
                                    skill="HTML/CSS"
                                    progress={80}
                                    />

                                <Skills
                                    skill="Java Script "
                                    progress={75}
                                    />
                                    
                                    <Skills
                                        skill="NodeJS"
                                        progress={70}
                                        />
                                        <Skills
                                        skill="React"
                                        progress={70}
                                        />
                                    <Skills
                                        skill="Express"
                                        progress={70}
                                        />                            
                                    <Skills
                                        skill="MongoDB"
                                        progress={50}
                                        />
                                     
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;
