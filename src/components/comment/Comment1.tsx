import React, { useState, useRef, useLayoutEffect } from 'react';
import Upvote from "../upvote/Upvote";
import deleteBtn from "../../assets/delete.png";
import editBtn from "../../assets/edit.png";
import DeleteConfirmation from "../deleteConfirmation/DeleteConfirmation";

interface CommentProps {
  classname: string;
  image: string;
  value: string;
  name: string;
  date: string;
  index: number; 
  width: string;
  onDelete: (index: number) => void; 
  onUpdate: (index: number, newValue: string) => void; 
}

const Comment: React.FC<CommentProps> = ({ image,classname, value, name, date, index,width, onDelete, onUpdate }) => {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState(value);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useLayoutEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.style.height = 'auto'; 
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`; 
    }
  }, [isEditing, editedValue]);

  const handleDelete = () => {
    onDelete(index); 
    setShowDeleteConfirmation(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onUpdate(index, editedValue);
    setIsEditing(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditedValue(event.target.value);
  };

  return (
    <div style={{ width: width }} className={classname}>
      <div className="profile">
        <img src={image} alt="" /> <span>{name}</span><span>{date}</span>
      </div>
      {isEditing ? (
        <textarea
          ref={inputRef}
          value={editedValue}
          onChange={handleChange}
          autoFocus
        />
      ) : (
        <p className="p1">{value}</p>
      )}
      <div className="deleteEdit">
        <Upvote />
        <div className="deleteEdit2">
          {isEditing ? (
            <div className="save" onClick={handleSave}>
              UPDATE
            </div>
          ) : (
            <>
              <div className="delete" onClick={() => setShowDeleteConfirmation(true)}>
                <img src={deleteBtn} alt="" />
                <p>Delete</p>
              </div>
              <div className="edit" onClick={handleEdit}>
                <img src={editBtn} alt="" />
                <p>Edit</p>
              </div>
            </>
          )}
        </div>
      </div>
      {showDeleteConfirmation && (
        <div className="modal-background">
          <DeleteConfirmation
            onDelete={handleDelete}
            onCancel={() => setShowDeleteConfirmation(false)}
          />
        </div>
      )}
    </div>
  );
};

export default Comment;
