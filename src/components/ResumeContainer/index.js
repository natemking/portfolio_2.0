import React, { useState, Suspense, lazy } from 'react';
import './style.css';
import res1 from './res-1.jpg';
import res2 from './res-2.jpg'
import ResumeTitle from '../ResumeTitle';
// import ResumeImage from '../ResumeImage';
import Loading from '../Loading';
const ResumeImage = lazy(() => import('../ResumeImage'));


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
            
            <Suspense fallback={ <Loading /> }>
                <ResumeImage
                    page={ page }
                />
            </Suspense>
        
        </section>
    );
}
 
export default ResumeContainer;