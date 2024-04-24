import React, { useState } from 'react';

interface ReplyProps {
    onReplySend: (reply: string) => void;
}

const Reply: React.FC<ReplyProps> = ({ onReplySend }) => {
    const [replyValue, setReplyValue] = useState<string>('');

    const handleReplyInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setReplyValue(event.target.value);
    };

    const handleReplySendClick = () => {
        if (replyValue.trim() !== '') {
            onReplySend(replyValue);
            setReplyValue('');
        }
    };

    const handleReplyKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleReplySendClick();
        }
    };

    return (
        <div className="replyInputDiv">
            <input
                className="replyInput"
                type="text"
                placeholder="Add A Reply..."
                value={replyValue}
                onChange={handleReplyInputChange}
                onKeyDown={handleReplyKeyPress}
            />
            <div className="replySend" onClick={handleReplySendClick}>
                <div className="sendBtn">SEND</div>
            </div>
        </div>
    );
};

export default Reply;
