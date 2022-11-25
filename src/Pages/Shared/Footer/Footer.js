import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <div>
                <span className="footer-title">Category</span>
                <Link className="link link-hover">Microbus</Link>
                <Link className="link link-hover">Luxury car</Link>
                <Link className="link link-hover">Electric car</Link>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <Link className="link link-hover">About us</Link>
                <Link className="link link-hover">Contact</Link>
                <Link className="link link-hover">Jobs</Link>
                
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <Link className="link link-hover">Terms of use</Link>
                <Link className="link link-hover">Privacy policy</Link>
                <Link className="link link-hover">Cookie policy</Link>
            </div>
        </footer>
    );
};

export default Footer;