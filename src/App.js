import { useEffect, useState } from 'react';
import './App.css';
import User from './components/User/User';
import data from './fake_data/data.json';
function App() {
  let colors = ['00FF00', '18A5D6', 'D60808', 'FF9C00', '9C00FF', 'FF00CC', 'D60808', '00FF00', '8D99AE', 'EF233C'];
  const [users, setUsers] = useState([])
  useEffect(() => {
    setUsers(data)
  }, [])

  const [view, setView] = useState({})
  const viewHandler = (user) => {
    setView(user)
  }
  console.log(view);

  return (
    <div className="container">
      <h1 className='main-title'><span> &nbsp; All Freelancers Information  &nbsp; </span></h1>
      <div className="user-container">
        {
          users.map((user, i) => <User viewHandler={viewHandler} keys={colors[i]} user={user} color={colors[i]} />)
        }
      </div>
    </div>
  );
}

export default App;
