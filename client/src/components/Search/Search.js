import React from "react";


export const Search = props => (
    <div className="card text-white bg-dark mb-3">
        <h4 className="card-header">Search for Articles</h4>
        <div className="card-body">
            <form>
                <div className="form-group">
                    <label htmlFor="topic">Search Topic (required)</label>
                    <input 
                        type="text" 
                        id="topic" 
                        className="form-control" 
                        name="searchTerm"
                        value={props.searchTerm}
                        onChange={props.handleInputChange}
                        placeholder="Search by topic" />
                </div>
                <div className="form-group">
                    <label htmlFor="startYear">Start Year (optional)</label>
                    <input 
                        type="text" 
                        id="startYear" 
                        className="form-control"
                        name="startYear"
                        value={props.startYear}
                        onChange={props.handleInputChange}
                        placeholder="Enter a starting year (YYYY)" />
                </div>
                <div className="form-group">
                    <label htmlFor="endYear">End Year (optional)</label>
                    <input 
                        type="text" 
                        id="endYear" 
                        className="form-control"
                        name="endYear"
                        value={props.endYear}
                        onChange={props.handleInputChange}
                        placeholder="Enter an end year (YYYY)" />
                </div>
                <button 
                onClick={props.handleFormSubmit} 
                disabled={props.disabled} 
                className="btn btn-warning">Search</button>
            </form>
            
        </div>
    </div>
)

export default Search;