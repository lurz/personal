import React from 'react'
import ReactDOM from 'react-dom'
// import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { Parallax, Background } from 'react-parallax';
import { Link, animateScroll } from "react-scroll";
import './style/main.css'
import './style/base.css'
import './style/vendor.css'

// import Game from './game'
// import Weather from './weather'

class Header extends React.Component {
    render(){
        return(
            <header className={"s-header" + (this.props.addclass ? ' sticky offset scrolling' : '')}>
                <div class="header-logo">
                    <Link to="intro" smooth={true}>
                        <img src={require("./images/logo.png")} alt="Homepage" />
                    </Link>
                </div>
                <div className="header-content">
                    <nav className="header-nav-wrap">
                        <ul className="header-nav">
                            <li><Link to="intro" title="Intro" smooth={true} onClick={this.props.onHide}>Home</Link></li>
                            <li><Link to="about" title="About" smooth={true} onClick={this.props.onHide}>About</Link></li>
                            <li><Link to="timeline" title="Works" smooth={true} onClick={this.props.onHide}>Timeline</Link></li>
                            <li><Link to="projects" title="Projects" smooth={true} onClick={this.props.onHide}>Projects</Link></li>
                            <li><Link to="mailto:#0" title="Contact me" smooth={true} onClick={this.props.onHide}>Contact me</Link></li>
                        </ul>
                    </nav>
                </div>
                <a className={"header-menu-toggle" + (this.props.toggleButton ? ' is-clicked' : '')} href="#0" onClick={this.props.onClick}><span>Menu</span></a>
            </header>
        );
    }
    
}

const Intro = React.forwardRef((props, ref) =>  (
    <Parallax  strength={800} bgImage={require('./images/intro.jpg')} bgImageStyle={{'object-fit': 'cover'}}>
        <section id="intro" ref={ref} className="s-hero target-section">
        {/* <Background >
            <img  src={require('./images/intro.jpg')} alt="bg" />
        </Background> */}
        <div className="row hero-content">
            <div className="column large-full">
                <h1>
                Hi, I'm Renzhong Lu, <br />
                a computer science Student <br />
                at U of M - Ann Arbor
                </h1>

                <div className="hero-me">
                    <div>
                        <a href="https://www.linkedin.com/in/renzhong-lu-746720163/" title="a" target='_blank' rel="noopener noreferrer">LinkedIn </a>
                    </div>
                    <div>
                        <a href="https://github.com/lurz" title="b" target='_blank' rel="noopener noreferrer">github </a>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/vitrabilllu/?hl=en" title="c" target='_blank' rel="noopener noreferrer">instagram </a>
                    </div>
                </div>

            </div> 

        </div>

        <div className="hero-scroll">
            <Link to="about" className="scroll-link" smooth={true}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 24l-8-9h6v-15h4v15h6z"/></svg>
            </Link>
        </div>

    </section>
    
    </Parallax>
));

function About(props) {
    return(
        <section id="about" className="s-about target-section">

        <div className="s-about__section s-about__section--profile">

            <div className="right-vert-line"></div>

            <div className="row">
                <div className="column large-6 medium-8 tab-full">

                    <div className="section-intro">
                        <h3 className="subhead">About Me</h3>
                    </div>

                    <h3 className='intro-para'>Profile</h3>

                    <p className='intro-para'>
                    <br />
                    I'm Renzhong Lu, a Master's student at the University of Michigan, major in computer science engineering.
                    I love programming, on everything! I can do front-end, Android, full-stack, ML, and even Arduino and ROS.
                    My favorite is, of course, full-stack development. <br /><br />

                    I love photography, Kpop, and jogging. Want to have a discussion on which Kpop group is the best? Shoot me an email.

                    </p>

                </div>
            </div>

        </div>
        </section>
    );
}

function Position(props){
    return(
        <div className="column">
            <div className="position">
                <div className="position__header">
                    <h6>
                        <span className="position__co">{props.loc}</span>
                        <span className="position__pos">{props.pos}</span>
                    </h6>
                    <div className="position__timeframe">
                        {props.time}
                    </div>
                </div>

                <p>
                {props.intro}
                </p>
            </div>
        </div>
    );
}

class TimeLine extends React.Component {
    renderPosition(position){
        return(
            <Position 
                loc = {position.loc}
                pos = {position.pos}
                time = {position.time}
                intro = {position.intro}
            />
        );
    }

