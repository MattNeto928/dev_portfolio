import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import animationData from './email_anim.json'

var height;

function getHeightInPage(element) {
    try {
        var rect = element.getBoundingClientRect().top;
    } catch {
        return;
    }
    return rect + window.pageYOffset;
}

const EmailAnimation = (props) => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        function handleScroll() {

            setScrollY(window.scrollY);

            setTimeout(() => {
                height = getHeightInPage(document.getElementsByClassName('contactIcon-email')[0]) - window.outerHeight / 2;
            }, 10);

            if (scrollY > height) {
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
        autoplay: true,
        animationData: animationData,
        renderer: 'svg'
    }
    return (
        <div className='clip-container-email'>
            <div id={isVisible ? 'fadeIn' : 'fadeOut'}
                className={isVisible ? 'moveup' : ''}>
                <Lottie
                    options={defaultOptions}
                    height={"14rem"}
                    width={"14rem"}
                />
            </div>
            <a
                className='contactIcon-email'
                //href='mailto:mattneto928@gmail.com?subject = Feedback&body = Message'
                //target='_blank'
                rel='noreferrer'
                onClick = {() => {
                    window.scrollTo({
                        top: 40000,
                        behavior: 'smooth'
                    });
                }}>
            </a>
        </div>
    )
};

export default EmailAnimation;