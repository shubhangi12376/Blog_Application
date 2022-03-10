import { Link } from 'react-router-dom';
import './Post.css'

const Post = ({post}) => {
    const PF = process.env.REACT_APP_IMAGE_PATH ;
    return(
        <div className='post'>

            {post.photo && (<img className= {"postImage"} src={PF+post.photo} alt='' />)}
            
            <div className="postInfo">
                
                <Link to={`/post/${post._id}`} className="link">
                <span className="postTitle">{post.title}</span>
                </Link>
                <hr />
                <span className="postDate">{new Date (post.createdAt).toDateString()}</span>
            </div>
            <p className='postDesc'>{post.desc}</p>
        </div>
    );
}

export default Post;