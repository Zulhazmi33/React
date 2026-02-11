import React, { useState } from "react";
import Profile from "../props/Profile";

const Parent: React.FC = () => {
  const [age, setAge] = useState<number>(25);

  const handleBirthday = () => {
    setAge(prev => prev + 1);
  };

  return (
    <div>
      <Profile
        name="Sarah"
        age={age}
        onBirthday={handleBirthday}
      />
    </div>
  );
};

export default Parent;