import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <div>
      <center>
      <div className="Contact-box">
      <h1 className="formLogo" >Contacts</h1>
      <p className="formEmail">Hate forms? Send an <a href="mailto:" className="fromEmail__mail">email</a> instead.</p>

                            <form  className="contact_right">

                                <fieldset>
                                    <textarea type="text" required className="form_control_input" id="Name"
                                        placeholder="Your name" name="Sender's Name" />
                                </fieldset>
                                <fieldset>
                                    <textarea type="email" required className="form_control_input" id="Email"
                                        placeholder="Your email" name="Sender's Email" />
                                </fieldset>
                                <fieldset>
                                    <textarea className="form_control_input" required name="Message" id="Message" placeholder="Message"></textarea>
                                </fieldset>

                                <button type="submit" id="formBtn" className="btn">SEND</button>

                                </form> 
          </div>                    

      </center>
    </div>
  )
}

export default Contact