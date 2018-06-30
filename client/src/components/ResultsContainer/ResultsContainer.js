import React from "react";
import { ArticleCard } from "../ArticleCard/ArticleCard";

const ResultsContainer = props => (
    <div>
    {props.articles.map(article => (
        <ArticleCard
            headline={article.headline.main}
            title={article.headline.print_headline}
            snippet={article.snippet}
            key={article._id}
            />
            
    ))}
    </div>
)

export default ResultsContainer;