    render() {
        const positionList = [];
        positionList.push({'loc': 'University of Michigan', 'pos': 'Graduate Student Instructor', 'time':'Sept 2019 - Present', 'intro':'Work as the GSI of the course EECS 441 - Mobile App Development for Entrepreneurs. Lead and provide instructions on student discussions and projects.'});
        positionList.push({'loc': 'University of Michigan', 'pos': 'Master of Science', 'time':'Sept 2019 - Present', 'intro':'Major in computer science engineering.'});
        positionList.push({'loc': 'Rokid Inc', 'pos': 'Research Intern', 'time':'May 2018 - Jul 2018', 'intro':'In charge of a project about indoor localization. Use machine learning method to predict the location of the users based on Wi-Fi signal.'});
        positionList.push({'loc': 'University of Michigan', 'pos': 'Bachelor of Science in Engineering', 'time':'Sept 2017 - May 2019', 'intro':'Major in computer science engineering.'});
        positionList.push({'loc': 'Shanghai JiaoTong University', 'pos': 'Bachelor of Science in Engineering', 'time':'Sept 2015 - Aug 2019', 'intro':'Major in electrical and computer engineering.'});

        const renderPos = [];
        for(let i = 0; i < positionList.length; i++){
            renderPos.push(
                this.renderPosition(positionList[i])
            )
        }

        return(
            <section id='timeline' className='s-about target-section'>
                <div className="s-about__section">
                    <div className="row">
                        <div className="column large-6 medium-8 tab-full">
                            <div className="section-intro">
                                <h3 className="subhead">Timeline</h3>
                            </div>
                        </div>
                    </div>

                    <div className="row block-large-1-2 block-900-full work-positions">             
                        {renderPos}
                    </div>
                </div>
            </section>
        );
    }
}

class Footer extends React.Component {
    render(){
        return(
            <footer className="s-footer h-dark-bg">
                <div className="row s-footer__bottom">
                    <div className="column large-full ss-copyright">
                        <span>© Copyright 2020 Renzhong</span>
                        <span>Build with React</span>
                        <span>Thanks Ethos for the template</span>
                    </div> 

                    <div className={"ss-go-top" + (this.props.backToTop ? ' link-is-visible' : '')}>
                        <Link smooth={true} title="Back to Top" to="intro">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0l8 9h-6v15h-4v-15h-6z"/></svg>
                        </Link>
                    </div>
                </div> 
            </footer>
        );
    }
}



class Index extends React.Component {
    constructor(props) {
        super(props);
        this.introRef = React.createRef();
        this.state = {
            headerClass: false,
            toggleButton: false,
            backToTop: false,
        };
    }

    handleScroll(height){
        let currentLoc = window.scrollY;
        const trigger = height - 170;
        
         if (currentLoc > trigger + 150) {
            this.setState({
                headerClass: true,
            });
         } else {
             this.setState({
                 headerClass: false,
             });
         }

         if (currentLoc > 800) {
             this.setState({
                 backToTop: true,
             });
         } else {
            this.setState({
                backToTop: false,
            });
         }
    }

    handleClick() {
        let currentToggle = this.state.toggleButton;
        this.setState({
            toggleButton: !currentToggle,
        });
    }

    handleResize() {
        if(window.innerWidth > 900){
            this.setState({
                toggleButton: false,
            });
        }
    }

    handleHide() {
        let currentToggle = this.state.toggleButton;
        if(currentToggle){
            this.setState({
                toggleButton: false,
            });
        }
    }

    componentDidMount() {
        const height = this.introRef.current.clientHeight;
        // console.log("mount " + height)
        window.addEventListener('scroll', () => this.handleScroll(height));
        window.addEventListener('resize', () => this.handleResize());
    }

    render (){
        return(
            <div className={'' + (this.state.toggleButton ? ' menu-is-open' : '')} >
                <Header 
                    addclass={this.state.headerClass} 
                    toggleButton={this.state.toggleButton} 
                    onClick={() => this.handleClick()}
                    onHide={() => this.handleHide()}
                />
                <Intro ref={this.introRef} />
                <About />
                <TimeLine />
                <Footer 
                    backToTop={this.state.backToTop}
                />
            </div>
        );
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('root')
);
