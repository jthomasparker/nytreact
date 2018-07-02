import axios from "axios"

export default {
    // gets saved articles
    getSavedArticles: function(){
        return axios.get('/api/articles')
    },

    // saves an article
    postArticle: function(data){
        return axios.post('/api/articles', data)
    },
    
    // deletes an article
    deleteArticle: function(id){
        return axios.delete('/api/articles/' + id)
    },

    getArticles: function(searchTerm, startYear, endYear){
        let key = '0196839c3940438aa8ba8f72b96a9f69' || process.env.REACT_APP_KEY
        let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key="
        url += key
        url += `&q=${searchTerm}`
        if(parseInt(startYear)){
            url += `&begin_date=${startYear}0101`
        }
        if(parseInt(endYear)){
            url += `&end_date=${endYear}1231`
        }
        return axios.get(url)
    }
}