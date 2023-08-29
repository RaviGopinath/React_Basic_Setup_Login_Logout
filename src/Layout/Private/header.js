import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { StateContext } from "../../Store/Context";



function Header() {

    const { dispatch } = useContext(StateContext);

    const Logout = () => {
        localStorage.removeItem("authentication", false);
        dispatch({
            type: "logout",
            payload: false
        })
    }

    return (
        <React.Fragment>
            <nav style={{ width: "100%", height: '60px', backgroundColor: '#fff', boxShadow: '0px 0px 10px 10px #dedede', position: 'fixed', zIndex: '10' }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-2">
                            <img src="./logo.png" style={{ width: 180, marginTop: '2vh' }} />
                        </div>
                        <div className="col-md-10 text-end">
                            <label style={{marginTop : 17}}>
                                <Link to="home" style={{ marginRight: 20, marginTop: '30px', color: '#f14836', textDecoration: 'none' }}>Home</Link>
                                <Link style={{ marginRight: 20, marginTop: '30px', color: '#f14836', textDecoration: 'none' }} to="about">About</Link>
                            </label>
                            <button className="btn btn-primary" style={{ backgroundColor: "#f14836", border: '1px solid #f14836' }} onClick={Logout}>Logout</button>
                        </div>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Header