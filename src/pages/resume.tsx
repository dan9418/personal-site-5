import { Link } from "gatsby";
import React from "react";
import Button from '../components/button';
import { resumeModule } from "./resume.module.scss"

const ResumeSubheader = ({ company, date, position, location }) => {
    return (
        <div className="resume-subheader">
            <span>{company}</span>
            <span>{position}</span>
        </div>
    );
}

const ResumePage = () => {
    return (
        <main className={resumeModule}>
            <title>Dan Bednarczyk - Resume</title>
            <h1>
                Resume
            </h1>
            <Link to="/">
                <Button>Home</Button>
            </Link>
            <>
                <h2>Technical Skills</h2>

                <table className='skills'>
                    <thead>
                        <tr>
                            <th>Frontend</th>
                            <th>Backend</th>
                            <th>Databases</th>
                            <th>Other</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <ul>
                                    <li>JavaScript (ES6)</li>
                                    <li>TypeScript</li>
                                    <li>React</li>
                                    <li>Next</li>
                                    <li>Styled Components</li>
                                    <li>Angular</li>
                                    <li>HTML5</li>
                                    <li>CSS3</li>
                                    <li>JSON / XML</li>
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    <li>Node</li>
                                    <li>.NET (C#)</li>
                                    <li>Java</li>
                                    <li>PHP</li>
                                    <li>C++</li>
                                    <li>NUnit Testing</li>
                                    <li>Selenium Testing</li>
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    <li>SQL</li>
                                    <li>SQL Server</li>
                                    <li>Oracle</li>
                                    <li>SQLite</li>
                                    <li>MongoDB</li>
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    <li>Git</li>
                                    <li>Sentry</li>
                                    <li>REST / HTTP</li>
                                    <li>npm</li>
                                    <li>Azure</li>
                                    <li>Android</li>
                                    <li>Photoshop</li>
                                    <li>Unit Testing</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <h2>Work Experience</h2>

                <ResumeSubheader
                    company='CBS Sports Digital'
                    position='Frontend Engineer'
                    date='December 2019 - Present'
                    location='El Dorado Hills, CA'
                />

                <ul>
                    <li>Serving as the primary frontend engineer in effort to modularize and modernize the <a href='https://www.maxpreps.com/' target='_blank'>MaxPreps.com</a> architecture</li>
                    <li>Implementing new React pages utilizing Next.js for server-side rendering and SEO optimization</li>
                    <li>Building out robust, responsive component library using styled-components</li>
                    <li>Architecting patterns for ad, tracking, and edge-caching implementations</li>
                    <li>Working directly with stakeholders across product, design, and engineering in a highly collaborative Agile environment</li>
                </ul>

                <ResumeSubheader
                    company='Bentley Systems'
                    position='Associate Software Engineer'
                    date='May 2016 - July 2019'
                    location='Pittsburgh, PA + Vilnius, LT'
                />

                <ul>
                    <li>Designed, implemented, and consumed various RESTful APIs</li>
                    <li>Built responsive web applications using TypeScript, Angular, HTML5, and CSS3</li>
                    <li>Authored backend services for scalability, flexibility, and modularity using .NET framework</li>
                    <li>Integrated relational and NoSQL databases into web applications</li>
                    <li>Worked with Azure cloud applications utilizing Octopus for CI/CD pipelines</li>
                </ul>

                <ResumeSubheader
                    company='The Bank of New York Mellon'
                    position='Software Engineer Intern'
                    date='May 2015 – August 2015'
                    location='Pittsburgh, PA'
                />

                <ul>
                    <li>Syncronized schemas across DB2 databases to form single, master schema</li>
                    <li>Automated daily data comparisons for a central Reference Data Hub to simplify internal data sharing</li>
                    <li>Wrote Java application to integrate disparate datasources on a partitioned MVS/Linux mainframe</li>
                </ul>

                <ResumeSubheader
                    company='University of Pittsburgh, Residence Life'
                    position='Resident Assistant'
                    date='August 2014 - December 2015'
                    location='Pittsburgh, PA'
                />

                <ul>
                    <li>Managed and mentored 57 freshmen engineering residents</li>
                    <li>Enforced community standards for diverse pool of students</li>
                    <li>Organized large-scale social, educational, and experiential programs</li>
                </ul>

                <h2>Education</h2>

                <ResumeSubheader
                    company='University of Pittsburgh, Swanson School of Engineering'
                    position='BS, Computer Engineering'
                    date='April 2017'
                    location='Pittsburgh, PA'
                />

                <ul>
                    <li>Graduated with special distinction as the Outstanding Senior in departmental class</li>
                    <li>3.71 GPA</li>
                </ul>

                <h2>Projects</h2>

                <ul>
                    <li>Created and published <a href='https://dan9418.github.io/play-what-sample/' target='_blank' rel='noopener noreferrer'>Play What</a>, a React component library for visualizing music theory concepts</li>
                    <li>Developed an <a href='https://github.com/dan9418/ARDashboard/' target='_blank' rel='noopener noreferrer'>augmented reality dashboard</a> mobile app to recognize and communicate with electrical switchgear (senior design project)</li>
                    <li>Developed an Android app for boolean algebra calculations</li>
                    <li>Assisted in design and construction of several tech-supplemented hydroponic gardening systems</li>
                    <li>Studied audio engineering in the University of Pittsburgh Music Engineering Laboratory</li>
                    <li>Developed this portfolio site in React and TypeScript</li>
                </ul>

                <h2>Awards</h2>

                <ul>
                    <li>Selected for inaugural International Graduate Development Program in Vilnius, Lithuania</li>
                    <li>Won 2nd place at departmental senior design expo for augmented reality mobile app</li>
                    <li>Won 1st place for computer engineering conference paper on hybrid drives</li>
                    <li>Eagle Scout</li>
                </ul>
            </>
        </main >
    )
}

export default ResumePage
