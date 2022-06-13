import React, { useContext } from 'react';
import './success.css';
import { Link, useNavigate } from "react-router-dom";


function Welcome() {
    //const { logOut, user } = useUserAuth();
    //const navigate = useNavigate();
    // const handleLogout = async () => {
    //     try {
    //         await logOut();
    //         // navigate("/login");
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // };
    const navigate=useNavigate();
    const [user, setUser] = useContext(UserAuthContext);
    const handleLogout=()=>{
        window.localStorage.clear();
        

        window.location.reload(true);
    }
    return (
        <>

            <div className='container' style={{ backgroundColor: "whitesmoke" }} id="welcome">
                {<h2>Welcome {user[0].name}</h2>}
                <h4>You already have a room booked</h4>
                <h3>Your room deatils are as follows :</h3>
                <br></br>
                <br></br>
                <p><b>Hostel No : <span>{localStorage.getItem("hostel")}</span></b></p>
                <p><b>Floor NO :<span>{localStorage.getItem("floor")}</span></b></p>
                <p><b>Room No : <span>{localStorage.getItem("room")}</span></b></p>
            </div>
            <div>
                
                <button onClick={handleLogout}  style={{ marginLeftt: "600px", marginTop: "2px" }}>
                  
                    Logout
                </button>
            </div>
        </>
    )
}

export default Welcome