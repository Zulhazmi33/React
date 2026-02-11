import React from "react";

type ProfileProps = {
  name: string;
  age: number;
  onBirthday: () => void;
};

const Profile: React.FC<ProfileProps> = ({ name, age, onBirthday }) => {
  return (
    <div>
      <h1>Parent-child relationship</h1>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <button onClick={onBirthday}>Celebrate Birthday 🎉</button>
    </div>
  );
};

export default Profile;
