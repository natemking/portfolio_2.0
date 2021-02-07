import React from 'react';

const FormInput = ({ type, label, placeholder, onChange }) => {
    return ( 
        <>
            <label>
                { label }
            </label>
            <input type={ type } className="form-control" name={ label } placeholder={ placeholder } onChange={ onChange } required />
        </>
    );
}
 
export default FormInput;