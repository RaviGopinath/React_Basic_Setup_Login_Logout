import React, { useContext } from 'react';
import {useForm} from 'react-hook-form';
import { Link } from 'react-router-dom';
import { StateContext } from '../../Store/Context';

function Login(){

    const {dispatch} = useContext(StateContext);
    const {register, handleSubmit, formState : {errors}} = useForm();

    const onSubmit = (data) => {
        console.log(data);
        localStorage.setItem("authentication", true);
        dispatch({
            type : "login",
            payload : true
        })
    }

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
                       <div className='col-sm-12 col-md-4 text-center' style={{border : '1px solid #dedede', borderRadus : 10, height : 350}}>
                            <h3 style={{color : '#f14836', fontWeight : 'bold'}}>Login</h3>
                            <form className='mt-5' onSubmit={handleSubmit(onSubmit)}>
                                <input {...register("email", {required : "Please enter your email"})} className='form-control' type='email' placeholder='Please enter email'></input>
                                {errors?.email && <p className="text-danger">{errors.email.message}</p>}
                                <input {...register("password",{required : "Please enter your password"})} className='form-control mt-3' type='password' placeholder='Please enter password'></input>
                                {errors?.password && <p className="text-danger">{errors.password.message}</p>}
                                <button typ className='btn btn-primary mt-3 mb-2' style={{backgroundColor : '#f14836', border : '1px solid #f14836'}}>Login</button>
                            </form>
                            <p style={{fontSize : 12}}>Didn't hava an account? <Link to="/signup" style={{color : '#f14836'}}>Signup</Link></p>
                       </div>
                    </div>
                </div>
            </div>
            </div>
        </React.Fragment>
    )
}

export default Login;
