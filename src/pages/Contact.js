import React from 'react';
import FadeIn from '../utils/FadeIn'
import ContactForm from '../components/ContactFormContainer';

const ContactPage = () => {
    return (
        <FadeIn delay={250} duration={450}>
            <ContactForm />
        </FadeIn>
    );
}
 
export default ContactPage;