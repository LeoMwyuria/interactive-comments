import React, { useState } from 'react';
import Upvote from "../upvote/Upvote";
import reply from "../../assets/Path.png";
import TypeComment from "../typeComment/TypeComment";
import img from "../../assets/Oval.png"
import { You } from '../../App';
import Comment from './Comment1';
interface CommentProps {
  image: string;
  value?: string;
  name?: string;
  date?: string;
  index: number; 
}

const Comment2: React.FC<CommentProps> = ({ image, value, name, date, index }) => {
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [comments, setComments] = useState<string[]>([]);
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var formattedDate = month + '-' + day;

  const handleReplyClick = () => {
    setShowReplyInput(true);
  };

  const handleSend = (comment: string) => {
    const updatedComments = [...comments];
    updatedComments.splice(index + 1, 0, comment); 
    setComments(updatedComments);
    setShowReplyInput(false);
  };
  const deleteComment = (index: number) => {
    const updatedComments = [...comments];
    updatedComments.splice(index, 1);
    setComments(updatedComments);
};

  return (
    <div className="comment">
      <div className="profile">
        {image && <img src={image} alt="" />}
        <span>{name}</span><span>{date}</span>
      </div>
      <p className="p1">{value}</p>
      <div className="replyDiv">
        <Upvote />
        <div className="reply" onClick={handleReplyClick}>
          <img src={reply} alt="" />
          <p>Reply</p>
        </div>
      </div>
      {showReplyInput && (
        <TypeComment
        senBtnClass = 'replySend'
        inputClass='replyInput'
        
        classname=""
          image={img}
          onSend={handleSend}
        />
      )}
      
      {comments.map((comment, commentIndex) => (
        <div key={commentIndex} >
            <Comment
                  classname='comment'
                  key={index}
                  index={index}
                  name={`${You} replied to ${name}`}
                  value={comment}
                  image={img}
                  date={formattedDate}
                  onDelete={deleteComment}
                  onUpdate={(index, newValue) => {
                      const updatedComments = [...comments];
                      updatedComments[index] = newValue;
                      setComments(updatedComments);
                  } } width={''}                  />
        </div>
      ))}
    </div>
  );
};

export default Comment2;
