import React from 'react';
import './style.css'

const Alert = ({ alertState }) => {
    const { alert, type, msg } = alertState;

    return ( 
        <div style={ alert ? { display: 'block' } : { display: 'none'}} 
        className={ `alert alert-${ type ? 'success' : 'danger' }` } 
        role="alert"
        >
            <span>
                {msg}
            </span>
        </div>
    );
}
 
export default Alert;