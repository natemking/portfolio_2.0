import React from 'react';

const ResumeTitle = (props) => {
   const { pageNumber, nextPage, togglePageNumber } = props

    return (

        <section className="container__title ">

            <section>
                <h3>
                    Resume.
                </h3>
            </section>

            <section>
                {/* If the resusme is on page 1 show the following span: */}
                <span className={ pageNumber === 'pg 1' ? 'container__title-show' : 'container__title-hidden' }>{ pageNumber }</span>
                {/* Click icon to switch pages & toggle page number */}
                <i className="fas fa-arrows-alt-h" onClick={ () => { nextPage(); togglePageNumber(); }}></i>
                {/* If the resusme is on page 2 show the following span: */}
                <span className={ pageNumber === 'pg 2' ? 'container__title-show' : 'container__title-hidden' }>{ pageNumber }</span>
            </section>

            <section>
                {/* Downloadable PDF of resume */}
                <a href="/misc/NateMKing-resume.pdf" download>
                    download
                    </a>
            </section>

        </section>
    );
}
 
export default ResumeTitle;