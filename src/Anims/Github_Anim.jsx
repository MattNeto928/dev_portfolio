import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import animationData from './github_anim.json'

var height;

function getHeightInPage(element) {
    try {
        var rect = element.getBoundingClientRect().top;
    } catch {
        return;
    }
    return rect + window.pageYOffset;
}

const GithubAnimation = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        function handleScroll() {

            setScrollY(window.scrollY);

            setTimeout(() => {
                height = getHeightInPage(document.getElementsByClassName('contactIcon-github')[0]) - window.outerHeight / 2;
            }, 10);

            if (scrollY > height) {
                setIsPlaying(true);
                setIsVisible(true);
            }

        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollY]);

    const defaultOptions = {
        loop: true,
        autoplay: false,
        animationData: animationData,
        renderer: 'svg'
    }
    return (
        <div className='clip-container-github'>
            <div id={isVisible ? 'fadeIn' : 'fadeOut'}
                className={isVisible ? 'moveup' : ''}>
                <Lottie
                    options={defaultOptions}
                    height={"14rem"}
                    width={"14rem"}
                    isPaused={!isPlaying}
                />
            </div>
            <a
                className='contactIcon-github'
                href='https://github.com/mattneto928'
                target='_blank'
                rel='noreferrer'>
            </a>
        </div>
    )
};
export default GithubAnimation;