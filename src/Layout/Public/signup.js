import React from 'react';
import { Link } from 'react-router-dom';

function Signup(){
    return(
        <React.Fragment>
            <div>
            <div className='card' style={{height : 350, width : '60%', marginTop : '20vh', marginLeft : 'auto', marginRight : 'auto'}}>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-sm-none col-md-8' style={{backgroundColor : '#f14836',clipPath: 'polygon(0 0 ,0% 100%,100% 0)', height : '350px',position : 'relative'}}>
                            <div style={{backgroundColor : '#fff', height : 50, width : 200, borderRadius: 3, position : 'absolute', top : 0, left : 0}}>
                            <img src='./logo.png' alt='Logo' style={{width : 180}}/>
                            </div>
                        </div>
                       <div className='col-sm-12 col-md-4 text-center' style={{border : '1px solid #dedede', borderRadus : 10}}>
                            <h3 style={{color : '#f14836', fontWeight : 'bold'}}>Signup</h3>
                            <form className='mt-5'>
                                <input className='form-control' type='email' placeholder='Please enter email'></input>
                                <input className='form-control mt-3' type='password' placeholder='Please enter password'></input>
                                <button className='btn btn-primary mt-3 mb-3' style={{backgroundColor : '#f14836', border : '1px solid #f14836'}}>Signup</button>
                            </form>
                            <p style={{fontSize : 12}}>Already hava an account? <Link to="signup" style={{color : '#f14836'}}>Signin</Link></p>
                       </div>
                    </div>
                </div>
            </div>
            </div>
        </React.Fragment>
    )
}

export default Signup;