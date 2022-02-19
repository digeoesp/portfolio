import React from 'react';
import emailjs from 'emailjs-com';
import '../contact/contact.css';

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
    <main className="contact-main">
      <section>
        <div>
          <h1>Contact Me</h1>
          <p>would you like to work with me? Awesome</p>
        </div>
        <div>
          <h3>Email me at</h3>
          <p>diegoespinoza475@outlook.com</p>
          <p>or send me a direct email</p>
        </div>
      </section>
      <section className="form">
        <form className="contact-form" onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" />
          <div>
            <label>
              Name
              <input type="text" name="user_name" />
            </label>
          </div>
          <div>
            <label>
              Email
              <input type="email" name="user_email" />
            </label>
          </div>
          <div>
            <label>
              Message
              <textarea name="message" />
            </label>
          </div>
          <input type="submit" value="Send" />
        </form>
      </section>
    </main>
  );
}
