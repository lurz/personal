import React from 'react'
import ReactDOM from 'react-dom'
// import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { Parallax, Background } from 'react-parallax';
import './style/main.css'
import './style/base.css'
import './style/vendor.css'
// import Game from './game'
// import Weather from './weather'

function Header(props) {
    return(
        <header className={"s-header" + (props.addclass ? ' sticky offset scrolling' : '')}>
            <div className="header-content">
                <nav className="header-nav-wrap">
                    <ul className="header-nav">
                        <li><a href="#intro" className='smoothscroll' title="Intro">Home</a></li>
                        <li><a href="#about" className='smoothscroll' title="About">About</a></li>
                        <li><a href="#projects" className='smoothscroll' title="Projects">Projects</a></li>
                        <li><a href="#timeline" className='smoothscroll' title="Works">Timeline</a></li>
                        <li><a href="mailto:#0" className='smoothscroll' title="Contact me">Contact me</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

const Intro = React.forwardRef((props, ref) =>  (
    <Parallax bgImage={require('./images/intro.jpg')} bgWidth='3000' bgHeight='2000'>
        <section id="intro" ref={ref} className="s-hero target-section">
        <div className="row hero-content">
            <div className="column large-full">
                <h1>
                Hi, I'm Renzhong Lu, <br />
                a computer science Student <br />
                at U of M - Ann Arbor
                </h1>

                <ul className="hero-social">
                    <li>
                        <a href="#0" title="">Twitter</a>
                    </li>
                    <li>
                        <a href="#0" title="">Behance</a>
                    </li>
                    <li>
                        <a href="#0" title="">Dribbble</a>
                    </li>
                </ul>

            </div> 

        </div>

        <div className="hero-scroll">
            <a href="#about" className="scroll-link smoothscroll">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 24l-8-9h6v-15h4v15h6z"/></svg>
            </a>
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

                    <div className="section-intro" data-num="01" data-aos="fade-up">
                        <h3 className="subhead">About Me</h3>
                        <h1 className="display-1">I'm the kind of person who isn't afraid of challenges.</h1>
                    </div>

                    {/* <div className="profile-pic" data-aos="fade-up">
                        <img src="images/profile-pic.jpg" 
                             srcSet="images/profile-pic.jpg 1x, images/profile-pic@2x.jpg 2x" alt="" />
                    </div> */}

                    <h3 data-aos="fade-up">Profile</h3>

                    <p data-aos="fade-up">
                    In consectetuer turpis ut velit. Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. 
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis 
                    mi consectetuer lacinia. Fusce neque. Curabitur nisi. Suspendisse nisl elit, rhoncus eget, elementum ac, 
                    condimentum eget, diam. Phasellus magna. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, 
                    ipsum. Maecenas egestas arcu quis ligula mattis placerat. Suspendisse pulvinar, augue ac venenatis condimentum, 
                    sem libero volutpat nibh, nec pellentesque velit pede quis nunc.
                    </p>

                </div>
            </div>

        </div>
        </section>
    );
}



class Index extends React.Component {
    constructor(props) {
        super(props);
        this.introRef = React.createRef();
        this.state = {
            headerClass: false,
        }
    }

    handleScroll(height){
        let currentLoc = window.scrollY;
        const trigger = height - 170;
        console.log(trigger);
        console.log(currentLoc);
        
         if (currentLoc > trigger + 150) {
            this.setState({
                headerClass: true,
            });
         } else {
             this.setState({
                 headerClass: false,
             });
         }
    }

    componentDidMount() {
        const height = this.introRef.current.clientHeight;
        console.log("mount " + height)
        window.addEventListener('scroll', () => this.handleScroll(height));
    }

    render (){
        return(
            <div>
                <Header addclass={this.state.headerClass} />
                <Intro ref={this.introRef} />
                <About />
            </div>
        );
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('root')
);
