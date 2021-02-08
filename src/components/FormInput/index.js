import React from 'react';

const FormInput = ({ type, label, placeholder, onChange }) => {
    // Render form input
    return ( 
        <>
            <label className='mt-3'>
                { label }
            </label>

            <input type={ type } className="form-control" name={ label } placeholder={ placeholder } onChange={ onChange } required />
        </>
    );
}
 
export default FormInput;