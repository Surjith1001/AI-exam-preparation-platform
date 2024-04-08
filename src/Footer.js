import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-section about">
                    <h2>About Us</h2>
                    <p>Information about the website and its creators.</p>
                </div>
                <div className="footer-section links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms and Conditions</a></li>
                    </ul>
                </div>
                <div className="footer-section contact">
                    <h2>Contact Us</h2>
                    <p>Have questions? <br /> Contact us at: example@email.com</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 GateCrackAI. All rights reserved.</p>
                <div className="social-icons">
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
