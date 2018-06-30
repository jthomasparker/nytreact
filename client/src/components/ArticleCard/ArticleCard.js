import React from "react";

export const ArticleCard = props => (
    <div className="card bg-light mb-3">
        <h4 className="card-header">{props.headline}</h4>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.snippet}</p>
        </div>
    </div>
)

export default ArticleCard