import React, { useState, useEffect } from 'react';

var aboutScroll = 0, skillsScroll, projectsScroll;

function getHeightInPage(element) {
    try {
        var rect = element.getBoundingClientRect().top;
    } catch {
        return;
    }
    return rect + window.pageYOffset;
}

function map(x, in_min, in_max, out_min, out_max) {
    return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

const Header = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            skillsScroll = getHeightInPage(document.getElementsByClassName('card')[1]) - window.outerHeight / 2 + 300;
            projectsScroll = getHeightInPage(document.getElementsByClassName('projectsMessage')[0]) - window.outerHeight / 2 + 300;
        }, 500);
    }, []);

    useEffect(() => {
        function handleScroll() {
            setScrollY(window.scrollY);
        }

        skillsScroll = getHeightInPage(document.getElementsByClassName('card')[1]) - window.outerHeight / 2 + 300;
        projectsScroll = getHeightInPage(document.getElementsByClassName('projectsMessage')[0]) - window.outerHeight / 2 + 300;

        var underline = document.getElementById('underline');
        var abt = document.getElementById('about');
        var skl = document.getElementById('skills');
        var proj = document.getElementById('projects');
        var newWidth, newLeft, newTop;
        // The user is in between ABOUT and SKILLS
        if (scrollY <= skillsScroll) {
            newWidth = map(scrollY, 0, skillsScroll, abt.clientWidth, skl.clientWidth);
            newLeft = map(scrollY, 0, skillsScroll, abt.getBoundingClientRect().left, skl.getBoundingClientRect().left);
            newTop = map(scrollY, 0, skillsScroll, abt.getBoundingClientRect().top + abt.getBoundingClientRect().height + 10, skl.getBoundingClientRect().top + skl.getBoundingClientRect().height + 10);
        } else if (scrollY <= projectsScroll) { // The user is in between SKILLS and PROJECTS
            newWidth = map(scrollY, skillsScroll, projectsScroll, skl.clientWidth, proj.clientWidth);
            newLeft = map(scrollY, skillsScroll, projectsScroll, skl.getBoundingClientRect().left, proj.getBoundingClientRect().left);
            newTop = map(scrollY, skillsScroll, projectsScroll, skl.getBoundingClientRect().top + skl.getBoundingClientRect().height + 10, proj.getBoundingClientRect().top + proj.getBoundingClientRect().height + 10);
        }
        else if (scrollY > projectsScroll) {
            newWidth = proj.clientWidth;
            newLeft = proj.getBoundingClientRect().left;
            newTop = proj.getBoundingClientRect().top + proj.getBoundingClientRect().height + 10;
        }

        underline.style.width = newWidth + 'px';
        underline.style.left = newLeft + 'px';
        underline.style.top = newTop - 25 + 'px';

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollY]);

    return (

        <>
            <div style={{ position: 'fixed', top: 0, left: 0, zIndex: 1 }}>
                <header className="head">
                    <div className="headingTitle">
                        <h1 id='about' onClick={
                            function () {
                                window.scrollTo({
                                    top: aboutScroll,
                                    behavior: 'smooth'
                                });
                            }
                        }>About</h1>
                    </div>
                    <div className="headingTitle">
                        <h1 id='skills' onClick={
                            function () {
                                window.scrollTo({
                                    top: skillsScroll,
                                    behavior: 'smooth'
                                });
                            }
                        }>Skills</h1>
                    </div>
                    <div className="headingTitle">
                        <div className='projects'>
                            <h1 id='projects' onClick={
                                function () {
                                    window.scrollTo({
                                        top: projectsScroll,
                                        behavior: 'smooth'
                                    });
                                }
                            }>Projects </h1>
                            <div className='dropdown-content'>
                                <div onClick={
                                    function () {
                                        window.scrollTo({
                                            top: getHeightInPage(document.getElementsByClassName('projectsMessage')[3]),
                                            behavior: 'smooth'
                                        });
                                    }
                                }>Maze Out</div>
                                <div onClick={
                                    function () {
                                        window.scrollTo({
                                            top: getHeightInPage(document.getElementsByClassName('projectsMessage')[6]),
                                            behavior: 'smooth'
                                        });
                                    }
                                }>Spleg</div>
                                <div onClick={
                                    function () {
                                        window.scrollTo({
                                            top: getHeightInPage(document.getElementsByClassName('projectsMessage')[8]),
                                            behavior: 'smooth'
                                        });
                                    }
                                }>Glide</div>
                            </div>
                        </div>
                    </div>
                    <div id="underline" />
                </header>
            </div>

            <div className='objects'>
                <ul className='box'>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>


        </>
    );
};

export default Header;