import React from 'react';
import emailjs from 'emailjs-com';

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm('service_dwa6hdv', 'template_a8by3tr', e.target, 'user_xC47zqIC3rLQHVmgh88bX')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <main>
      <div>
        <h1>Contact Me</h1>
        <p>would you like to work with me? Awesome</p>
        <h3>Email me at</h3>
        <p>diegoespinoza475@outlook.com</p>
      </div>
      <div></div>
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </main>
  );
}
