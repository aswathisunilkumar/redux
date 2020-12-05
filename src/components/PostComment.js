import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addComment, removeComment } from '../actions/actionCreators';

const Comments = () => {
    const comment = useSelector(state => state.postComments.comments);
    const dispatch = useDispatch();

    if( !comment || !comment.length ){
        return (
            <p> No Comment posted for this dish yet</p>
        )
    } 
    else {
        return (
            <ul>
                <div> 
                    {comment.map((comm) =>
                        <div>{comm.label} 
                        <span>
                            <button className="delete-icon" onClick={()=> dispatch(removeComment(comm.id))}>X</button>
                        </span>
                        </div>
                    )}
                </div>   
            </ul>  
        )
    }
};

const CommentInput =() =>{
    const dispatch = useDispatch();
    const [newComment, setnewComment]  = useState('');
    const handleChange =event => setnewComment(event.target.value);    
      return(
        <>
            <input className="input-container" placeholder="Post your Comments!" value={newComment} onChange={handleChange} type="textarea"/>
            <button onClick={()=> dispatch(addComment(newComment))} value="Submit"> ADD COMMENT </button>
        </>
    )
    
}

const PostComment = () => {
    return (
        <div>
            <CommentInput/>
            <Comments/>
        </div>
    )
}

export default PostComment;
