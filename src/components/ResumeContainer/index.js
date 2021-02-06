import React, { useState } from 'react';
import './style.css';
import res1 from './res-1.jpg';
import res2 from './res-2.jpg'
import ResumeTitle from '../ResumeTitle';
import ResumeImage from '../ResumeImage';

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

            <ResumeTitle 
                pageNumber={ pageNumber } 
                nextPage={ nextPage } 
                togglePageNumber={ togglePageNumber } 
            />

            <ResumeImage 
                page={ page }
            />
        
        </section>
    );
}
 
export default ResumeContainer;