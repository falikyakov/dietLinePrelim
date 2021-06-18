import React, { useState, useEffect } from 'react'
import Article from './Article';


const ArticlePage = () => {

    const [articles, setArticles] = useState({});

    useEffect(() => {
        fetchArticles();
      
    }, [])


    const fetchArticles = async () => {
        const details = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=fitness&api-key=XAkzbES1lUGCU6HTsAqLBUR0JOBDACoL`);
        const data = await details.json();
        setArticles(data);
        articles &&
        console.log(articles);
    }

    return (
        <div>
            {
                articles.response &&
                articles.response.docs &&
                articles.response.docs.map((article, index) => {
                    return <Article key={index} title={article.headline.main} text={article.lead_paragraph} />
                })
            }
        </div>
    )
}

export default ArticlePage
