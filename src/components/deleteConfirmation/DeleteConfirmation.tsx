import React from 'react';

interface DeleteConfirmationProps {
  onDelete: () => void;
  onCancel: () => void;
}

const DeleteConfirmation: React.FC<DeleteConfirmationProps> = ({ onDelete, onCancel }) => {
  return (
    <div className="delete-confirmation">
        <h1>Delete Comment</h1>
      <p>Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
      <div className="buttons">
        <button className='deleteButton' onClick={onDelete}> Yes, Delete</button>
        <button className='cancelButton' onClick={onCancel}> No, Cancel</button>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
