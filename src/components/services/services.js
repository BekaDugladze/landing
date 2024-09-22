import React, { useEffect, useRef, useState } from 'react';
import './services.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes, faHighlighter, faWebAwesome } from "@fortawesome/free-solid-svg-icons";
import 'animate.css'
import pic from '../../pic/confident-business-people-diversity-teamwork-concept_53876-128969.webp'

export function Services(){
    const [hover, setHover] = useState(null)
    const info = [{
        icon: faWebAwesome,
        title: 'Service One',
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Duis luctus pellentesque rutrum. Nam at sapien sagittis, ultrices massa eget, sagittis velit. 
            Proin sit amet porttitor diam, ac lacinia nibh. 
            Vivamus ut sodales purus, vestibulum placerat justo.`,
        href: '#One'
    },{
        icon: faHighlighter,
        title: 'Service Two',
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Duis luctus pellentesque rutrum. Nam at sapien sagittis, ultrices massa eget, sagittis velit. 
            Proin sit amet porttitor diam, ac lacinia nibh. 
            Vivamus ut sodales purus, vestibulum placerat justo.`,
        href: '#Two'
    },{
        icon: faCubes,
        title: 'Service Three',
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Duis luctus pellentesque rutrum. Nam at sapien sagittis, ultrices massa eget, sagittis velit. 
            Proin sit amet porttitor diam, ac lacinia nibh. 
            Vivamus ut sodales purus, vestibulum placerat justo.`,
        href: '#Three'
    },]
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
        className={`flex flex-col justify-center items-center my-10 ${isVisible ? 'animate__animated animate__backInRight' : ''}`}
        >
            <h2 className="my-2 bg-purple-300 rounded-xl py-1 px-3" id="services"
            style={{fontFamily: '"Niconne", cursive'}}>#services</h2>
            <h1 style={{
                fontFamily: '"Poller One", serif',
                color: 'rgb(102, 6, 102)',
                fontSize: '30px',
                margin: '20px 0'
            }}>Check Our Services</h1>
            <div className='flex flex-row sm:flex-nowrap flex-wrap'>
                {info.map((item, id) => (
                    <div className='flex flex-col justify-center items-center p-5 w-fit m-5'
                    onMouseOver={() => setHover(id)}
                    onMouseOut={() => setHover(null)}
                    style={{
                        border: hover === id ? '1px solid black' : '1px solid rgb(102, 6, 102)',
                        background: hover === id ? 'rgba(102, 6, 102, 0.1)' : 'white',
                    }}>
                        <FontAwesomeIcon icon={item.icon} style={{
                            color: 'rgb(102, 6, 102)',
                            fontSize: '40px',
                            margin: '10px 0'
                        }}/>
                        <h1 style={{
                            color: 'rgb(102, 6, 102)',
                            fontSize: '25px',
                            fontFamily: '"Poller One", serif',
                            margin: '10px 0'
                        }}>{item.title}</h1>
                        <p style={{
                            color: 'gray',
                            fontSize: '15px',
                            fontFamily: '"Montserrat", sans-serif',
                            margin: '10px 0'
                        }}>{item.desc}</p>
                        <a href={item.href} className='aServices'>See Details</a>
                    </div>
                ))}
            </div>
        </section>
    )
}