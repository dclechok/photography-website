import React from 'react';
import './Contact.css';

function Contact(){
    return (
        <React.Fragment>
          <h3 id="contactID">. contact me .</h3>
          <section>
              <p>Please reach out to me through <a href="mailto:dclechok@gmail.com">email</a> or direct message via one of the following social media services.  Thank you.</p>
            <img src="./" alt="Facebook"/>
          </section>
        </React.Fragment>
      );
}

export default Contact;