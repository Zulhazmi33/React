import React, { useState, useEffect } from 'react';
import { useFetch } from '../hooks/useCustomHooks';
import { formatDate } from '../utils/formatters';
import './DataFetcher.css';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const DataFetcher: React.FC = () => {
  const [postId, setPostId] = useState(1);
  const [count, setCount] = useState(0);

  // Custom hook usage
  const { data, loading, error } = useFetch<Post>(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );

  // useEffect - runs side effects (like Angular ngOnInit, ngOnChanges)
  useEffect(() => {
    console.log('Component mounted or postId changed:', postId);
    
    // Cleanup function (like Angular ngOnDestroy)
    return () => {
      console.log('Cleanup for postId:', postId);
    };
  }, [postId]); // Dependency array - re-run when postId changes

  // useEffect with empty dependency array - runs once on mount (like ngOnInit)
  useEffect(() => {
    console.log('Component mounted - runs once');
    document.title = `React Learning - Count: ${count}`;
  }, []);

  // useEffect that runs on every render (usually avoided)
  useEffect(() => {
    document.title = `React Learning - Count: ${count}`;
  }, [count]);

  const handleNextPost = () => {
    setPostId(prev => (prev < 100 ? prev + 1 : 1));
  };

  const handlePrevPost = () => {
    setPostId(prev => (prev > 1 ? prev - 1 : 100));
  };

  return (
    <div className="data-fetcher">
      <h2>Data Fetcher Component</h2>
      <p className="subtitle">Demonstrates useEffect, custom hooks, and API calls</p>

      <div className="controls">
        <button onClick={handlePrevPost}>Previous Post</button>
        <span>Post ID: {postId}</span>
        <button onClick={handleNextPost}>Next Post</button>
      </div>

      <div className="counter">
        <p>Counter: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>

      <div className="post-container">
        {loading && <div className="loading">Loading...</div>}
        {error && <div className="error">Error: {error}</div>}
        {data && (
          <div className="post">
            <h3>{data.title}</h3>
            <p className="post-meta">
              User ID: {data.userId} | Posted: {formatDate(new Date())}
            </p>
            <p className="post-body">{data.body}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DataFetcher;
