import React from "react";
import { ArticleCard } from "../ArticleCard/ArticleCard";
import moment from 'moment'

const ResultsContainer = props => (
    <div className="container">
        
        <div className="row  justify-content-center">
    {props.articles.map(article => (
        <ArticleCard
            headline={article.headline.main}
            url={article.web_url}
            snippet={article.snippet}
            pic={"https://www.nytimes.com/" + article.multimedia[1].url}
            date={moment(article.pub_date).format('MMMM Do YYYY, h:mm a')}
            author={article.byline.original}
            key={article._id}
            articleId={article._id}
            saved={props.saved}
            deleteArticle={props.deleteArticle}
            saveArticle={props.saveArticle}
            />
            
    ))}
    </div>
    </div>
)

export default ResultsContainer;