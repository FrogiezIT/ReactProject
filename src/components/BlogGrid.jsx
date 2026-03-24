import React from 'react';

const BlogGrid = ({ posts = [] }) => {
  const defaultPosts = [
    {
      id: 1,
      title: 'Getting Started with React',
      excerpt: 'Learn the basics of React and how to build your first component.',
      date: 'March 20, 2026',
      author: 'John Doe',
      category: 'React',
      image: 'https://via.placeholder.com/400x250?text=React+Basics',
    },
    {
      id: 2,
      title: 'Mastering State Management',
      excerpt: 'Explore different state management solutions for your React applications.',
      date: 'March 18, 2026',
      author: 'Jane Smith',
      category: 'JavaScript',
      image: 'https://via.placeholder.com/400x250?text=State+Management',
    },
    {
      id: 3,
      title: 'CSS Grid vs Flexbox',
      excerpt: 'Understand when to use CSS Grid and when to use Flexbox in your layouts.',
      date: 'March 15, 2026',
      author: 'Mike Johnson',
      category: 'CSS',
      image: 'https://via.placeholder.com/400x250?text=CSS+Layout',
    },
    {
      id: 4,
      title: 'Async/Await Guide',
      excerpt: 'Master asynchronous programming with async/await in JavaScript.',
      date: 'March 12, 2026',
      author: 'Sarah Williams',
      category: 'JavaScript',
      image: 'https://via.placeholder.com/400x250?text=Async+Await',
    },
    {
      id: 5,
      title: 'React Hooks Deep Dive',
      excerpt: 'Understand how React Hooks work and how to use them effectively.',
      date: 'March 10, 2026',
      author: 'Tom Brown',
      category: 'React',
      image: 'https://via.placeholder.com/400x250?text=React+Hooks',
    },
    {
      id: 6,
      title: 'Web Performance Tips',
      excerpt: 'Optimize your website for better performance and user experience.',
      date: 'March 8, 2026',
      author: 'Emily Davis',
      category: 'Performance',
      image: 'https://via.placeholder.com/400x250?text=Performance',
    },
  ];

  const blogPosts = posts.length > 0 ? posts : defaultPosts;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 md:py-16">
      <div className="text-center mb-12 md:mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">My Blog</h1>
        <p className="text-lg text-gray-600">Exploring web development, React, and modern JavaScript</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
            <div className="relative overflow-hidden h-48">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-3 right-3 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                {post.category}
              </span>
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <h2 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">{post.title}</h2>
              <p className="text-gray-600 mb-5 flex-1 line-clamp-3">{post.excerpt}</p>

              <div className="flex gap-4 text-sm text-gray-500 mb-5 pb-4 border-b">
                <span className="font-medium">By {post.author}</span>
                <span>{post.date}</span>
              </div>

              <button className="self-start bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded transition-colors duration-200">
                Read More →
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogGrid;
