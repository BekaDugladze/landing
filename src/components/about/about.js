import React, { useEffect, useRef, useState } from 'react';
import './about.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes, faEllipsis, faHighlighter, faThunderstorm } from "@fortawesome/free-solid-svg-icons";
import 'animate.css'
import pic from '../../pic/confident-business-people-diversity-teamwork-concept_53876-128969.webp'

export function About(){

    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true); // Set to true when in view
                    observer.unobserve(entry.target); // Stop observing after it comes into view
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of the element is in view
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current); // Start observing the section
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current); // Clean up the observer
            }
        };
    }, []);

    return(
        <section 
        ref={sectionRef}
        className={`flex flex-col justify-center items-center my-10 ${isVisible ? 'animate__animated animate__backInLeft' : ''}`}
    >
            <h2 className="my-2 bg-purple-300 rounded-xl py-1 px-3" id="about"
            style={{fontFamily: '"Niconne", cursive'}}>#about</h2>
            <h1 style={{
                fontFamily: '"Poller One", serif',
                color: 'rgb(102, 6, 102)',
                fontSize: '30px',
                margin: '20px 0'
            }}>About Us</h1>
            <div className="animate__animated animate__backInLeft flex flex-col sm:flex-row items-center">
                <img src={pic} alt="our team" className='sm:w-6/12 w-full'/>
                <div className="flex flex-col w-full px-3">
                    <h2 style={{
                    fontFamily: '"Poller One", serif',
                    color: 'rgb(102, 6, 102)',
                    fontSize: '20px',
                }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at dolor bibendum, aliquam mi a, ultrices leo. Phasellus eu nulla ante.</h2>
                    <p style={{
                        color: 'gray',
                        fontSize: '15px',
                        fontFamily: '"Montserrat", sans-serif'
                    }}>Integer facilisis non dui posuere condimentum. Sed tempus purus id rutrum cursus. 
                        Vivamus cursus ex eget ex gravida malesuada. 
                        Curabitur ornare massa lorem, sed porttitor diam maximus sit amet. Proin id ullamcorper dolor. 
                        Curabitur quis ornare diam, vitae mattis sapien.</p>
                    <p className="flex justify-center items-center"
                    style={{
                        color: 'gray',
                        fontSize: '15px',
                        fontFamily: '"Montserrat", sans-serif'}}><FontAwesomeIcon icon={faCubes} style={{color: 'rgb(102, 6, 102)', fontSize: '20px', margin: '3px 6px'}} /> 
                    Nulla maximus ante ex, eu venenatis nibh suscipit id. 
                        Suspendisse a turpis vel sapien lobortis viverra eget ut nulla. 
                        Sed sed ante ut lacus dictum gravida.</p>
                        <p className="flex justify-center items-center"
                    style={{
                        color: 'gray',
                        fontSize: '15px',
                        fontFamily: '"Montserrat", sans-serif'}}><FontAwesomeIcon icon={faHighlighter} style={{color: 'rgb(102, 6, 102)', fontSize: '20px', margin: '3px 6px'}} /> 
                    Nulla maximus ante ex, eu venenatis nibh suscipit id. 
                        Suspendisse a turpis vel sapien lobortis viverra eget ut nulla. 
                        Sed sed ante ut lacus dictum gravida.</p>
                        <p className="flex justify-center items-center"
                    style={{
                        color: 'gray',
                        fontSize: '15px',
                        fontFamily: '"Montserrat", sans-serif'}}><FontAwesomeIcon icon={faEllipsis} style={{color: 'rgb(102, 6, 102)', fontSize: '20px', margin: '3px 6px'}} /> 
                    Nulla maximus ante ex, eu venenatis nibh suscipit id. 
                        Suspendisse a turpis vel sapien lobortis viverra eget ut nulla. 
                        Sed sed ante ut lacus dictum gravida.</p>
                </div>
            </div>
        </section>
    )
}