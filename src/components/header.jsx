import Image from '../cloud.png';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import React, { Component } from 'react'; 

const Header = () => {
    return ( 
        <div class = "center"> 
        <div class="containerBox">
            <div class="text-box">
                <h1>Hello Cloud!</h1>
                <h6>By Emily Wang</h6>
                    <a href="https://github.com/emilywang98">
                        <FaGithub color = "black" size="1em" class = "mx-4" />
                    </a> 
                    <a href="https://www.linkedin.com/in/emilywang98/">
                        <FaLinkedin size="1em" class = "mx-4" />
                    </a> 
            </div>
            <img src={Image} class="img-responsive"/>
        </div>
        </div>
     );
}
 
export default Header;