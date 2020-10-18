// @flow strict
import React from 'react';
import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <label>
        <input type="text" placeholder="name" id="name" />
      </label>
      <label>
        <input type="email" placeholder="email" id="email" />
      </label>
      <label>
        <textarea placeholder="message" id="message" rows="5" />
      </label>
      <button type="submit">send ✉️</button>
    </form>
  );
};

export default Contact;