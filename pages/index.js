import Header from '../components/Header';
import Post from '../components/Post';
import PostForm from '../components/PostForm';

export default function Home() {
  return (
    <div>
      <Header />
      <PostForm />
      <div>
        <Post author="Gabriel" content="Primeiro post no Gabriel Blue!" />
        <Post author="Amigo" content="Olá, Gabriel Blue funcionando!" />
      </div>
    </div>
  );
}
