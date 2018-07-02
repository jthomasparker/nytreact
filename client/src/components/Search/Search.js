import React from "react";
import "./Search.css"


export const Search = props => (
    <div className="card text-white bg-dark mb-3 searchCard">
        <div className="card-header">
            <ul className="nav nav-pills">
                <li className={"btn " + props.searchBtn}>
                    <a href="/" className="nav-link text-white">Search</a></li>
                <li className={"btn " + props.saveBtn}>
                <a href="/saved" className="nav-link text-white">Saved</a></li>
            </ul>
        </div>
        <div className="card-body" id="searchBody" style={{display: props.searchDisplay}}>
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