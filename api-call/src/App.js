
import { useState, useEffect } from 'react';
import { getPosts, getRandomUser } from './api'
import './App.css';
import PostCard from './components/PostCard';
import UserCard from './components/UserCard';

function App() {
 
  const [data, setData] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
      getPosts().then((posts) => console.log(setData(posts)));
    }, []);

  useEffect(() => {
    getRandomUser().then((randomuser) => setUserData(randomuser.results[0])); 
    }, []);

  const handleRefresh = () => {
    getRandomUser().then((randomuser) => setUserData(randomuser.results[0]));
  }
    console.log(userData)
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center'}}>API Call</h1>
      {userData && <UserCard data={userData}/>}
      <button className='btn' onClick={handleRefresh}>Refresh</button>
      
      {data ? data.map((e) => <PostCard title={e.title} body={e.body}/>) : <p></p>}
    </div>
    );
}

export default App;
