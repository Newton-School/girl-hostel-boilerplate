import React from 'react';
import { Link } from 'react-router-dom';
import './hostel.css';

function Ghostel() {
    const handleClick=(e)=>{
        const hostel = e;
        
       
    }
    return (
        <>
            <h1 style={{ marginTop: '120px' }} id="ghostel">Choose a Hostel</h1>
            <div className='h-outer'>
                <div className='h'onClick={e => handleClick("G1")}data-tid="G1">
                    <Link to='/room' style={{ textDecoration: 'none', color: 'black' }}><p>G1</p></Link>
                </div>
                <div className='h'onClick={e => handleClick("G2")} data-tid="G2">
                    <Link to='/room' style={{ textDecoration: 'none', color: 'black' }}><p>G2</p></Link>
                </div>
                <div className='h'onClick={e => handleClick("G3")}data-tid="G3">
                    <Link to='/room' style={{ textDecoration: 'none', color: 'black' }}><p>G3</p></Link>
                </div>
            </div>
            <div className='h-outer'>
                <div className='h'onClick={e => handleClick("G4")}data-tid="G4">
                    <Link to='/room' style={{ textDecoration: 'none', color: 'black' }}><p>G4</p></Link>
                </div>
                <div className='h'onClick={e => handleClick("G5")}data-tid="G5">
                    <Link to='/room' style={{ textDecoration: 'none', color: 'black' }}><p>G5</p></Link>
                </div>
                <div className='h'onClick={e => handleClick("G6")}data-tid="G6">
                    <Link to='/room' style={{ textDecoration: 'none', color: 'black' }}><p>G6</p></Link>
                </div>
            </div>
        </>
    )
}

export default Ghostel