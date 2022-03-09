import './Write.css';
import '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useContext, useState } from 'react';
import axios from 'axios';
import {Context} from '../../context/Context';

const Write = () => {

    const [title , setTitle ] = useState("");
    const [desc , setDesc ] = useState("");
    const [file , setFile ] = useState(null);
    const {user} = useContext(Context);
    
    const handlePublish = async (e) => {
        e.preventDefault();
        const newPost = {
            username : user.username,
            title,
            desc,
        };
        if(file){
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename)
            data.append("file" ,file);
            newPost.photo = filename ;
            try{
                await axios.post("/upload",data);
            }catch(err){

            }
        }
        try{
          const res =  await axios.post("/posts",newPost);
          window.location.replace("/post/"+res.data._id);
        }catch(err){

        }
    };


    return(
        <div className="write">
            {file && <img className='WriteImage' src = {URL.createObjectURL(file)} alt='' />}

            <form className='writeForm' onSubmit={handlePublish}>
                <div className="writeFormGroup">
                    <label htmlFor='fileInput'>
                       <div className="writeIcon"><AddCircleOutlineIcon /></div> 
                    </label>
                    <input type={"file"} id="fileInput" style={{display:'none'}} onChange={(e) => setFile(e.target.files[0])}/>
                    <input type={"text"} className="writeInput" placeholder='Title' autoFocus={true} onChange ={(e) => setTitle(e.target.value)}></input>
                </div>    
                <div className="writeFormGroup">
                    <textarea className="writeInput writeStory" type = "text" placeholder='Tell your story...' onChange ={(e) => setDesc(e.target.value)}></textarea>
                    <button className="writeSubmit" type='submit'>Publish</button>
                </div>
            </form>
        </div>
    );
}

export default Write;