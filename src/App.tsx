import { useState } from 'react';

import './App.css';
import { User, newUser } from './User';
import { UserForm } from './UserForm';

function App() {
  const [value, setValue] = useState<User>(newUser);

  return (
    <div>
      <UserForm value={value} onChange={setValue} />

      {JSON.stringify(value)}
    </div>
  );
}

export default App;
