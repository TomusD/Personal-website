import "./FormStyles.css";
import React from 'react'
import emailjs from '@emailjs/browser'

// Email function logic
 const sendEmail = (e) => {
    e.preventDefault();
    alert("Email sent")
    emailjs.sendForm('service_0z1fxvj', 'template_jyofy7j', e.target, '4h1d8pvsbGgRJvBAT')
    e.target.reset()
}



const Form = () => {
    return (
        <div className="form">
            <form className="contact_form" onSubmit={sendEmail}>
                
                <label>Name:</label>
                <input 
                type="text" 
                name="from_name"
                ></input>

                <label>Email:</label>
                <input 
                type="email" 
                name="email_from" 
                className="email_from">
                </input>

                <label>Subject:</label>
                <input 
                type="text" 
                name="from_subject"
                ></input>

                <label>Message:</label>
                <textarea 
                rows ="6" 
                placeholder ="Type your message here" 
                name="from_message"
                ></textarea>
                <button className="btn">Submit</button>

            </form>
        </div>
    )   
}

export default Form