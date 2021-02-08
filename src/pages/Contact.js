import React from 'react';
import FadeIn from '../utils/FadeIn'
import ContactForm from '../components/FormContainer';

const ContactPage = () => {
    return (
        // Render contact page w/ fade in effect
        <FadeIn delay={250} duration={450}>
            <ContactForm />
        </FadeIn>
    );
}
 
export default ContactPage;