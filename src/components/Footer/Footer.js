import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component{
    
    render(){
        return(
            <footer>
                <section className="quick-links footer-sec">
                    <div className="link-sec">
                        <h3>QUICK LINKS</h3>
                        <div className="link-list">
                            <a href="http://stockfootage.com/shop/" className="footer-link">Shop</a>
                            <a href="http://stockfootage.com/stock-footage-info/" className="footer-link">About Us</a>
                            <a href="http://stockfootage.com/contact-us/" className="footer-link">Contact Us</a>
                            <a href="https://stockfootage.com/terms-conditions/" className="footer-link">Terms and Conditions</a>
                        </div>
                    </div>
                    <div className="link-sec">
                        <h3>YOUR ACCOUNT</h3>
                        <div className="link-list">
                            <a href="https://stockfootage.com/my-account/" className="footer-link">My Account</a>
                            <a href="https://stockfootage.com/cart/" className="footer-link">My Cart</a>
                            <a href="https://stockfootage.com/my-account/" className="footer-link">Create Account</a>
                        </div>
                    </div>
                    <div className="link-sec">
                        <h3>FOLLOW US</h3>
                        <div className="social-links">
                        <a href="https://www.facebook.com/stockfootageinc" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook fa-lg"></i></a>
                            <a href="https://twitter.com/stockfootageinc" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter fa-lg"></i></a>
                            <a href="https://www.youtube.com/user/HQMEDIA" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube-play fa-lg"></i></a>
                        </div>
                    </div>
                    <img src="https://stockfootage.com/wp-content/uploads/2016/10/RedWhite_DS-380x252.png" alt=""/>
                </section>
                <br/>
                <div className="white-line"></div>
                <section className="footer-sec">
                    <p>© 2017 Stock Footage, Inc. / sales@stockfootage.com / 1-801-221-9570</p>
                </section>
            </footer>
        )
    }
}

export default Footer;