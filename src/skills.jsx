import React, { useState, useEffect } from "react";
import Card from './card';

var skill1, skill2, skill3;

function getHeightInPage(element) {
    try {
        var rect = element.getBoundingClientRect().top;
    } catch {
        return;
    }
    return rect + window.pageYOffset;
}

const Skills = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        function handleScroll() {

            if (window.scrollY > scrollY)
                setScrollY(window.scrollY);

        }

        setTimeout(() => {
            skill1 = getHeightInPage(document.getElementsByClassName('card')[1]) - window.outerHeight/2;
            skill2 = getHeightInPage(document.getElementsByClassName('card')[2]) - window.outerHeight/2;
            skill3 = getHeightInPage(document.getElementsByClassName('card')[3]) - window.outerHeight/2;
        }, 500);

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollY]);

    return (
        <>
            <div className='skillCards' style={{ display: 'flex', flexWrap: 'wrap'}}>
                <Card
                    id={scrollY > skill1 ? 'fadeIn' : 'fadeOut'}
                    title='Programming'
                    content=
                    <ul>
                        <li>Java</li>
                        <li>C#</li>
                        <li>Python</li>
                        <li>Arduino / C++</li>
                        <li>HTML / JS / CSS</li>
                        <li>React</li>
                        <li>Git</li>
                        <li>R</li>
                        <li>SQL</li>
                        <li>Mediapipe (framework)</li>
                    </ul>

                />

                <Card
                    id={scrollY > skill2 ? 'fadeIn' : 'fadeOut'}
                    title='Software'
                    content=
                    <ul>
                        <li>Circuitmaker</li>
                        <li>AutoCAD</li>
                        <li>Autodesk Inventor</li>
                        <li>SolidWorks</li>
                        <li>Cura</li>
                        <li>Unity</li>
                        <li>R Studio</li>
                        <li>Blender</li>
                        <li>Shapr3D</li>
                        <li>Adobe Premiere Pro</li>
                        <li>LaserGRBL</li>
                    </ul>
                />

                <Card
                    id={scrollY > skill3 ? 'fadeIn' : 'fadeOut'}
                    title='Electronics'
                    content=
                    <ul>
                        <li>Arduino</li>
                        <li>Raspberry Pi</li>
                        <li>NodeMCU</li>
                        <li>ESP32</li>
                        <li>Soldering</li>
                        <li>Circuit Design</li>
                        <li>Digital Systems Design</li>
                        <li>3-phase motor control</li>
                        <li>Electronic compnents</li>
                    </ul>
                />
            </div>
        </>
    );
};

export default Skills;