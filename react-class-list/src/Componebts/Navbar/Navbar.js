import React from 'react';
import { Dropdown } from 'react-bootstrap';
import './Nav.css'

const Navbar = () => {
    return (
        <div>
            <div className='warapper'>
                <div className='sidebar'>
                    <div className='LN_bar'>
                        <div className='logo'><img src={require('./Screenshot_2.png')} alt="" /></div>
                    </div>
                    <div className='dashbord'>
                        <h2>Dashbord</h2>
                        <ul>
                            <li>Class</li>
                            <li>Class</li>
                            <li>Class</li>
                            <li>Class</li>
                            <li>Class</li>
                            <li>Class</li>
                            <li>Class</li>
                            <li>Class</li>
                            <li>Class</li>
                        </ul>

                    </div>
                </div>   
            </div>
        </div>
    );
};

export default Navbar;