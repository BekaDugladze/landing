import React from "react";
import back from '../../pic/3d-background-with-white-cubes.webp'
import './first.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faUpDown } from "@fortawesome/free-solid-svg-icons";
import 'animate.css'

export function First(){
    return(
        <div className="w-full h-screen flex flex-row justify-start items-center">
            <img className="absolute w-full h-screen z-0" src={back} alt="back" />
            <div className="flex flex-col justify-center items-center z-10 welcomeDiv">
                <h1 className="animate__animated animate__rubberBand">WELCOME</h1>
                <p className="animate__animated animate__backInRight">We have many offers for you!</p>
                <a className="animate__animated animate__backInLeft" href="#about">Find Out More <FontAwesomeIcon icon={faCaretDown} /></a>
            </div>
        </div>
    )
}