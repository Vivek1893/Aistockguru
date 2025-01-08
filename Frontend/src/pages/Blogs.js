import React from "react";
import Footer from "../components/Footer";

const Blogs = () => {
  const articles = [
    {
      id: 1,
      title: "Swing Trading Definition",
      author: "Evan Thompson",
      image: "/assets/img1.png",
      url: "https://example.com/swing-trading-definition",
    },
    {
      id: 2,
      title: "How to Work Hedge Funds?",
      author: "Sophia Reynolds",
      image: "/assets/img3.png",
      url: "https://example.com/how-to-work-hedge-funds",
    },
    {
      id: 3,
      title: "Options Trading in Business?",
      author: "Jake Watson",
      image: "/assets/img4.png",
      url: "https://example.com/options-trading-in-business",
    },
    {
      id: 4,
      title: "Understanding Stock Market Trends",
      author: "Anna Lee",
      image: "/assets/img4.png",
      url: "https://example.com/understanding-stock-market-trends",
    },
    {
      id: 5,
      title: "Understanding Stock Market Trends",
      author: "Anna Lee",
      image: "/assets/img4.png",
      url: "https://example.com/understanding-stock-market-trends",
    },
  ];

  return (
    <>
      <div
        className="w-full p-20 text-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/contact.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        }}
      >
        <h1 className="text-4xl text-white font-semibold">Blogs</h1>
        <p className="text-white mt-2">Home / Blogs</p>
      </div>
      <section className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Articles for Pro Traders
          </h2>
          <p className="text-center mb-8">
            Improve your trading knowledge with articles written to give you an
            edge in your trading journey.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <div
                key={article.id}
                className="bg-gray-800 p-6 rounded-lg hover:border-green-500 transform transition-transform hover:scale-105"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover rounded mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-400 mb-4">by {article.author}</p>
                
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 font-semibold hover:text-green-300 transition-colors"
                >
                  Read More
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="/blogs"
              className="bg-green-500 text-white px-6 py-2 rounded"
            >
              View More
            </a>
          </div>
        </div>
        <Footer className="w-full" />
      </section>
    </>
  );
};

export default Blogs;
