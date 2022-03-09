import './Register.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Register = () => {
    const [username , setUsername] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [error , setError] = useState(false);

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const res = await axios.post("/auth/register" , {
                username,
                email,
                password,
            });
            res.data && window.location.replace("/login");
        }catch(err){
            setError(true);
        }
    };
    return(
        <div className="register">
            <span className="registerTitle">Register</span>
            <form action="" className="registerForm" onSubmit={handleSubmit}>
                <label>User Name</label>
                <input type={'text'} placeholder='Enter your User Name..' onChange={(e)=>setUsername(e.target.value)}></input>
                <label>Email</label>
                <input type={'email'} placeholder='Enter your Email-Id..' onChange={(e)=>setEmail(e.target.value)}></input>
                <label>Password</label>
                <input type={'password'} placeholder='Enter your Password..' onChange={(e)=>setPassword(e.target.value)}></input>
                <button className="registerButton" type='submit'>Register</button>
            </form>
            <button className="registerloginButton">
            <Link className='link' to = "/login">Login</Link></button>
            {error && <span style={{color: "red" , margineTop :"20px"}}>Something went wrong!!</span>}
        </div>
    )
}

export default Register;