import React from 'react';

function BlogPosts() {
  const posts = [
    {
      image: 'https://azim.commonsupport.com/Amortez/assets/images/news/news-1.jpg',
      date: '23 JUN 2021',
      author: 'Dy Smith',
      lifestyle: 'LifeStyle',
      views: '460',
      title: 'Developing in 106 Countries For Many Communities',
      description:
        'Voluptate velit cillum dol fugiat pariatur. Excepteur anim idet laboru sed perspise tis undy omnis iste natus.',
    },
    {
      image: 'https://azim.commonsupport.com/Amortez/assets/images/news/news-2.jpg',
      date: '23 JUN 2021',
      author: 'Rokx',
      lifestyle: 'LifeStyle',
      views: '150',
      title: 'Get To Know The Area Best Places Aroung You',
      description:
        'Voluptate velit cillum dol fugiat pariatur. Excepteur anim idet laboru sed perspise tis undy omnis iste natus.',
    },
    {
      image: 'https://azim.commonsupport.com/Amortez/assets/images/news/news-3.jpg',
      date: '23 JUN 2021',
      author: 'Jhon',
      lifestyle: 'LifeStyle',
      views: '320',
      title: 'Creating Luxury Spaces That Enhance Lives Of People',
      description:
        'Voluptate velit cillum dol fugiat pariatur. Excepteur anim idet laboru sed perspise tis undy omnis iste natus.',
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-8">Latest From Blog</h2> {/* Increased title font size */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <img src={post.image} alt={post.title} className="w-full h-60 object-cover" />
                <div className="absolute top-4 right-4 bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-sm"> {/* Increased date font size */}
                  {post.date}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-600 text-base mb-4"> {/* Increased author info font size */}
                  <img
                    src="https://azim.commonsupport.com/Amortez/assets/images/news/admin-1.jpg"
                    alt="Author Avatar"
                    className="w-10 h-10 rounded-full mr-3 object-cover" 
                  />
                  <span>By {post.author} {post.lifestyle} {post.views}</span>
                </div>
                <h3 className="text-2xl font-semibold mb-3">{post.title}</h3> {/* Increased title font size */}
                <p className="text-gray-600 text-base">{post.description}</p> {/* Increased description font size */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogPosts;