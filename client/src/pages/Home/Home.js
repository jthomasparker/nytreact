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
        endYear: ""
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
                    this.setState({
                        articles: [...res.data.response.docs]
                    })
                })
        }
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                    <Search 
                        searchTerm={this.state.searchTerm}
                        beginYear={this.state.startYear}
                        endYear={this.state.endYear}
                        handleInputChange={this.handleInputChange}
                        handleFormSubmit={this.handleFormSubmit}
                        disabled={!(this.state.searchTerm)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        {this.state.articles.length ? (
                        <ResultsContainer
                            articles={this.state.articles}
                        />
                        ) : (
                            <h3>No Results</h3>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}


export default Home;