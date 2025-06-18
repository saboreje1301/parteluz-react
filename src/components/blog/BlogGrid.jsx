// src/components/blog/BlogGrid.jsx
import React from 'react';
import { use } from 'react';
import { useState, useEffect } from 'react';

function BlogGrid({ preview = false }) {

  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch('/data/blog.json')
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error('Error fetching blog data:', error));
  }, []);

  const displayBlogs = preview ? blogs.slice(0, 3) : blogs;

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        {preview ? 'Latest Articles' : 'Our Blog'}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayBlogs.map((post) => (
          <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={post.image}
                alt={post.title}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
            
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">
                
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              
<button
  className="text-gray-900 font-semibold hover:text-gray-700 p-3 rounded min-w-[48px] min-h-[48px] flex items-center justify-center">
  <a
    href={post.link}
    className="text-gray-900 font-semibold hover:text-gray-700"
    style={{ display: 'block', width: '100%', height: '100%' }}
  >
    Leer más →
  </a>
</button>
            </div>
          </article>
        ))}
      </div>
      
      {preview && (
        <div className="text-center mt-8">
          <button className="inline-block bg-gray-900 text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors duration-200">
            View All Posts
          </button>
        </div>
      )}
    </div>
  );
}

export default BlogGrid;