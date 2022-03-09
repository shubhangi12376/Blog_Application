import './login.css'
import { Link } from 'react-router-dom';
import { useContext , useRef , useState} from 'react';
import { Context } from '../../context/Context';
import axios from 'axios';

const Login = () => {

    const userRef = useRef();
    const passwordRef = useRef();
    const {dispatch, isFetching } = useContext(Context);
    const [error , setError] = useState(false);
 
    const handleSubmit =  async (e) => {
        e.preventDefault();
        dispatch({type:"LOGIN_START"});
        try{
            const res = await axios.post("/auth/login" , {
                username : userRef.current.value,
                password : passwordRef.current.value,
            })
        dispatch({type:"LOGIN_SUCCESS" , payload : res.data});   
        }catch(err){
            setError(true);
            dispatch({type:"LOGIN_FAILURE"});
        }
    }
    
    return(
        <div className="login">
            <span className="loginTitle">Login</span>
            <form action="" className="loginForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input type={'text'} placeholder='Enter your username....'  ref={userRef}></input>
                <label>Password</label>
                <input type={'password'} placeholder='Enter your Password....' ref={passwordRef}></input>
                <button className="loginButton" type='submit' disabled ={isFetching}>Login</button>
            </form>
            <button className="loginRegisterButton">
                <Link className='link' to = "/register">Register</Link></button>
                {error && <span style={{color: "red" , margineTop :"20px"}}>Invalid credentials!!</span>}
        </div>
    )
}

export default Login;