import React, { useEffect, useRef, useState } from 'react';
import './contact.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes, faHighlighter, faLocation, faMailBulk, faWebAwesome } from "@fortawesome/free-solid-svg-icons";
import 'animate.css'

export function Contact() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [submit, setSubmit] = useState(false);

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
        className={`flex flex-col justify-center items-center my-10 ${isVisible ? 'animate__animated animate__backInUp' : ''}`}
        >
            <h2 className="my-2 bg-purple-300 rounded-xl py-1 px-3" id="contact"
            style={{fontFamily: '"Niconne", cursive'}}>#contact</h2>
        <h1 style={{
            fontFamily: '"Poller One", serif',
            color: 'rgb(102, 6, 102)',
            fontSize: '30px',
            margin: '20px 0'
        }}>Contact Us</h1>
        <div className='flex sm:flex-row flex-col justify-around items-center w-full'>
            <div className='flex flex-col justify-start items-start'>
                <div className='flex flex-row justify-center items-center my-5'>
                    <FontAwesomeIcon icon={faLocation} style={{
                        color: 'rgb(102, 6, 102)',
                        fontSize: '25px',}} />
                    <div className='flex flex-col justify-center items-start mx-10'>
                        <h2 style={{
                        fontFamily: '"Poller One", serif',
                        color: 'rgb(102, 6, 102)',
                        fontSize: '15px',}}
                        >Location</h2>
                        <p style={{
                        color: 'gray',
                        fontSize: '13px',
                        fontFamily: '"Montserrat", sans-serif'
                    }}>Tbilisi, Georgia</p>
                    </div>
                </div>
                <div className='flex flex-row justify-center items-center my-5'>
                    <FontAwesomeIcon icon={faMailBulk} style={{
                        color: 'rgb(102, 6, 102)',
                        fontSize: '25px',}} />
                    <div className='flex flex-col justify-center items-start mx-10'>
                        <h2 style={{
                        fontFamily: '"Poller One", serif',
                        color: 'rgb(102, 6, 102)',
                        fontSize: '15px',}}
                        >E-Mail</h2>
                        <a 
                        href='mailto:dugladzebeqa@gmail.com'
                        style={{
                        color: 'gray',
                        fontSize: '13px',
                        fontFamily: '"Montserrat", sans-serif'
                    }}>Dugladzebeqa@gmail.com</a>
                    </div>
                </div>
                <div className='flex flex-row justify-center items-center my-5'>
                    <FontAwesomeIcon icon={faMailBulk} style={{
                        color: 'rgb(102, 6, 102)',
                        fontSize: '25px',}} />
                    <div className='flex flex-col justify-center items-start mx-10'>
                        <h2 style={{
                        fontFamily: '"Poller One", serif',
                        color: 'rgb(102, 6, 102)',
                        fontSize: '15px',}}
                        >Phone</h2>
                        <a 
                        href='phoneto:dugladzebeqa@gmail.com'
                        style={{
                        color: 'gray',
                        fontSize: '13px',
                        fontFamily: '"Montserrat", sans-serif'
                    }}>574-474-019</a>
                    </div>
                </div>
            </div>
                <form className='flex flex-col'
                onSubmit={() => {setSubmit(true); setTimeout(()=> {setSubmit(false)}, 7000)}}>
                    <div className='flex flex-row formInput'>
                        <input type="text" placeholder='Enter your name' required/>
                        <input type='email' placeholder='Enter your email address' required/>
                    </div>
                    <div contentEditable placeholder={'write message'} style={{
                        width: '100%', height: '200px', overflowY: 'auto',
                        border: '1px solid rgb(102, 6, 102)', outline: 'none', padding:'3px 9px',
                        fontSize: '13px', borderRadius:'10px'}}></div>
                    <input id='submit' type='submit' value='send' />
                    {submit && <p className='text-center text-red-800'>Sorry, something went wrong! </p>}
                </form>
        </div>
        </section>
    )
}