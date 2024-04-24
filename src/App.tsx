import  { useState } from 'react';
import img from "./assets/Oval.png";
import Comment from "./components/comment/Comment1";
import TypeComment from "./components/typeComment/TypeComment";
import rammstein from './assets/image.png';
import Comment2 from './components/comment/Comment2';
 export   const You = 'Taylor';
function App() {
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var formattedDate = month + '-' + day;

    const [comments, setComments] = useState<string[]>([]); 

    const handleSend = (comment: string) => {
        setComments([...comments, comment]);
    };

    const deleteComment = (index: number) => {
        const updatedComments = [...comments];
        updatedComments.splice(index, 1);
        setComments(updatedComments);
    };

    return (
        <div className="main">
            <div className="comments">
                <Comment2
            name='Rammstein'
            value='Woah, your project looks awesome! How long have you been coding for? I’m still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!'
            image={rammstein}
            date={formattedDate} index={0}                />
                {comments.map((comment, index) => (
                    <Comment
                    classname={'comment'}
                    width=''
                    key={index}
                    index={index}
                    name={You}
                    value={comment}
                    image={img}
                    date={formattedDate}
                    onDelete={deleteComment}
                    onUpdate={(index, newValue) => {
                      const updatedComments = [...comments];
                      updatedComments[index] = newValue;
                      setComments(updatedComments);
                    } }                   />
                  
                ))}
            </div>
            <TypeComment
            senBtnClass='send'
            inputClass='commentInput'
           
            classname='typeComment'
                image={img}
                onSend={handleSend} 
            />
        </div>
    );
}

export default App;