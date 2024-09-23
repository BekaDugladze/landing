import React, { useEffect, useRef, useState } from 'react';
import './contact.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes, faHighlighter, faLocation, faMailBulk, faWebAwesome } from "@fortawesome/free-solid-svg-icons";
import 'animate.css'
import emailjs from 'emailjs-com'

export function Contact() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [error, setError] = useState(false);
    
    const service = process.env.REACT_APP_SERVICE
    const template = process.env.REACT_APP_TEMPLATE
    const id = process.env.REACT_APP_USER_ID


    const formRef = useRef();

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

    const sendEmail = async (e) => {
        e.preventDefault();
        
        console.log(`${service}, ${id}, ${template}`)
        const message = formRef.current.querySelector('[contentEditable]').innerText;
    
        // Prepare the data to send
        const formData = {
          from_name: formRef.current.user_name.value,
          to_name: 'beka',
          from_email: formRef.current.user_email.value,
          message: message,
        };
    
        console.log(formData);
        console.log(emailjs)
        try {
            await emailjs.send(service, template, formData, id).then(
                (response) => {
                  console.log('SUCCESS!', response.status, response.text);
                  formRef.current.reset();
                  setSubmit(true); setTimeout(() => {setSubmit(false);}, 5000)
                },
                (error) => {
                  console.log('FAILED...', error);
                  setError(true); setTimeout(() => {setError(false);}, 5000)
                },
            )
        } catch (error) {
            throw new Error(error);
        }
      };
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
                <form className='flex flex-col' ref={formRef}
                onSubmit={sendEmail}>
                    <div className='flex flex-row formInput'>
                        <input type="text" name='user_name' placeholder='Enter your name' required/>
                        <input type='email' name='user_email' placeholder='Enter your email address' required/>
                    </div>
                    <div contentEditable name="message" placeholder={'write message'} style={{
                        width: '100%', height: '200px', overflowY: 'auto',
                        border: '1px solid rgb(102, 6, 102)', outline: 'none', padding:'3px 9px',
                        fontSize: '13px', borderRadius:'10px'}}></div>
                    <input id='submit' type='submit' value='send' />                    
                    {submit && <p className='text-center text-green-800'>Email Sent Successfully </p>}
                    {error && <p className='text-center text-red-800'>Sorry, something went wrong! </p>}
                </form>
        </div>
        </section>
    )
}