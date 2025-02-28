import React from 'react';
import { useParams } from "react-router";
import './NavBar.css';
import logo from './TAP.png';
import navSettings from './icons/settings.svg';
import navLanding from './icons/home.svg';

function NavBar() {

    let { page } = useParams();
    console.log('The current page is', page)
    return (
        <nav id='navHeader'>
            <a className='navLogo' href='/'><img src={logo} alt='TAP' /></a>
            <div className='links'>
                {
                    page === undefined || page === 'landing' ?
                        <>
                            <div className='navLogIn'><a href='/login'>Login</a></div>
                            <div className='navSignUp'><a href='/signup'>Sign Up</a></div>
                        </>
                        :
                        page === 'login' ?
                        <>
                                <div className='navLanding'><a href='/landing'><img src ={navLanding} alt='landingIcon'></img></a></div>
                                <div className='navSignUp2'><a href='/signup'>Sign Up</a></div>
                                </> :
                            page === 'signup' ?
                                <>
                                    <div className='navLanding'><a href='/landing'><img src ={navLanding} alt='landingIcon'></img></a></div>
                                    <div className='navLogIn2'><a href='/login' >Login</a></div>
                                </> :
                                <div className='navSettings'><a href='/settings'><img src ={navSettings} alt='settingsIcon'></img>
                                </a></div>
                }
            </div>
        </nav>
    );
}
export default NavBar;

// import React from 'react';
// import { useParams } from "react-router";
// import './lisa_navbar.css';
// import logo from '../TAP.png';
// import navSettings from '../icons/settings.svg';
// import navLanding from '../icons/home.svg';

// function NavBar() {

//     let { page } = useParams();
//     console.log('The current page is', page)
//     return (
//         <nav id='navHeader'>
//             <a className='navLogo' href='/landing'><img src={logo} alt='TAP' /></a>
//             <div className='links'>
//                 {
//                     page === '/' || page === 'landing' || page === 'about-app' || page === 'about-us' || page === 'terms' ?
//                         <>
//                             <div className='navLogIn'><a href='/login'>Login</a></div>
//                             <div className='navSignUp'><a href='/signup'>Sign Up</a></div>
//                         </>
//                         :
//                         page === 'login' ?
//                         <>
//                                 <div className='navLanding'><a href='/landing'><img src ={navLanding} alt='landingIcon'></img></a></div>
//                                 <div className='navSignUp2'><a href='/signup'>Sign Up</a></div>
//                                 </> :
//                             // page === 'signup' ?
//                                 <>
//                                     <div className='navLanding'><a href='/landing'><img src ={navLanding} alt='landingIcon'></img></a></div>
//                                     <div className='navLogIn2'><a href='/login' >Login</a></div>
//                                 </> 
//                                 // : <div className='navSettings'><a href='/settings'><img src ={navSettings} alt='settingsIcon'></img>
//                                 // </a></div>
//                 }
//             </div>
//         </nav>
//     );
// }
// export default NavBar;