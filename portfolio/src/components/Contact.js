import React, {useState, useRef} from "react";
import emailjs from '@emailjs/browser';
import { toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();

  const emailHandler = (e) => {
   e.preventDefault(); // prevents the page from reloading when you hit “Send”
 
   emailjs.sendForm('service_iqaey4f', 'template_yydb9bp', form.current, 'lwXjnNS0Jt8hgAAPh')
     .then((result) => {
        form.current.reset();
        toast("Message has been sent");
    }, (error) => {
        toast(error);
    });
 };

  return (
    <section id="contact" className="relative">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800 antialiased">
            <iframe
            title="map"
            width="600"
             height="450"
             allowfullscreen=""
            loading="lazy"
             referrerpolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7) border(0)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214587.41156412516!2d-96.73155254999999!3d32.82066455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19f77b45974b%3A0xb9ec9ba4f647678f!2sDallas%2C%20TX!5e0!3m2!1sen!2sus!4v1674750364800!5m2!1sen!2sus" ></iframe>
          <div className="relative z-10 rounded-md shadow-md bg-[#02044A] p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20 -mt-4">
            <header>
              <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">Get in Touch</h1>
              <p className="font-light text-base text-gray-200 mt-2">
                  Fill in the details and I'll get back to you as soon as I can.
                </p>

            </header>
          
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <h2 className="text-gray-50 font-light text-sm">
                EMAIL
              </h2>
              <a className = "text-gray-50 font-light text-sm" href="mailto:sanchrachell@gmail.com">Sanchrachell@gmail.com</a>
              <h2 className="text-gray-50 font-light text-sm">
                PHONE
              </h2>
              <p className="text-gray-50 font-light text-sm">425-301-8146</p>
            </div>
          </div>
        </div>
        <form ref={form} className="form rounded-lg bg-white p-4 flex flex-col" onSubmit={emailHandler}>
          <label className="text-sm text-gray-600 mx-4">Name</label>
          <input type="text" name="user_name" />
          <label className="text-sm text-gray-600 mx-4">Email</label>
          <input type="email" name="user_email" />
          <label className="text-sm text-gray-600 mx-4">Message</label>
          <textarea className="text-sm text-gray-600 mx-4" name="message" />
          <input type="submit" value="Send"/>
        </form>
        <ToastContainer />
    </section>
  );
  
}

export default Contact;