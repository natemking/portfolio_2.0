import React, { Suspense, lazy } from 'react';
import './style.css';
import Loading from '../Loading';

const MainImage = lazy(() => import('../MainImage'))
const Sidenav = lazy(() => import('../Sidenav'))

const Container = (props) => {
    return ( 
        <Suspense fallback={<Loading />} >
            <main className="wrapper">
                {props.children}
                <Sidenav />
            </main>
        </Suspense >
    );
}
 
export default Container;