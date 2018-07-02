import React, { Component } from 'react';
import API from '../../utils/API'
import Search from '../../components/Search'
import ResultsContainer from '../../components/ResultsContainer'



class Home extends Component {
    state = {
        savedArticles: [],
        articles: [],
        searchTerm: "",
        startYear: "",
        endYear: "",
        searchDisplay: "",
    }

    componentDidMount() {
        this.setState({
            searchDisplay: ""
        })
      }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        if(this.state.searchTerm){
            API.getArticles(this.state.searchTerm, this.state.startYear, this.state.endYear)
                .then(res => {
                    console.log(res)
                    res.data.response.docs.pop()
                    this.setState({
                        articles: [...res.data.response.docs],
                        searchDisplay: "none"
                    })
                })
        }
    }

    saveArticle = articleId => {
        let article = this.state.articles.find((element) => {
            return element._id === articleId
        })
        
        this.setState({
            savedArticles: [...this.state.savedArticles, article]
        })
       API.postArticle({
            headline: article.headline.main,
            url: article.web_url,
            snippet: article.snippet,
            pic: article.multimedia[1].url,
            date: article.pub_date,
            author: article.byline.original,
            articleId: article._id
       }).then(res => {
           console.log(res)
       })
        
    }




    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                    <Search 
                        searchDisplay={this.state.searchDisplay}
                        searchTerm={this.state.searchTerm}
                        beginYear={this.state.startYear}
                        endYear={this.state.endYear}
                        handleInputChange={this.handleInputChange}
                        handleFormSubmit={this.handleFormSubmit}
                        disabled={!(this.state.searchTerm)}
                        searchBtn={"btn-outline-primary active"}
                        saveBtn={"btn-outline-primary"}
                        />
                    </div>
                </div>
                
                    
                        {this.state.articles.length ? (
                        <ResultsContainer
                            articles={this.state.articles}
                            saved={false}
                            saveArticle={this.saveArticle}
                            deleteArticle={this.deleteArticle}
                        /> 

                        ) : (
                            <center>
                            <h3>No Results</h3>
                            </center>
                        )}
                    
               
            </div>
        )
    }
}


export default Home;