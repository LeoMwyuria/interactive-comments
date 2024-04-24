import React, { useState } from 'react';

interface TypeCommentProps {
    image: string;
    onSend: (value: string) => void;
    initialValue?: string; 
    classname: string;
    inputClass: string;
    senBtnClass: string;
    
}

const TypeComment: React.FC<TypeCommentProps> = ({ image,senBtnClass, onSend,classname,inputClass, initialValue = '' }) => { 
    const [inputValue, setInputValue] = useState<string>(initialValue);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleSendClick = () => {
        if (inputValue.trim() !== '') {
            onSend(inputValue);
            setInputValue('');
        }
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSendClick();
        }
    };

    return (
        <div className={classname}>
            <div className="inputDiv">
                <input
                
                    className={inputClass}
                    type="text"
                    placeholder="Add A Comment..."
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                />
            </div>
            <br />
            <div className={senBtnClass} onClick={handleSendClick}>
                <img src={image} alt="" />
                <div className="sendBtn">SEND</div>
            </div>
        </div>
    );
};

export default TypeComment;
