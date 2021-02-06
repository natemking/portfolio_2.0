import React from 'react';

const FormTextArea = ({ type, label, placeholder, onChange}) => {
    return (
       <>
            <label>
                { label }
            </label>
            <textarea type={ type } className="form-control" rows="4" name={ label } placeholder={ placeholder } onChange={ onChange }></textarea>
       </>
    );
}
 
export default FormTextArea;