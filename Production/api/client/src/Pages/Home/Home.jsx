import './Home.css'
import Header from '../../Components/Header/Header';
import Posts from '../../Components/Posts/Posts'
import { useState , useEffect } from 'react';
import axios from 'axios'
import { useLocation } from 'react-router-dom';

const Home = () => {

    const [ posts , setposts ] = useState([]);
    const {search} = useLocation();
  
    useEffect(() => {
        const fetchPosts = async () => {
           const res = await axios.get("/posts"+search)
           setposts(res.data)
        } 
        fetchPosts()
    },[search])

    return(
        <>
        <Header />
        <div className="home">
            <Posts posts = {posts} />
        </div>
        </>
    )
}

export default Home;