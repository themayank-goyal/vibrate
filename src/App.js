import React, { useState, useEffect } from 'react';
import Post from './components/Post/Post.jsx';
import './style.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import center from '@mui/material/center';
import {getAllPosts} from './utils/firebase.js'

export default function App() {
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  useEffect(() => {
    const  get =  async () => {await getAllPosts(setPosts)}
    get();
  },[])

  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://th.bing.com/th/id/OIP.fXbsIW9i7E60H1DSeb-qsQAAAA?w=163&h=61&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="Instagram"
        />
        <Button onClick={handleOpen}>signup</Button>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <center>
            <img
          className="app__headerImage"
          src="https://th.bing.com/th/id/OIP.fXbsIW9i7E60H1DSeb-qsQAAAA?w=163&h=61&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="Instagram"
        />
              <form className="app__headerForm">
                <input placeholder="username" type="text" />
                <input placeholder="password" type="password" />
                <Button>Signup</Button>
              </form>
            </center>
          </Box>
        </Modal>
      </div>
      {
        posts.map((item) => (
          <Post key={item.id} username={item.username} imageUrl={item.imageUrl} caption={item.caption}/>
        ))
      }
    </div>
  );
}
