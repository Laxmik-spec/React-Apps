import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route, useParams, NavLink} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Home = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then((data) => data.json())
      .then((data) => setPosts(data));
    },[])

  return (
    <div>
      <div className="post-container">
          {posts.map((post) => (
            <NavLink className='post-titles' style = {{ display: "block"}} to={`/post/${post.id}`}>{post.title}</NavLink>
          ))}
      </div>
    </div>
  )
}
const About = () => {
  return (
    <div>
      <h1>About</h1>
    </div>
  )
}

const Profle = () => {

  return (
    <div>
      <h1>Profile</h1>
    </div>
  )

}
const User = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>User {id}</h1>
    </div>
  )
}

const Profile = () => {

  return (
    <div>
      <h1>Profiles</h1>
    </div>
  )
}

const Settings = () => {
  return (
    <div>
      <h1>Settings</h1>
    </div>
  )
}

const PostPage = () => {

  const params = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      .then((data) => data.json())
      .then((data) => setData(data));
  },[])

  if (data === null) return <div>Loading...</div>;

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  )
}

root.render(
  <React.StrictMode>
    <h1 style = {{ textAlign: 'center'}}>React Router </h1>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About/>} />

        <Route path='/post/:postId' element={<PostPage/>}/>

        <Route path='account'>
          <Route path='profile' element={<Profile/>} />
          <Route path='settings' element={<Settings/>} />
        </Route>

        <Route path="/user/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
