import { useState, useEffect } from 'react';
import Header from '../components/Header';
import { getPosts, savePost } from '../utils/api';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState('');

  useEffect(() => {
    setPosts(getPosts());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) return;
    const updatedPosts = savePost(content);
    setPosts(updatedPosts);
    setContent('');
  };

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', color: '#fff', fontFamily: 'sans-serif' }}>
      <Header />
      <main style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        <form onSubmit={handleSubmit} style={{ marginBottom: '30px', borderBottom: '1px solid #333', paddingBottom: '20px' }}>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="O que está acontecendo no céu azul?"
            style={{ width: '100%', background: '#111', border: '1px solid #333', color: '#fff', borderRadius: '8px', padding: '10px', height: '100px', resize: 'none' }}
          />
          <button type="submit" style={{ background: '#00a0ff', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '20px', fontWeight: 'bold', marginTop: '10px', cursor: 'pointer' }}>
            Postar
          </button>
        </form>

        <div>
          {posts.map(post => (
            <div key={post.id} style={{ borderBottom: '1px solid #222', padding: '15px 0' }}>
              <strong style={{ color: '#00a0ff' }}>@{post.author}</strong>
              <p style={{ margin: '10px 0', lineHeight: '1.5' }}>{post.content}</p>
              <small style={{ color: '#555' }}>{new Date(post.date).toLocaleString()}</small>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}