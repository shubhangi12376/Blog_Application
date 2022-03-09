import '@mui/icons-material'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link  } from 'react-router-dom'
import {useContext} from 'react'
import { Context } from '../../context/Context';

import './TopBar.css'

const ToolBar = () => {

    const {user , dispatch } = useContext(Context);
    
    
    const handleLogout = () => {
        dispatch({type:"LOGOUT"})
    }
    return(
        <>
        <div className='top'>
            <div className='topLeft'>
                <div className = "topIcon"> <FacebookIcon /></div>
                <div className = "topIcon"> <InstagramIcon /></div>
                <div className = "topIcon"> <TwitterIcon /></div>
            </div>
            <div className='topCenter'>
               <ul className='topList'> 
                    <li className='topListItem'>
                        <Link className='link' to = "/">HOME</Link></li>
                    <li className='topListItem'>
                         <Link className='link' to = "/write">WRITE</Link></li>
                    <li className='topListItem' onClick={handleLogout}>{
                        user && "LOGOUT"
                        }</li>
                </ul>
            </div>
            <div className='topRight'>
                {
                    user? (<Link to={`/?user=${user.username}`} className="link">
                    <b className='colortop'> {"Welcome " + user.username}</b>
                  </Link>) : (
                        <ul className='topList'>
                            <li className="topListItem">
                                 <Link className='link' to = "/login">LOGIN</Link> 
                            </li>
                            <li className="topListItem">
                                <Link className='link' to = "/register">REGISTER</Link>
                            </li>    
                        </ul>
                    )
                }
            </div>
        </div>
        </>
    );
}

export default ToolBar