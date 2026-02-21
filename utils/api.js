// Simulação de banco de dados local para o Gabriel Blue
const POSTS_KEY = 'gabriel_blue_posts';

export const getPosts = () => {
  if (typeof window === 'undefined') return [];
  const posts = localStorage.getItem(POSTS_KEY);
  return posts ? JSON.parse(posts) : [
    { id: 1, author: 'Gabriel', content: 'Bem-vindo ao Gabriel Blue! 🚀', date: new Date().toISOString() },
    { id: 2, author: 'Sistema', content: 'Este é um site 100% online inspirado no Pink Sky.', date: new Date().toISOString() }
  ];
};

export const savePost = (content) => {
  const posts = getPosts();
  const newPost = {
    id: Date.now(),
    author: 'Gabriel (Você)',
    content: content,
    date: new Date().toISOString()
  };
  const updatedPosts = [newPost, ...posts];
  localStorage.setItem(POSTS_KEY, JSON.stringify(updatedPosts));
  return updatedPosts;
};