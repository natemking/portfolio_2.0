import React, { useState } from 'react';
import './style.css';
import res1 from './res-1.jpg';
import res2 from './res-2.jpg'

const ResumeContainer = () => {
    const [page, setPage] = useState(res1);
    const [pageNumber, setPageNumber] = useState('pg 1');

    const nextPage = () => {
      page === res1 ? setPage(res2) : setPage(res1);
    }

    const togglePageNumber = () => {
      page !== res1 ? setPageNumber('pg 1') : setPageNumber('pg 2');
    }

    return ( 
        <section className="container">

            <section className="container__title ">
               <section> 
                   <h3>
                       Resume.
                    </h3>
                </section>
                <section>
                    <span className={pageNumber === 'pg 1' ? 'show' : 'hidden'}>{ pageNumber }</span>
                    <i className="fas fa-arrows-alt-h" onClick={() => { nextPage(); togglePageNumber(); }}></i>
                    <span className={pageNumber === 'pg 2' ? 'show' : 'hidden'}>{ pageNumber }</span>
                </section>
                <section>
                    <a href="/misc/NateMKing-resume.pdf" download>
                        download
                    </a>
                </section>
            </section>

            <section>
                <img src={ page } alt="Nate M Kings resume" />
            </section>
        
        </section>
    );
}
 
export default ResumeContainer;