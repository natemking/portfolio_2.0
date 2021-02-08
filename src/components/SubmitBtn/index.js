import React from 'react';

const SubmitBtn = ({ btnDisable }) => {
    return (
        // Render form submit button
        <button className="btn btn-lg btn-dark btn-block mt-4" type="submit" disabled={ btnDisable }>
            Submit
        </button>
    );
}
 
export default SubmitBtn;