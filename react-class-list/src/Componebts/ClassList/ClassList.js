import { Button } from 'bootstrap';
import React from 'react';
import Navbar from '../Navbar/Navbar';
import './ClassList.css'



const ClassList = () => {
    return (
        <div >
            <Navbar></Navbar>
            <div className='section'>
                 <div className='container'>
                   <div className='top-nav'>
                    <h4>nion</h4>
                   </div>
                   <div className='main'>
                      <div>
                         <h1>Class List</h1>
                          <ul>
                            <li>Classes</li>
                             <li>Class List</li>
                          </ul>
                      </div>
                      <div>
                      </div>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default ClassList;