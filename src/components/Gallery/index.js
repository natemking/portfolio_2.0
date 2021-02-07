import React from 'react';
import './style.css'
import empTrack from './images/employee_tracker.gif'
import money from './images/follow-your-money.jpg'
import noteTake from './images/note-taker.jpg'
import pwGen from './images/password-generator.jpg'
import shopChef from './images/shop-n-chef.jpg'
import thme from './images/thme.jpg'


const Gallery = () => {
    return (
        <section className='container col-9 mt-3 border gallery'>
            <h3>Work.</h3>
            <section className='row mt-3'>
                <section className='col-8'>
                    <img src={noteTake} className='img-fluid' />
                </section>
                <section className='col-4'>
                    <h4 className='text-right'>Employee Tracker</h4>
                    <hr />
                    <h5>About.</h5>
                    <p>Helping medical Cannabis patients by recommending strains per certain ailments as well as recommending other herbal remedies.</p>
                    <hr />
                    <h5>Tools.</h5>
                    <p>HTML, CSS, Javascript, Node.js, Express.js, MongoDB, Mongoose, WebPack</p>
                    <hr />
                    <h5></h5>
                    <p>Deploy</p>
                    <p>Git Repo</p>
                </section>
            <section className='row mt-5'>
                    <section className='col-2'>
                        <img src={empTrack} className='img-fluid' />
                    </section>
                    <section className='col-2'>
                        <img src={money} className='img-fluid' />
                    </section>
                    <section className='col-2'>
                        <img src={noteTake} className='img-fluid' />
                    </section>
                    <section className='col-2'>
                        <img src={pwGen} className='img-fluid' />
                    </section>
                    <section className='col-2'>
                        <img src={shopChef} className='img-fluid' />
                    </section>
                    <section className='col-2'>
                        <img src={thme} className='img-fluid' />
                    </section>
            </section>
               
            </section>

        </section>
    );
}
 
export default Gallery;