import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function BlogPosts() {
  const posts = [
    {
      image: "https://azim.commonsupport.com/Amortez/assets/images/news/news-1.jpg",
      date: "23 JUN 2021",
      author: "Dy Smith",
      lifestyle: "LifeStyle",
      views: "460",
      title: "Developing in 106 Countries For Many Communities",
      description:
        "Voluptate velit cillum dol fugiat pariatur. Excepteur anim idet laboru sed perspise tis undy omnis iste natus.",
    },
    {
      image: "https://azim.commonsupport.com/Amortez/assets/images/news/news-2.jpg",
      date: "23 JUN 2021",
      author: "Rokx",
      lifestyle: "LifeStyle",
      views: "150",
      title: "Get To Know The Area Best Places Around You",
      description:
        "Voluptate velit cillum dol fugiat pariatur. Excepteur anim idet laboru sed perspise tis undy omnis iste natus.",
    },
    {
      image: "https://azim.commonsupport.com/Amortez/assets/images/news/news-3.jpg",
      date: "23 JUN 2021",
      author: "Jhon",
      lifestyle: "LifeStyle",
      views: "320",
      title: "Creating Luxury Spaces That Enhance Lives Of People",
      description:
        "Voluptate velit cillum dol fugiat pariatur. Excepteur anim idet laboru sed perspise tis undy omnis iste natus.",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-8">Latest From Blog</h2>
        <Slider {...settings}>
          {posts.map((post, index) => (
            <div key={index} className="p-4">
              <div className="group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300">
                <div className="relative overflow-hidden">
                  {/* Image with Hover Zoom Effect */}
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Green Transparent Overlay on Hover */}
                  <div className="absolute top-0 left-0 w-full h-full bg-green-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* Date Badge */}
                  <div className="absolute top-4 right-4 bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-sm">
                    {post.date}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-600 text-base mb-4">
                    <img
                      src="https://azim.commonsupport.com/Amortez/assets/images/news/admin-1.jpg"
                      alt="Author Avatar"
                      className="w-10 h-10 rounded-full mr-3 object-cover"
                    />
                    <span>By {post.author} {post.lifestyle} {post.views}</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{post.title}</h3>
                  <p className="text-gray-600 text-base">{post.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default BlogPosts;
