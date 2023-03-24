import React from 'react'
import logo from '../img/logo.png'
const FooterMain = () => {
  return (
    <>
     <footer className="footer">
        <div className="container footer-container pt-5">
            <div className="row ">
                <div className="col-md-4 col-sm-6 col-xs-12 text-light ">
                    <div className="row-col">
                        <div className="footer-logo-img">
                            <img src={logo} alt="" className="logo"/>
                        </div>
                        <p className="pt-3 footer-logo-txt">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem beatae quos praesentium, possimus iusto sequi accusamus error eius voluptas ab perspiciatis sed omnis quam dolore.
                        </p>
                    </div>
                </div>
                <div className="col-md-2 col-sm-6 col-xs-12 px-2 text-light">
                    <div className="row-col">
                        <p className="topic text-light pb-3 font2">Quick Links</p>
                        <p><a href="index.html">Home</a></p>
                        <p><a href="about.php">About Us</a></p>
                        <p><a href="gallery.php">Gallery</a></p>
                        <p><a href="news.php">Latest News</a></p>
                        <p><a href="contact.php">Contact Us</a></p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12 px-2 text-light">
                    <div className="row-col">
                        <p className="topic text-light pb-3 font2">Contact us</p>
                        <p><i className="fas fa-phone-alt"></i> Phone:</p>
                        <p>+91 4684684111</p>
                        <p>+91 7866000000</p>
                        <p><i className="fas fa-envelope"></i> Email:</p>
                        <p><a>example@gmail.com</a></p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12 px-2 text-light">
                    <div className="row-last-col">
                        <p className="topic pb-3 font2">Newsletter</p>
                        <form className="d-flex" onsubmit="subscribeNewsletter(event,this)">
                            <input className="form-control" name="subsForNewsletter" type="email" placeholder="Email" required/>
                            <button className="btn btn-light" type="submit"><i className="fab fa-telegram-plane"></i></button>
                        </form>
                        <div className="social-div">
                            <p className="pt-4 topic font2">Follow Us</p>
                            <a href="" className="p-1"><i
                                    className="fab fa-instagram"></i> </a>
                            <a href="" className="p-1"><i
                                    className="fab fa-facebook-f"></i> </a>
                            <a href="" className="p-1"><i
                                    className="fab fa-linkedin-in"></i> </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright text-center p-3">
            <p> Copyright © 2021 All Rights Reserved by Go-Kart.</p>
        </div>
    </footer>

    </>
  )
}

export default FooterMain