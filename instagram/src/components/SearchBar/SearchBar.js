import React from 'react';
// import PropTypes from 'prop-types';

import './SearchBar.css';

function SearchBar(props) {
    return (
        <div className='searchContainer'>
            <div className='searchLeft'>
                <i class="fab fa-instagram fa-3x"></i>
                <h1>Insta</h1>
                <img src='https://static1.fjcdn.com/comments/Victim+blam+_1e769e2bbdc2c42861767356de0be360.jpg' />
            </div>
            <div className='searchMid'>
                <form onSubmit={ (e) => props.searchFilter(e)}>
                    <input 
                        type='search bar'
                        placeholder='Search'
                        name='searchInput'
                        value={props.searchInput}
                        onChange={props.handleChanges}
                    />
                </form>
            </div>
            <div className='searchRight'>
                <i class="far fa-compass fa-2x"></i>
                <i class="far fa-heart fa-2x"></i>
                <i class="far fa-user fa-2x"></i> 
            </div>
        </div>
    )
}

// SearchBar.propTypes = {
//     searchFilter: PropTypes.function,
//     searchInput: PropTypes.string,
//     handleChanges: PropTypes.function
// }

export default SearchBar;