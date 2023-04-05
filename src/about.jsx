import React, { useState, useEffect } from "react";
import GithubAnimation from './Anims/Github_Anim.jsx';
import LinkedInAnimation from './Anims/LinkedInAnim.jsx';
import EmailAnimation from './Anims/Email_Anim.jsx';
import Card from './card';

var aboutCard, faceLoaded;

function getHeightInPage(element) {
    try {
        var rect = element.getBoundingClientRect().top;
    } catch {
        return;
    }
    return rect + window.pageYOffset;
}

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 0);
    }, []);
    useEffect(() => {
        function handleScroll() {

            setScrollY(window.scrollY);


            setTimeout(() => {
                aboutCard = getHeightInPage(document.getElementsByClassName('card')[0]) - window.outerHeight/2;
                faceLoaded = getHeightInPage(document.getElementsByClassName('myImage')[0]) - window.outerHeight/2;
            }, 500);

        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollY]);

    return (
        <>

            <h2 id={isVisible ? 'fadeIn' : 'fadeOut'} className='introduction'>
                My name is Matt Neto and welcome to an exploration of what I do.
            </h2>
            <div className='social_icons'>
                <LinkedInAnimation />
                <EmailAnimation />
                <GithubAnimation />
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
                <div className='myImage' style={{marginTop: '5rem'}} id={scrollY > faceLoaded ? 'fadeIn' : 'fadeOut'} />
                <Card id={scrollY > aboutCard ? 'fadeIn' : 'fadeOut'}
                style= {{padding: '3rem'}}
                title='Who am I?'
                content='Born and raised in Long Island, New York, I&#x27;ve always had a passion for electronics and programming. 
                I am currently studying Computer Engineering at Georgia Tech. I have a passion for using technology to solve complex problems
                and always looking to expand my knowledge and take on new challenges. In my free time, I enjoy staying up to date on the latest 
                technology trends and tinkering with new tools. I am excited to apply my skills and continue to grow as an engineer.'
                />
            </div>
        </>
    );
};

export default About;