import React ,{useContext}from 'react';
import log from '../images/log.png';
import { loginContext } from '../App';

function Login () {

  const loginLogout = useContext(loginContext);

    return (
        <div className= " login row log">
            <div className='col-6 '>
                <img src={log} alt='log'/>
            </div>
            <div className="col-6 ">
                <div className='loghead'>
                    <h2>welcome back</h2>
                    <p>sign in your account</p>
                </div>
                <div className="wrapper ">
                    <div className="title"><span>Sign in</span></div>
                    <form action="#">
                        <div className="row">
                            <input type="text" placeholder="User Name" required/>
                        </div>
                        <div className="row eye">
                            <input type="password" placeholder=" Password "  required/>
                        </div>
                        <div className="row button">
                            <input type="submit" value="Sign in" onClick={()=>loginLogout(true)} />
                        </div>
                    </form>
                </div>
            </div> 
        </div>
    )
}

export default Login;