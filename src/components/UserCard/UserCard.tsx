import React from 'react';
import './UserCard.css';

// Define props interface (like Angular @Input)
interface UserCardProps {
  name: string;
  email: string;
  avatar?: string;
  onDelete?: () => void; // Optional callback (like Angular @Output)
}

// Functional component with props
const UserCard: React.FC<UserCardProps> = ({ name, email, avatar, onDelete }) => {
  return (
    <div className="user-card">
      {avatar && <img src={avatar} alt={name} className="user-avatar" />}
      <div className="user-info">
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
      {onDelete && (
        <button onClick={onDelete} className="delete-btn">
          Delete
        </button>
      )}
    </div>
  );
};

export default UserCard;
