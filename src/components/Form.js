import "./FormStyles.css";
import React from 'react'
import emailjs from '@emailjs/browser'
import { useState } from 'react'

// Email function logic

const Form = () => {

    const [formData, setFormData] = useState({
        from_name: '',
        email_from: '',
        from_subject: '',
        from_message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,[e.target.name]: e.target.value})
    }

    const isValidEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Email function logic
    const sendEmail = (e) => {
        e.preventDefault();
        if (!formData.from_name || !formData.email_from || 
            !formData.from_subject || !formData.from_message) {
            alert("Please fill out all fields.");
            return;
        }

        if (!isValidEmail(formData.email_from)) {
            alert("Please enter a valid email.");
            return;
        }

        emailjs.sendForm('service_0z1fxvj', 'template_jyofy7j', e.target, '4h1d8pvsbGgRJvBAT')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset()
    }

    return (

        <div className="form">
            <form className="contact_form" onSubmit={sendEmail}>
                
                <label>Name:</label>
                <input 
                type="text" 
                name="from_name"
                onChange={handleChange}
                ></input>

                <label>Email:</label>
                <input 
                type="email" 
                name="email_from" 
                className="email_from"
                onChange={handleChange}
                ></input>

                <label>Subject:</label>
                <input 
                type="text" 
                name="from_subject"
                onChange={handleChange}
                ></input>

                <label>Message:</label>
                <textarea 
                rows ="6" 
                placeholder ="Type your message here" 
                name="from_message"
                onChange={handleChange}
                ></textarea>
                <button className="btn">Submit</button>

            </form>
        </div>
    )   
}

export default Form