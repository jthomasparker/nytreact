import React from "react";
import "./ArticleCard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faTimes } from '@fortawesome/free-solid-svg-icons'

export const ArticleCard = props => (
    <div className="card border-light mb-3 articleCard">
        <a href={props.url} target="_blank">
        <div className="img-container">
        <img className="card-img-top" src={props.pic} alt={props.title}/>
        </div>
        </a>
        
        <div className="card-body">
        
            <h4 className="card-title">{props.headline}</h4>
            
            <h6 className="card-subtitle mb-2 text-muted">{props.date}</h6>
            <h6 className="card-subtitle mb-2 text-muted">By {props.author}</h6>
            <p className="card-text">{props.snippet}</p>
            <a href={props.url} target="_blank" className="card-link">Read Article</a>
            {(!props.saved) ? (
            <FontAwesomeIcon icon={faStar} pull="right" className="icon save" size="lg" onClick={()=>props.saveArticle(props.articleId)} />
            ) : (
            <FontAwesomeIcon icon={faTimes} pull="right" className="icon delete" size="lg" onClick={()=>props.deleteArticle(props.articleId)} />
        )}

        </div>
        
        

        
    </div>
)

export default ArticleCard