import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import './Resources.css';

function Resources() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=disaster OR earthquake OR flood OR cyclone&language=en&sortBy=publishedAt&apiKey=899120176c734afca7d8c99114c7c7b1`
        );
        const data = await response.json();

        if (data.status === "ok" && data.articles.length > 0) {
          setArticles(data.articles);
        } else {
          console.warn('No disaster news found:', data);
        }
      } catch (error) {
        console.error('Error fetching disaster news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      <Header />
      <div className="resources-news">
        <h2>Disaster-Related News</h2>
        {articles.length === 0 ? (
          <p style={{ textAlign: 'center', marginTop: '20px' }}>No news available at the moment. Please try again later.</p>
        ) : (
          <div className="news-grid">
            {articles.map((article, index) => (
              <div key={index} className="news-card">
                {article.urlToImage && (
                  <img src={article.urlToImage} alt={article.title} />
                )}
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Resources;
