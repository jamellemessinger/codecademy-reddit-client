import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPosts, fetchPosts } from '../../features/postsSlice';
import Card from './Card';

export default function Cards() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  console.log(posts);

  useEffect(() => {
    dispatch(fetchPosts('https://www.reddit.com/r/pics.json'));
  }, [dispatch]);

  return (
    <div className="cards">
      {posts.map((post) => (
        <Card key={post.data.id} postData={post.data} />
      ))}
    </div>
  );
}
