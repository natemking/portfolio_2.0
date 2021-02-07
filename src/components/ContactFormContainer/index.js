import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import FormInput from '../FormInput';
import FormRow from '../FormRow';
import FormTextArea from '../FormTextArea';
import SubmitBtn from '../SubmitBtn';
import Alert from '../Alert';


const ContactFormContainer = () => {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userMessage, setUserMessage] = useState('')
    const [emailAlert, setEmailAlert] = useState({ alert: false, type: false, msg:''})

    const handleInputChange = e => {
        const  { name, value } = e.target;
        switch ( name ) {
            case 'Name':
                setUserName(value);
                break;
            case 'Email':
                setUserEmail(value);
                break;
            case 'Message':
                setUserMessage(value);
                break;
            default:
                break;
        }
    }

    const handleFormSubmit = e => {
        e.preventDefault();

        const templateParams = {
            from_name: userName,
            reply_to: userEmail,
            message: userMessage
        }

        const sendEmail = async () => {
            try {
                const response = await emailjs.send(
                    process.env.REACT_APP_EMJS_SID, 
                    process.env.REACT_APP_EMJS_TID, 
                    templateParams, 
                    process.env.REACT_APP_EMJS_UID
                );
                console.log('SUCCESS!', response.status, response.text);
                document.querySelector('form').reset();
                setEmailAlert({ alert: true,  type: true, msg: 'Thanks for reaching out. I\'ll be in touch shortly.' })
                
            } catch (err) { 
                console.error('FAILED...', err)
                document.querySelector('form').reset();
                setEmailAlert({ alert: true, type: false, msg: 'Aw $hit. Somethings broke. Please send me an email to natemking@gmail.com' })
            }
        };
        sendEmail();
    }

    return ( 
        <section className="container-sm col-6 mt-3">

            <h3>Communicate.</h3>

            <form className="form-group" onSubmit={ handleFormSubmit }>
                <FormRow>
                    <section className="col-md-6" >
                        <FormInput type='text' label='Name' placeholder='name' onChange={ handleInputChange } />
                    </section>
                    <section className="col-md-6" >
                        <FormInput type='email' label='Email' placeholder='name@email.com' onChange={ handleInputChange } />
                    </section>
                </FormRow>

                <FormRow>
                    <FormTextArea type='text' label='Message' placeholder='message' onChange={ handleInputChange } />
                </FormRow>

                <FormRow>
                    <section className="col-md-4">
                        <SubmitBtn />
                    </section>
                </FormRow>
            </form>
            
                <Alert alertState={ emailAlert }/>
            
        </section>
        
    );
}
 
export default ContactFormContainer;