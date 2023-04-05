import React, { useState, useEffect } from "react";
import maze_out from './Images/maze_out.png';
import spleg from './Images/spleg.png';
import spleg_start from './Images/spleg_start.png';
import spleg_networking from './Images/spleg_networking.png';
import spleg_host from './Images/spleg_host.png';
import glide from './Images/glide.png';
import glide_coins from './Images/glide_coins.png';
import glide_end from './Images/glide_end.png';
import glide_menu from './Images/glide_menu.png';



var messageID = 0;
var descriptionID = 0;
var imageID = 0;

function getHeightInPage(element) {
    console.log(element);
    try {
        var rect = element.getBoundingClientRect().top;
    } catch {
        return;
    }
    return rect + window.pageYOffset;
}

function getScrollHeight(className, id) {
    return getHeightInPage(document.getElementsByClassName(className)[id]) - window.outerHeight / 2;
}

const Projects = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        function handleScroll() {

            if (window.scrollY > scrollY)
                setScrollY(window.scrollY);

        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollY]);

    return (
        <>
            <div style={{visibility: 'hidden'}}>{ messageID = 0 /* Resetting the messageID so messages render sequentially/correctly */}</div>
            <div style={{visibility: 'hidden'}}>{ descriptionID = 0 /* Resetting the descriptionID so messages render sequentially/correctly */}</div>
            <div style={{visibility: 'hidden'}}>{ imageID = 0 /* Resetting the imageID so messages render sequentially/correctly */}</div>
            <div>
                <h1 className='projectsMessage' id={scrollY > getScrollHeight('projectsMessage', messageID++) ? 'fadeIn' : 'fadeOut'}>
                    Let's get a look at some projects.
                </h1>
                <h1 className='projectsMessage' id={scrollY > getScrollHeight('projectsMessage', messageID++) ? 'fadeIn' : 'fadeOut'}>
                    I began my journey in this field to satisfy my childhood dream of creating the video games I had loved.
                </h1>
                <h1 className='projectsMessage' id={scrollY > getScrollHeight('projectsMessage', messageID++) ? 'fadeIn' : 'fadeOut'}>
                    Teaching myself Java through YouTube videos at the age of 12, I decided to spend my preteen summer working on and publishing my first game: "Maze Out."
                </h1>
                <h1 className='projectsMessage' id={scrollY > getScrollHeight('projectsMessage', messageID++) ? 'fadeIn' : 'fadeOut'}>
                    Maze Out
                    <h2 className='metadata'>
                        Published: August 10th, 2017
                    </h2>
                </h1>
                <a href='https://n3to.itch.io/maze-out' target='_blank'>
                    <img className='img' src={maze_out} alt='Maze Out screenshot' id={scrollY > getScrollHeight('img', imageID++) ? 'fadeIn' : 'fadeOut'}/>
                </a>
                <p className='projectDescription' id={scrollY > getScrollHeight('projectDescription', descriptionID++) ? 'fadeIn' : 'fadeOut'}>
                    This project, inspired by "World's Hardest Game," is a rage inducing puzzle game that I developed
                    to play when my friends and I were bored in class. Developed completely in Java with implemented graphics
                    using sprites I created in "paint.net", I released this game on "itch.io" as both an in-browser
                    Applet and a downloadable .exe file for users to run locally.
                </p>
                <h1 className='projectsMessage' id={scrollY > getScrollHeight('projectsMessage', messageID++) ? 'fadeIn' : 'fadeOut'}>
                    After obtaining the fundamentals of programming concepts and OOP, I realized that
                    I needed to branch out and expand my knowledge in more technologies. Still intrigued by
                    game development, I discovered Unity Game Engine and C#.
                </h1>
                <h1 className='projectsMessage' id={scrollY > getScrollHeight('projectsMessage', messageID++) ? 'fadeIn' : 'fadeOut'}>
                    After over a year of following YouTube tutorials and creating a plethora of
                    course-based games, I decided to design and develop my own from scratch.
                </h1>
                <h1 className='projectsMessage' id={scrollY > getScrollHeight('projectsMessage', messageID++) ? 'fadeIn' : 'fadeOut'}>
                    Spleg
                    <h2 className='metadata'>
                        Worked on: Jan. 2019 - June. 2019
                    </h2>
                </h1>
                <img className='img' src={spleg_start} alt='spleg' id={scrollY > getScrollHeight('img', imageID++) ? 'fadeIn' : 'fadeOut'} />
                <img className='img' src={spleg} alt='spleg' id={scrollY > getScrollHeight('img', imageID++) ? 'fadeIn' : 'fadeOut'} />
                <img className='img' src={spleg_host} alt='spleg' id={scrollY > getScrollHeight('img', imageID++) ? 'fadeIn' : 'fadeOut'} />
                <img className='img' src={spleg_networking} alt='spleg' id={scrollY > getScrollHeight('img', imageID++) ? 'fadeIn' : 'fadeOut'} />
                <p className='projectDescription' id={scrollY > getScrollHeight('projectDescription', descriptionID++) ? 'fadeIn' : 'fadeOut'}>
                    This multiplayer, mobile game was a contest between friends to see who could survive
                    the longest as the floor behind each player fell. While this project was never
                    published, it further developed my knowledge of Unity along with the fundamentals
                    of networking. Using the Mirror multiplayer library for Unity, I used Kubernetes control plane
                    (KCP) as the protocol to allow for networking between players.
                </p>
                <h1 className='projectsMessage' id={scrollY > getScrollHeight('projectsMessage', messageID++) ? 'fadeIn' : 'fadeOut'}>
                    After falling in love with Unity and mobile game development, I sought
                    to be on the iOS App Store. I decided to make a hypercasual mobile game.
                </h1>
                <h1 className='projectsMessage' id={scrollY > getScrollHeight('projectsMessage', messageID++) ? 'fadeIn' : 'fadeOut'}>
                    Glide
                    <h2 className='metadata'>
                        Worked on: April. 2020 - July. 2020 
                    </h2>
                </h1>
                <img className='img' src={glide_menu} alt='glide' id={scrollY > getScrollHeight('img', imageID++) ? 'fadeIn' : 'fadeOut'} />
                <img className='img' src={glide} alt='glide' id={scrollY > getScrollHeight('img', imageID++) ? 'fadeIn' : 'fadeOut'} />
                <img className='img' src={glide_end} alt='glide' id={scrollY > getScrollHeight('img', imageID++) ? 'fadeIn' : 'fadeOut'} />
                <img className='img' src={glide_coins} alt='glide' id={scrollY > getScrollHeight('img', imageID++) ? 'fadeIn' : 'fadeOut'} />

                <p className='projectDescription' id={scrollY > getScrollHeight('projectDescription', descriptionID++) ? 'fadeIn' : 'fadeOut'}>
                    As your player is launced from a cannon, you must avoid obstacles by tilting your device while
                    using your jetpack to gain altitude. Collect coins and upgrade your player
                    as you try to go as far as possible! While this project is not currently on the iOS App Store, it has
                    fully implemented monitization, an attractive Graphical User Interface,
                    in-game currency, perlin noise procedural terrain generation, and a variety of other 
                    attributes. I paused my development of this project to 
                    pursue other priorities, however, I fully plan on finishing the game 
                    and publishing it as soon as possible.
                </p>
            </div>
        </>
    );
};

export default Projects;