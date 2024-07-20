import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto '>
      <div className="flex items-center justify-center space-x-4">
          <h3 className='text-4xl lg:text-6xl font-semibold text-orange-500'>FROKER</h3>
          <h3 className='text-4xl lg:text-6xl font-semibold'> BLOG</h3>
        </div>
        <div className="flex items-center justify-center">
     <h1 className='text-3xl lg:text-6xl text-center'>
    Articles covering the most recent updates and advancements
          </h1>
          
        </div>

      </div>

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <div className='flex flex-wrap gap-10'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-orange-500 hover:underline text-center'
            >
              View all posts
            </Link>
            <div className='p-3 bg-amber-100 dark:bg-slate-700'>
         <CallToAction />
      </div>
          </div>
        )}
      </div>
    </div>
  );
}
