import React from 'react';

const FormTextArea = ({ type, label, placeholder, onChange}) => {
    // Render form text area
    return (
       <>
            <label>
                { label }
            </label>

            <textarea type={ type } className="form-control" rows="6" name={ label } placeholder={ placeholder } onChange={ onChange }>
            </textarea>
       </>
    );
}
 
export default FormTextArea;