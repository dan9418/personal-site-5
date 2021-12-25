import React from "react";
import "./resume.scss";

const ResumeSubheader = ({ company, date, position, location }) => {
    return (
        <div className="resume-subheader">
            <h3>
                <span className="company">{company}</span>
                <span className="date">{date}</span>
            </h3>
            <h4>
                <span className="position">{position}</span>
                <span className="location">{location}</span>
            </h4>
        </div>
    );
}

const ResumePage = () => {
    return (
        <>
            <section>
                <h2>Technical Skills</h2>

                <div className='skills'>
                    <div>
                        <h3>Languages</h3>
                        <ul>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>HTML5</li>
                            <li>CSS3 / SCSS</li>
                            <li>SQL</li>
                            <li>GraphQL</li>
                            <li>C#</li>
                            <li>Java</li>
                            <li>PHP</li>
                            <li>C++</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Frameworks</h3>
                        <ul>
                            <li>React</li>
                            <li>Next</li>
                            <li>Gatsby</li>
                            <li>Node</li>
                            <li>Angular</li>
                            <li>Android</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Libraries</h3>
                        <ul>
                            <li>Styled Components</li>
                            <li>Redux</li>
                            <li>Recoil</li>
                            <li>Sentry</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Other</h3>
                        <ul>
                            <li>SEO</li>
                            <li>Fastly</li>
                            <li>REST / HTTP</li>
                            <li>JSON / XML</li>
                            <li>npm / yarn</li>
                            <li>Git</li>
                            <li>AWS</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="experience">
                <h2>Work Experience</h2>

                <ResumeSubheader
                    company='CBS Sports Digital'
                    position='Frontend Engineer'
                    date='Dec 2019 - Present'
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
                    date='May 2016 - Jul 2019'
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
                    date='May 2015 - Aug 2015'
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
                    date='Aug 2014 - Dec 2015'
                    location='Pittsburgh, PA'
                />

                <ul>
                    <li>Managed and mentored 57 freshmen engineering residents</li>
                    <li>Enforced community standards for diverse pool of students</li>
                    <li>Organized large-scale social, educational, and experiential programs</li>
                </ul>
            </section>

            <section>
                <h2>Education</h2>

                <ResumeSubheader
                    company='University of Pittsburgh, Swanson School of Engineering'
                    position='BS, Computer Engineering'
                    date='Apr 2017'
                    location='Pittsburgh, PA'
                />

                <ul>
                    <li>Graduated with special distinction as the Outstanding Senior in departmental class</li>
                    <li>3.71 GPA</li>
                </ul>

            </section>

            <section>

                <h2>Projects</h2>

                <ul>
                    <li>Creator of <b>Play What</b> (in alpha), a website and open source framework for exploring music theory concepts</li>
                    <li>Developed an <a href='https://github.com/dan9418/ARDashboard/' target='_blank' rel='noopener noreferrer'>augmented reality dashboard</a> mobile app to recognize and communicate with electrical switchgear (senior design project)</li>
                    <li>Developed an Android app for boolean algebra calculations</li>
                    <li>Assisted in design and construction of several tech-supplemented hydroponic gardening systems</li>
                    <li>Studied audio engineering in the University of Pittsburgh Music Engineering Laboratory</li>
                    <li>Developed this portfolio site in React and TypeScript</li>
                </ul>

            </section>

            <section>
                <h2>Awards</h2>

                <ul>
                    <li>Selected for inaugural International Graduate Development Program in Vilnius, Lithuania</li>
                    <li>Won 2nd place at departmental senior design expo for augmented reality mobile app</li>
                    <li>Won 1st place for computer engineering conference paper on hybrid drives</li>
                    <li>Eagle Scout</li>
                </ul>

            </section>

        </>
    )
}

export default ResumePage
