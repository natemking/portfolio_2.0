import React from 'react';

const FormRow = (props) => {
    // Render form row
    return (  
        <section className = "form-row mt-3" >
            { props.children }
        </ section>        
    );
}
 
export default FormRow;