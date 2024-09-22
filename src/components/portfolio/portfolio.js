import React, { useEffect, useRef, useState } from 'react';
import './portfolio.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes, faHighlighter, faWebAwesome } from "@fortawesome/free-solid-svg-icons";
import 'animate.css'
import pic from '../../pic/confident-business-people-diversity-teamwork-concept_53876-128969.webp'
import pic2 from '../../pic/222.webp'
import pic3 from '../../pic/3d-background-with-white-cubes.webp'
import pic4 from '../../pic/sss.webp'

export function Portfolio(){
    const [hover, setHover] = useState(null)
    const items = [{
        title: 'One',
        type: 'web',
        src: pic
    },
    {
        title: 'Two',
        type: 'app',
        src: pic2
    },
    {
        title: 'Three',
        type: 'web',
        src: pic3
    },
    {
        title: 'Four',
        type: 'app',
        src: pic4
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
        className={`flex flex-col justify-center items-center my-10 ${isVisible ? 'animate__animated animate__backInLeft' : ''}`}
        >
            <h2 className="my-2 bg-purple-300 rounded-xl py-1 px-3" id="portfolio"
            style={{fontFamily: '"Niconne", cursive'}}>#portfolio</h2>
        <h1 style={{
            fontFamily: '"Poller One", serif',
            color: 'rgb(102, 6, 102)',
            fontSize: '30px',
            margin: '20px 0'
        }}>Check Our Projects</h1>
        <div className='flex flex-row flex-wrap justify-center '>
            {items.map((item, id) => (
                <div key={id} className='sm:w-5/12 w-full h-full' style={{  margin: '5px'}}
                onMouseOver={() => setHover(id)}
                onMouseOut={() => setHover(null)}>
                    <img style={{width: '100%', height: '100%',}} src={item.src} alt={item.title} />
                    {hover === id && 
                    <div className='animate__animated animate__flipInX absolute flex flex-col justify-center items-center w-fit bg-white' 
                    style={{marginTop: '-100px', transition: '0.5s'}}>
                        <span style={{
            fontFamily: '"Poller One", serif',
            color: 'rgb(102, 6, 102)',
            fontSize: '30px',
            }}>{item.title}</span>
                        <span>{item.type}</span>
                    </div>}
                </div>
            ))}
        </div>
        </section>
    )}