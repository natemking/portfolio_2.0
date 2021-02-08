import React, { useState, Suspense, lazy } from 'react';
import '../../index.css'
import './style.css';
import res1 from './res-1.jpg';
import res2 from './res-2.jpg'
import ResumeTitle from '../ResumeTitle';
import Loading from '../Loading';
const ResumeImage = lazy(() => import('../ResumeImage'));


const ResumeContainer = () => {
    // State for resume page displayed and its page number
    const [page, setPage] = useState(res1);
    const [pageNumber, setPageNumber] = useState('pg 1');

    // Function to switch pages when icon clicked
    const nextPage = () => {
      page === res1 ? setPage(res2) : setPage(res1);
    }

    //Function to toggle page numbers display when icon clicked
    const togglePageNumber = () => {
      page !== res1 ? setPageNumber('pg 1') : setPageNumber('pg 2');
    }

    // Render resume and title 
    return ( 
        <section className="container resume__container">

            <ResumeTitle 
                pageNumber={ pageNumber } 
                nextPage={ nextPage } 
                togglePageNumber={ togglePageNumber } 
            />
            
            <Suspense fallback={ <Loading /> }>
                <ResumeImage
                    page={ page }
                />
            </Suspense>
        
        </section>
    );
}
 
export default ResumeContainer;