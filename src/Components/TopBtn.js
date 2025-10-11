import React, { useEffect } from 'react';

//Import Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';


const BackToTopButton = () => {

    const topFunction = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };


    useEffect(() => {
        const handleScroll = () => {
            const mybutton = document.getElementById("myBtn");
            if (mybutton) {
                if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                    mybutton.style.display = "block";
                } else {
                    mybutton.style.display = "none";
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button onClick={topFunction} id="myBtn" title="Go to top">
            <FontAwesomeIcon icon={faArrowUp} />
        </button>
    );
};

export default BackToTopButton;