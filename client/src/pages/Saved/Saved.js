import React, { Component } from 'react';
import API from '../../utils/API'
import Search from '../../components/Search'
import ResultsContainer from '../../components/ResultsContainer'
import moment from 'moment'
import ArticleCard from '../../components/ArticleCard'

class Saved extends Component {
    state = {
        savedArticles: []
    }

    componentDidMount(){
        this.loadArticles()
    }

    loadArticles = () => {
        API.getSavedArticles()
            .then((res) => {
                console.log(res)
            this.setState({
                savedArticles: [...res.data]
            })
            console.log(this.state.savedArticles)
        })
    }

    deleteArticle = (articleId) => {
        let article = this.state.savedArticles.find((article) => {
            return article.articleId === articleId
        })
        this.setState({
            savedArticles: [...this.state.savedArticles.filter(element => element.articleId !== article.articleId)]
        })
        console.log(article._id)
        API.deleteArticle(article._id)
        .then(res => console.log(res))
        
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                    <Search
                        searchDisplay={"none"}
                        searchBtn={"btn-outline-primary"}
                        saveBtn={"btn-outline-primary active"}
                        />
                    </div>
                </div>
            
            <div className='container'>
                <div className="row  justify-content-center">
            {this.state.savedArticles.length ? (
                this.state.savedArticles.map(article => (
                    <ArticleCard
                        headline={article.headline}
                        url={article.url}
                        snippet={article.snippet}
                        pic={"https://www.nytimes.com/" + article.pic}
                        date={moment(article.date).format('MMMM Do YYYY, h:mm a')}
                        author={article.author}
                        key={article._id}
                        articleId={article.articleId}
                        saved={true}
                        deleteArticle={this.deleteArticle}
                        />
                ))
            ) : (
                <center>
                    <h3>No Saved Articles</h3>
                </center>
            
            )}
            </div>
            </div>
            </div>
        )
    }
};

export default Saved;