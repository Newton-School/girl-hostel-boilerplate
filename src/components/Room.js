import React from 'react';
import { Link } from 'react-router-dom';
import "./room.css";
import "./hostel.css";

function Room() {
    const HandleChange=(e)=>{
        
    }
    const handleClick=(x)=>{
        
    }
    return (
        <>
            <h1 style={{ marginTop: '50px' }}> Choose a Floor </h1>
            <div className='room' id="room">
                
                    {/* <label for="lang">Language</label> */}
                    <select name="floors" id="floor" data-tid="floorSelect" onChange={HandleChange}>
                        <option value="1 Floor">1 Floor</option>
                        <option value="2 Floor">2 Floor</option>
                        <option value="3 Floor">3 Floor</option>
                        <option value="4 Floor">4 Floor</option>
                        <option value="5 Floor">5 Floor</option>
                    </select>
                    {/* <input type="submit" value="Submit" /> */}
               
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Link to='/success' style={{ textDecoration: 'none', color: 'black' }}><div className='h-outer'>
                <div className='h' onClick={e=>handleClick(1)} data-tid="1">
                    <p>1</p>
                </div>
                <div className='h'onClick={e=>handleClick(2)}data-tid="2">
                    <p>2</p>
                </div>
                <div className='h'onClick={e=>handleClick(3)}data-tid="3">
                    <p>3</p>
                </div>
            </div>
                <div className='h-outer'>
                    <div className='h'onClick={e=>handleClick(4)}data-tid="4">
                        <p>4</p>
                    </div>
                    <div className='h'onClick={e=>handleClick(5)}data-tid="5">
                        <p>5</p>
                    </div>
                    <div className='h'onClick={e=>handleClick(6)}data-tid="6">
                        <p>6</p>
                    </div>
                </div>
                <div className='h-outer'>
                    <div className='h'onClick={e=>handleClick(7)}data-tid="7">
                        <p>7</p>
                    </div>
                    <div className='h'onClick={e=>handleClick(8)}data-tid="8">
                        <p>8</p>
                    </div>
                    <div className='h'onClick={e=>handleClick(9)}data-tid="9">
                        <p>9</p>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Room