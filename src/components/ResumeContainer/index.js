import React, { useState } from 'react';
import './style.css';
import res1 from './res-1.jpg';
import res2 from './res-2.jpg'

const ResumeContainer = () => {
    const [page, setPage] = useState(res1)


    return ( 
        <section className="container">
            
            <section className="container__title ">
               <section> 
                   <h3>
                       Resume.
                    </h3>
                </section>
                <section>
                    <i className="fas fa-arrows-alt-h"></i>
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