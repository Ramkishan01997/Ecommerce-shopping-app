import React from 'react'
import './ContactUs.css';
const ContactUs = () => {
    return (
        <div className="contact">
            <div class="content"><h2>Contact Us</h2>
            <div className="container">
             <div className="conatctinfo">
                <div className="box">
                <div className="add">
                   <div className="icon"><i class="fas fa-map-marker-alt"></i></div>
                   <div className="text">
                       <h3>Address</h3>
                       <p> At Barbadi <br/>Dist Parbhani<br/> Pin 461511</p>
                   </div>
        </div>
        <div className="add">
                   <div className="icon"><i class="fas fa-phone-square-alt"></i></div>
                   <div className="text">
                   <h3>Phone</h3>
                   <p> 9545714224</p>
                   </div>
</div>
<div className="add">
                   <div className="icon"><i class="fas fa-envelope-square"></i></div>
                   <div className="text">
                       <h3>Email</h3>
                       <p> ramkishan01997@gmail.com</p>
                   </div>
                   </div>
                </div>
            </div>
            <div className="contactForm">
            <form>
            <h2>Send Message</h2>
            <div className="inputbox">
                <input type="text" name="" required="required"/>
                <span>Full Name</span>
            </div>
            <div className="inputbox">
               <input type="text" name="" required="required"/>
               <span>Email</span>
               
             </div>
            <div className="inputbox">
              <textarea required="required"></textarea>
              <span> Type your Message...</span>
            </div>
            <div className="inputbox">
               <input type="submit" value="Send"/>
             </div>
                </form>
            </div>
            </div>
            </div>
            </div>
       
    )
}

export default ContactUs
