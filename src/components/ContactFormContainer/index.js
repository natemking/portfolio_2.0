import React, { useState } from 'react';
import FormInput from '../FormInput';
import FormRow from '../FormRow';
import FormTextArea from '../FormTextArea';
import SubmitBtn from '../SubmitBtn';


const ContactFormContainer = () => {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userMessage, setUserMessage] = useState("");

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
      console.log(userName, userEmail, userMessage);
    }

    return ( 
        <section className="container-sm col-6 mt-5">
            {/* <!-- Contact Form --> */}
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
        </section>
        
    );
}
 
export default ContactFormContainer;