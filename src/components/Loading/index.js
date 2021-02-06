import React from 'react';
import ReactLoading from 'react-loading';
import './style.css'


const Loading = () => {
    return (
         <ReactLoading type={'cylon'} color={'#746634'} height={'40%'} width={'20%'} delay={500} className={'loader'}/>
    );
}
 
export default Loading;