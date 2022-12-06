import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogFetch } from '../../axios/config';

import './styles.css';

export type Posts = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const Home = () => {

  const [posts, setPosts] = useState<Posts[]>([]);

  const getPosts = async () => {

    try {
      const response = await blogFetch.get('/posts');
      const data = response.data;
      
      setPosts(data);
    } catch (err) {
      console.log(err);

    }
  }

  useEffect(() => {

    getPosts();

  }, []);

  return (
    <div className='home'>
      <h1>Último posts</h1>
      {posts.length === 0 ? <p>Carregando...</p> : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/posts/${post.id}`} className="btn-ler-mais">Ler mais</Link>
          </div>
        ))
      )}
    </div>
  )
}
