import React from 'react';
import './Footer.css';
import facebook from './images/facebook.png'


function Footer() {
    return(
        <div className="footer">
            <div className="sb_footer section_padding">
                <div className="sb_footer-links">
                    <div className="sb_footer-links_div">
                        <h4>For Business</h4>
                            <a href="/employer">
                                <p>Employer</p>
                            </a>
                            <a href="/healthplan">
                                <p>Health Plan</p>
                            </a>
                            <a href="/individual">
                                <p>Individual</p>
                            </a>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>For Business</h4>
                            <a href="/resource">
                                <p>Resource center</p>
                            </a>
                            <a href="/healthplan">
                                <p>Testimonials</p>
                            </a>
                            <a href="/individual">
                                <p>STV</p>
                            </a>                    
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>Partners</h4>
                            <a href="/resource">
                                <p>Swing Tech</p>
                            </a>                    
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>Company</h4>
                            <a href="/about">
                                <p>About</p>
                            </a>
                            <a href="/press">
                                <p>Press</p>
                            </a>
                            <a href="/Career">
                                <p>Career</p>
                            </a>
                            <a href="/Contact">
                                <p>Contact</p>
                            </a>                    
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>Social Media</h4>
                        <div className="socialmedia">
                            <p><img src={facebook} alt="" /></p>
                            <p><img src={facebook} alt="" /></p>
                            <p><img src={facebook} alt="" /></p>
                            <p><img src={facebook} alt="" /></p>
                        </div>
                    </div>
                </div>
            
            <hr></hr>

            <div className="sb_footer-below">
                <div className="sb_footer-copyright">
                    <p>
                        @{new Date().getFullYear()} McGill Iranian Student Association
                    </p>
                </div>
                <div className="sb_footer-below-links">
                    <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                    <a href="/terms"><div><p>Privacy</p></div></a>
                    <a href="/terms"><div><p>Security</p></div></a>
                </div>
            </div>

            </div>
        </div>
    );
}

export default Footer;