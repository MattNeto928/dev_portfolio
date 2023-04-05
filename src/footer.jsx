import React, { useState, useEffect } from "react";
import uparrow from './svg/up-arrow.svg'
import background from './svg/heading.svg'

function getHeightInPage(element) {
    try {
        var rect = element.getBoundingClientRect().top;
    } catch {
        return;
    }
    return rect + window.pageYOffset;
}

const Footer = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        function handleScroll() {

            setScrollY(window.scrollY);
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollY]);

    return (
        <>
            <div className='footer'>
                <h1 className='contactMe'>
                    Contact Me
                </h1>
                <form className='formInputs' action="https://formsubmit.co/mattneto928@gmail.com" method="POST">
                    <input className='email' type="email" name="email" placeholder="Email Address" required />
                    <input className='subject' type="subject" name="_subject" placeholder="Subject" />
                    <input type="hidden" name="_next" value="http://localhost:3000/" />
                    <div className='messageWithButton'>
                        <textarea className='message' type="text" name="message" placeholder="Write your message here" required />
                        <button className='submit' type="submit">Send</button>
                    </div>
                </form>
                <div className='topButton'>
                    <button
                        className='topText'
                        onClick={() => {
                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth'
                            });
                        }}
                    >Go back to top</button>
                    <img
                        src={uparrow}
                        onClick={() => {
                            window.scrollTo({
                                top: 0,
                            });
                        }}></img>
                </div>
            </div>
        </>
    );
};

export default Footer;